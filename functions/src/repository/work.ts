/* eslint-disable max-len */
import {
    addDoc,
    collection,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";
import { Work, workConverter } from "../model/work";
import { db } from "../config/firebase";

const COLLECTION_NAME = "work";
const collectionRef = collection(db, COLLECTION_NAME).withConverter(
    workConverter
);

/**
 *
 * @return {Array<any>}
 */
async function get(): Promise<Work[]> {
    const snapshot = await getDocs(
        query(collectionRef, orderBy("name", "desc"))
    );
    return snapshot.docs.map((doc) => doc.data());
}

/** */
async function setTemp() {
    const list: Work[] = [
        new Work(
            "",
            "work 1",
            "Lorem dolore justo accusam nulla suscipit accumsan clita magna ipsum sed dolore eirmod sanctus lobortis duo vulputate. ",
            [],
            "",
            2
        ),
        new Work(
            "",
            "work 2",
            "Consectetuer iusto feugiat rebum amet dolor stet nulla sadipscing. Feugiat euismod consetetur accumsan lorem consetetur ipsum eirmod minim duo lorem. ",
            [],
            "",
            3
        ),
        new Work(
            "",
            "work 3",
            "Feugiat euismod consetetur accumsan lorem consetetur ipsum eirmod minim duo lorem. Lorem justo diam eos adipiscing justo gubergren soluta gubergren. Wisi accusam kasd sit doming tempor sea sit sea sit ut no nobis amet gubergren.",
            [],
            "",
            4
        ),
        new Work(
            "",
            "work 4",
            "Dolor consetetur vero commodo duis lorem sit kasd labore dolores. Clita rebum et sanctus et sadipscing ut consequat sadipscing amet feugiat sit lorem id nulla rebum. Lorem diam aliquyam sea no. Et ea adipiscing euismod adipiscing eirmod sed et zzril amet euismod labore.",
            [],
            "",
            5
        ),
    ];
    for (const work of list) {
        await addDoc(collectionRef, work);
    }
}

export default { get, setTemp };
