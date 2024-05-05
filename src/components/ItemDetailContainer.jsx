import { useEffect, useState } from "react" 

import Container from 'react-bootstrap/Container';

import data from "../data/Products.json";


console.log(data)

export const ItemDetailContainer = () => {
    const [Product, setProduct] = useState(null)

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            setProduct(data[0]);
        });
    }, []);

    if (!Product) return <div>Cargando...</div>;

    return( 
    <Container className="mt-4">
        <h1>{Product.name}</h1>
        <img src={Product.img} alt="Img" />
    </Container>
    );
}; 