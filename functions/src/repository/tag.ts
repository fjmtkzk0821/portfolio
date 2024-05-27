import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { Tag, tagConverter } from "../model/tag";

const COLLECTION_NAME = "tag";
const collectionRef = collection(db, COLLECTION_NAME).withConverter(
    tagConverter
);

/**
 *
 * @return {any}
 */
async function getAll(): Promise<Tag[]> {
    const q = query(collectionRef);

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
}

/** */
async function setTemp() {
    const list: Tag[] = [
        new Tag("", "tag1"),
        new Tag("", "tag2"),
        new Tag("", "tag3"),
        new Tag("", "tag4"),
    ];
    for (const tag of list) {
        await addDoc(collectionRef, tag);
    }
}

export default { getAll, setTemp };
