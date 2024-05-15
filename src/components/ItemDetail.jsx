import Container from "react-bootstrap/Container";

import{ ItemCount } from "./ItemCount";

export const ItemDetail = ({item}) =>{

    const add = (quantity) =>{
        console.log(item, quantity)
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



