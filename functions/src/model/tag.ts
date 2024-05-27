import { FirestoreDataConverter } from "firebase/firestore";

/** */
class Tag {
    id: string;
    name: string;

    /**
     *
     * @param {string} id
     * @param {string} name
     */
    constructor(
        id: string,
        name: string,
    ) {
        this.id = id;
        this.name = name;
    }
}

const tagConverter: FirestoreDataConverter<Tag> = {
    toFirestore: (tag: Tag) => {
        return {
            name: tag.name,
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new Tag(
            snapshot.id,
            data["name"]
        );
    },
};

export { Tag, tagConverter };
