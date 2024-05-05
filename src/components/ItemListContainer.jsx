import { useEffect, useState } from "react" 

import Container from 'react-bootstrap/Container';

import data from "../data/Products.json";

import {ItemList} from "./ItemList";

console.log(data)

export const ItemListContainer = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            setProducts(data);
        });
    }, []);

    return( 
    <Container className="mt-4">
        <ItemList Products = {Products}/>
    </Container>
    );
}; 