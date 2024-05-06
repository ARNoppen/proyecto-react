import { useEffect, useState } from "react" 

import Container from 'react-bootstrap/Container';
import data from "../data/Products.json";
import {ItemList} from "./ItemList";
import {useParams} from "react-router-dom"

console.log(data)

export const ItemListContainer = () => {
    const [Products, setProducts] = useState([])

    const { id } = useParams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            if(!id) {
                setProducts(data);
            } else{
                const filtered = data.filter(p => p.categoria === id);
                setProducts(filtered)
            }
            
        });
    }, []);

    return( 
    <Container className="mt-4">
        <ItemList Products = {Products}/>
    </Container>
    );
}; 