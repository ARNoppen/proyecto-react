import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getFirestore, getDoc, doc} from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {
    const [Product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot)=> {
            setProduct({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    if (!Product) return <div>Cargando...</div>;

    return( 
        <ItemDetail Product={Product}/>
    );
}; 