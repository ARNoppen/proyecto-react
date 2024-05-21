import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore } from "firebase/firestore";
import { Container } from "react-bootstrap";

const initialValues = {

};

export const Cart = () => {
    const [values, setValues] = useState(initialValues);
    const { clear, items, removeItem  } = useContext(CartContext);

    const total = () => items.reduce((acc, i) => acc + i.quantity * i.price, 0);

    const handleChange = (ev) => {
        setValues((prev) =>{
            return{
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    };

    const handleSubit = () => {
        const order = {
            buyer: values,
            items,
            total: total(),
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
        .then(({ id }) => {
            if (id){
                alert ("Se realizó su Orden nro: " + id);
            }
        })
        .finally(() => {
            clear();
            setValues(initialValues);
        });
    };

    const handleRemove = (id) => removeItem(id);

    return (
        <Container>
            <h1>Productos</h1>
            {items.map((i)=>{
                return(
                    <ul key={i.title} > 
                        <li> Prod:{i.title} </li>
                        <li> Cant:{i.quantity} </li>
                        <li> $ {i.price} </li>
                        <li onClick = {() => handleRemove()}>  X </li>
                    </ul>
                );
            })};
        </Container>
    ); 
}