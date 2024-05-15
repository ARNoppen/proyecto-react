import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getFirestore, getDoc, doc} from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {
    const [item, setItems] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot)=> {
            setItems({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    if (!item) return <div>Cargando...</div>;

    return( 
        <ItemDetail item={item}/>
    );
}; 