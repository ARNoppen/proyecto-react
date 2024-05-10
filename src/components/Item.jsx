import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({Product}) =>     



    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height="300" width="300" src={Product.image} />
        <Card.Body>
            <Card.Title>{Product.title}</Card.Title>
            <Card.Text> {Product.description} </Card.Text>
            <Card.Text> {Product.categoryId} </Card.Text>
            <Card.Text>{Product.price}</Card.Text>
            <Link to={`/Item/${Product.id}`}>
            <Button variant="primary">Agregar al carrito</Button>
            </Link>
        </Card.Body>
    </Card>


