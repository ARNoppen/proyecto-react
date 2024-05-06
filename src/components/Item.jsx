import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({Product}) =>     



    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Product.img} />
        <Card.Body>
            <Card.Title>{Product.name}</Card.Title>
            <Card.Text> {Product.categoria} </Card.Text>
            <Card.Text>{Product.precio}</Card.Text>
            <Link to={`/Item/${Product.id}`}>
            <Button variant="primary">Agregar al carrito</Button>
            </Link>
        </Card.Body>
    </Card>


