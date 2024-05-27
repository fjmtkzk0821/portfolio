import {
    QueryConstraint,
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    setDoc,
    startAfter,
    where,
} from "firebase/firestore";
import { Article, articleConverter } from "../model/article";
import { db } from "../config/firebase";

const COLLECTION_NAME = "article";
const NUM_PER_PAGE = 10;
const collectionRef = collection(db, COLLECTION_NAME).withConverter(
    articleConverter
);

/**
 *
 * @param {string} lastDoc
 * @return {Array<any>}
 */
async function getLatest(lastDoc: string | null): Promise<Article[]> {
    const constraints: Array<QueryConstraint> = [orderBy("createdAt", "desc")];
    const lastDocSnap = lastDoc ?
        await getDoc(doc(collectionRef, lastDoc)) :
        null;
    if (lastDocSnap && lastDocSnap.exists()) {
        constraints.push(startAfter(lastDocSnap));
    }
    constraints.push(limit(NUM_PER_PAGE));
    return await queryWithConstraints(constraints);
}

/**
 *
 * @param {string} tag
 * @param {string} archive
 * @param {string} lastDoc
 * @return {Array<any>}
 */
async function search(
    tag: string, archive: string, lastDoc: string
): Promise<Article[]> {
    const constraints: Array<QueryConstraint> = [
        orderBy("createdAt", "desc"),
    ];
    if (tag) {
        constraints.push(where("tags", "array-contains", tag));
    }
    if (archive) {
        const dateStringArray = archive.split("/");
        const year = Number.parseInt(dateStringArray[0]);
        const month = Number.parseInt(dateStringArray[1]);
        const from = new Date(year, month - 1, 1);
        const to = new Date(year, month, 1);
        console.log(from);
        console.log(to);
        constraints.push(where("createdAt", ">=", from));
        constraints.push(where("createdAt", "<", to));
    }
    const lastDocSnap = lastDoc ?
        await getDoc(doc(collectionRef, lastDoc)) : null;
    if (lastDocSnap && lastDocSnap.exists()) {
        constraints.push(startAfter(lastDocSnap));
    }
    constraints.push(limit(NUM_PER_PAGE));
    return await queryWithConstraints(constraints);
}

/**
 *
 * @param {string} id
 * @return {any}
 */
async function getArticle(id: string): Promise<Article | null> {
    const docRef = doc(db, COLLECTION_NAME, id).withConverter(articleConverter);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const contentRef = doc(db, `${COLLECTION_NAME}_content`, id);
        const contentSnap = await getDoc(contentRef);
        const article = docSnap.data();
        article.content = contentSnap.exists() ?
            contentSnap.data()["html"] : "";
        return article;
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
): Promise<Article[]> {
    const q = query(collectionRef, ...constraints);

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
}

/**
 *
 * @param {Article[]} data
 */
async function setTemp() {
    const tempArticle: Article[] = [
        new Article(
            "",
            "Temp Article 1",
            "oscar",
            [],
            new Date(),
            new Date(),
            // eslint-disable-next-line max-len
            "Sea augue ut te accusam vulputate et voluptua duis wisi ut dolor laoreet sit eirmod lobortis vero doming. Consetetur magna augue magna accusam aliquyam stet dolore veniam exerci labore voluptua ipsum vulputate blandit et. No et dolor sit nonumy accusam hendrerit erat accusam sea sed facilisi nonumy vero ipsum ut vero takimata. Erat at dolor nonummy exerci ut duis duo sed diam invidunt ullamcorper eos sit vero dolore takimata. At nonumy gubergren sanctus vel consectetuer. Et sadipscing sed elit invidunt. At et iusto accusam diam. Vulputate est facilisis et invidunt rebum nonumy labore magna duo ullamcorper zzril te sed zzril ipsum duo ipsum justo. Duis eos velit sit vero justo at no clita aliquam. No labore invidunt amet elit rebum ut in ullamcorper sanctus aliquip accusam lorem. Diam vero doming amet sea rebum ipsum. Quis duo dolores duo labore rebum labore velit sea sanctus dolor. Sadipscing minim vero gubergren justo ut soluta dolor vel. Erat et dolore tation sed sit lorem invidunt aliquam eos dolores vel mazim invidunt vel vero dolor. Te accusam vel amet ut suscipit diam eu dolore. Voluptua sea erat nulla duo dolores est wisi lorem mazim dolores tempor vero lobortis invidunt vero eleifend. Eos in diam at est magna ut vero enim sit dolor diam.",
            0,
        ),
        new Article(
            "",
            "Temp Article 2",
            "oscar",
            [],
            new Date(),
            new Date(),
            // eslint-disable-next-line max-len
            "Sea augue ut te accusam vulputate et voluptua duis wisi ut dolor laoreet sit eirmod lobortis vero doming. Consetetur magna augue magna accusam aliquyam stet dolore veniam exerci labore voluptua ipsum vulputate blandit et. No et dolor sit nonumy accusam hendrerit erat accusam sea sed facilisi nonumy vero ipsum ut vero takimata. Erat at dolor nonummy exerci ut duis duo sed diam invidunt ullamcorper eos sit vero dolore takimata. At nonumy gubergren sanctus vel consectetuer. Et sadipscing sed elit invidunt. At et iusto accusam diam. Vulputate est facilisis et invidunt rebum nonumy labore magna duo ullamcorper zzril te sed zzril ipsum duo ipsum justo. Duis eos velit sit vero justo at no clita aliquam. No labore invidunt amet elit rebum ut in ullamcorper sanctus aliquip accusam lorem. Diam vero doming amet sea rebum ipsum. Quis duo dolores duo labore rebum labore velit sea sanctus dolor. Sadipscing minim vero gubergren justo ut soluta dolor vel. Erat et dolore tation sed sit lorem invidunt aliquam eos dolores vel mazim invidunt vel vero dolor. Te accusam vel amet ut suscipit diam eu dolore. Voluptua sea erat nulla duo dolores est wisi lorem mazim dolores tempor vero lobortis invidunt vero eleifend. Eos in diam at est magna ut vero enim sit dolor diam.",
            0,
        ),
    ];
    for (const article of tempArticle) {
        const docRef = await addDoc(collectionRef, article);
        const contentDocRef = doc(db, `${COLLECTION_NAME}_content`, docRef.id);
        // eslint-disable-next-line max-len
        await setDoc(contentDocRef, { html: "<h1>h1 Heading 😎\n</h1> <h2>h2 Heading\n</h2> <h3>h3 Heading\n</h3> <h4>h4 Heading\n</h4> <h5>h5 Heading\n</h5> <h6>h6 Heading\n</h6> <h2>Horizontal Rules</h2> <hr> <hr> <hr> <h2>Typographic replacements</h2> <p>Enable typographer option to see result.</p>" });
    }
}

export default {
    getLatest,
    search,
    getArticle,
    setTemp,
};
