import { FirestoreDataConverter } from "firebase/firestore";

/**
 *
 */
class Work {
    id: string;
    name: string;
    description: string;
    tags: string[];
    link: string;
    type: number;

    /**
     * @param {string} id
     * @param {string} name
     * @param {string} description
     * @param {string[]} tags
     * @param {string} link
     * @param {number} type
     */
    constructor(
        id: string,
        name: string,
        description: string,
        tags: string[],
        link: string,
        type: number,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.link = link;
        this.type = type;
    }
}

const workConverter: FirestoreDataConverter<Work> = {
    toFirestore: (work: Work) => {
        return {
            name: work.name,
            description: work.description,
            tags: work.tags,
            link: work.link,
            type: work.type,
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new Work(
            snapshot.id,
            data["name"],
            data["description"],
            data["tags"],
            data["link"],
            data["type"]
        );
    },
};

export { Work, workConverter };
