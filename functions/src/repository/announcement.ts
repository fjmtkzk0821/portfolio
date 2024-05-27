import {
    QueryConstraint,
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    startAfter,
} from "firebase/firestore";
import { Announcement, announcementConverter } from "../model/announcement";
import { db } from "../config/firebase";

const COLLECTION_NAME = "announcement";
const NUM_PER_PAGE = 100;
const collectionRef = collection(db, COLLECTION_NAME).withConverter(
    announcementConverter
);

/**
 *
 * @return {Array<any>}
 */
async function getRecent(): Promise<Announcement[]> {
    const constraints: Array<QueryConstraint> = [
        orderBy("createdAt", "desc"),
        limit(1),
    ];
    return queryWithConstraints(constraints);
}

/**
 *
 * @param {string} lastDoc
 * @return {Array<any>}
 */
async function getLatest(lastDoc: string): Promise<Announcement[]> {
    const constraints: Array<QueryConstraint> = [orderBy("createdAt", "desc")];
    const lastDocSnap = await getDoc(doc(collectionRef, lastDoc));
    if (lastDocSnap.exists()) {
        constraints.push(startAfter(lastDocSnap));
    }
    constraints.push(limit(NUM_PER_PAGE));
    return queryWithConstraints(constraints);
}

/**
 *
 * @param {string} id
 * @return {any}
 */
async function getAnnouncement(id: string): Promise<Announcement | null> {
    const docRef = doc(db, COLLECTION_NAME, id).withConverter(
        announcementConverter
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
    return null;
}

/**
 *
 * @param {Array<QueryConstraint>} constraints
 * @return {Promise<Article[]>}
 */
async function queryWithConstraints(
    constraints: Array<QueryConstraint>
): Promise<Announcement[]> {
    const q = query(collectionRef, ...constraints);

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
}

export default { getRecent, getLatest, getAnnouncement };
