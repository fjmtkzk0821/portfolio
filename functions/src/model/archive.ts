import { FirestoreDataConverter } from "firebase/firestore";

/**
 *
 */
class Archive {
    id: string;
    year: string;
    month: string;
    count: number;

    /**
     *
     * @param {string} id
     * @param {string}year
     * @param {string}month
     * @param {string}count
     */
    constructor(
        id: string,
        year: string,
        month: string,
        count: number
    ) {
        this.id = id;
        this.year = year;
        this.month = month;
        this.count = count;
    }
}

const archiveConverter: FirestoreDataConverter<Archive> = {
    toFirestore: (archive: Archive) => {
        return {
            year: archive.year,
            month: archive.month,
            count: archive.count,
        };
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        return new Archive(
            snapshot.id,
            data["year"],
            data["month"],
            data["count"]
        );
    },
};

export { Archive, archiveConverter };
