import { useEffect, useState } from "react" 

import Container from 'react-bootstrap/Container';
import {ItemList} from "./ItemList";
import {useParams} from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";



export const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();  

        let refCollection;

        if(!id) {
            refCollection = collection (db, "items");
        }else{
            refCollection = query(
                collection (db, "items"), 
                where("categoryId", "==", id ));
        }

        getDocs(refCollection).then((snapshot) => { 
            setItems(
            snapshot.docs.map((doc) =>{
                return{ id: doc.id, ...doc.data() };
            })
        );
        });
    }, [id]);

    return( 
    <Container className="mt-4">
        <ItemList items = {items}/>
    </Container>
    );
}; 