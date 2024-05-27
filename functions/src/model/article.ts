import { FirestoreDataConverter, Timestamp } from "firebase/firestore";

/**
 *
 */
class Article {
    id: string;
    title: string;
    author: string;
    tags: string[];
    createdAt: Date;
    modifiedAt: Date;
    content: string;
    views: number;

    /**
     * @param {string} id
     * @param {string} title
     * @param {string} author
     * @param {string[]} tags
     * @param {Date} createdAt
     * @param {Date} modifiedAt
     * @param {string} content
     * @param {number} views
     */
    constructor(
        id: string,
        title: string,
        author: string,
        tags: string[],
        createdAt: Date,
        modifiedAt: Date,
        content: string,
        views: number
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.tags = tags;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.content = content;
        this.views = views;
    }
}

const articleConverter: FirestoreDataConverter<Article> = {
    toFirestore: (article: Article) => {
        return {
            title: article.title,
            author: article.author,
            tags: Array.from(article.tags),
            createdAt: article.createdAt,
            modifiedAt: article.modifiedAt,
            content: article.content,
            view: article.views,
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new Article(
            snapshot.id,
            data["title"],
            data["author"],
            data["tags"],
            (data["createdAt"] as Timestamp).toDate(),
            data["modifiedAt"],
            data["content"],
            data["views"]
        );
    },
};

export { Article, articleConverter };
