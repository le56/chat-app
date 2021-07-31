import firebase, { db } from "./Config";
export const addDocument = (collection, data) => {
    const query = db.collection(collection);
    query.add(
        {
            ...data,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        }
    )
}