import { Link } from "react-router-dom"
import cart from "../assets/carrito-de-compras.png"

export const CartWidget = () => {
    return( 
    <Link to={"/Cart"}>
        <div id="cart-widget">
            <img src={cart} alt="Cart" width={40} />
            <span>89</span>
        </div>
    </Link>
    )
}