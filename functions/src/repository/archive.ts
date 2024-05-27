import {
    addDoc,
    collection,
    getDocs,
    query,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { Archive, archiveConverter } from "../model/archive";

const COLLECTION_NAME = "archive";
const collectionRef = collection(db, COLLECTION_NAME).withConverter(
    archiveConverter
);

/**
 * @return {Promise<Set<string>>}
 */
async function getAll(): Promise<Archive[]> {
    const snapshot = await getDocs(query(collectionRef));
    return snapshot.docs.map((doc) => doc.data());
}

/** */
async function setTemp() {
    const list: Archive[] = [
        new Archive(
            "",
            "2022",
            "01",
            1
        ),
        new Archive(
            "",
            "2022",
            "02",
            2
        ),
        new Archive(
            "",
            "2022",
            "03",
            5
        ),
    ];
    for (const archive of list) {
        await addDoc(collectionRef, archive);
    }
}

export default {
    getAll,
    setTemp,
};
