import Container from 'react-bootstrap/Container';

export const ItemDetail = ({Product}) =>{
    return(
        <Container className="mt-4">
            <h1>{Product.title}</h1>
            <img src={Product.image} 
                style={{ height: 450, width: "auto" }}
                alt={Product.title}/>
            <p>{Product.description}</p>
            <div>{`Stock ${Product.stock}`}</div>
            <div>{`Precio ${Product.price}`}</div>
</Container>
    )
}



