import { FirestoreDataConverter } from "firebase/firestore";

/**
 *
 */
class Announcement {
    title: string;
    author: string;
    createdAt: Date;
    content: string;

    /**
     *
     * @param {string} title
     * @param {string} author
     * @param {Date} createdAt
     * @param {string} content
     */
    constructor(
        title: string,
        author: string,
        createdAt: Date,
        content: string
    ) {
        this.title = title;
        this.author = author;
        this.createdAt = createdAt;
        this.content = content;
    }
}

const announcementConverter: FirestoreDataConverter<Announcement> = {
    toFirestore: (article) => {
        return {};
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new Announcement(
            data["title"],
            data["author"],
            data["createdAt"],
            data["content"]
        );
    },
};

export { Announcement, announcementConverter };
