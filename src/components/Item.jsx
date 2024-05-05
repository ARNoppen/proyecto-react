import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({Product}) =>     



    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Product.img} />
        <Card.Body>
            <Card.Title>{Product.name}</Card.Title>
            <Card.Text>

            {Product.categoria}
            
            {Product.precio}

            </Card.Text>
            <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>





