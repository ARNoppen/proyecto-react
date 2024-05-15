import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({item}) =>     



    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height="300" width="300" src={item.image} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text> {item.description} </Card.Text>
            <Card.Text> {item.categoryId} </Card.Text>
            <Card.Text>{item.price}</Card.Text>
            <Link to={`/Item/${item.id}`}>
            <Button variant="primary">Agregar al carrito</Button>
            </Link>
        </Card.Body>
    </Card>


