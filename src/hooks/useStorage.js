import { useState, useEffect} from 'react';
import { storage, firestore, timestamp } from '../firebase/config'

const storageUse = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const refStorage = storage.ref(file.name);
        const refCollection = firestore.collection('images') // make a reference to a specific file inside database

        //upload the file with put method
        refStorage.put(file).on('state_changed', (snap) => {
            let perc = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(perc);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await refStorage.getDownloadURL();
            const createdAt = timestamp();
            refCollection.add({ url, createdAt })
            setUrl(url);
        }) 
    }, [file]);

    return { progress, url, error }
}

export default storageUse;