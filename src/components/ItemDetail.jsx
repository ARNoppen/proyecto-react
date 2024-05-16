import Container from "react-bootstrap/Container";
import { useContext } from "react";

import{ ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({item}) =>{
const { addItem } = useContext(CartContext)

    const add = (quantity) =>{
        addItem(item, quantity)
    }

    return(
        <Container className="mt-4">
            <h1>{item.title}</h1>
            <img src={item.image} 
                style={{ height: 450, width: "auto" }}
                alt={item.title}/>
            <p>{item.description}</p>
            <div>{`Stock ${item.stock}`}</div>
            <div>{`Precio ${item.price}`}</div>
            <ItemCount stock={item.stock} onAdd={add}/>
        </Container>
    )
}



