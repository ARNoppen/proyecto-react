import { Item } from "./Item"

export const ItemList = ({Products}) => {

    return (
        <div className="d-flex">
        {Products.map((Product) => (
        <Item key={Product.id} Product = {Product}/>
        ))}
        </div>
        );
};