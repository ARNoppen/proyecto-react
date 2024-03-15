import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return( <>
        <h6>Mini Mercado</h6>
        <ul>
            <li>
                <a href="#">Frutas y Verduras</a>
            </li>
            <li>
                <a href="#">Bebidas</a>
            </li>
            <li>
                <a href="#">Limpieza</a>
            </li>
        </ul>
        <CartWidget />
        </>
    )
}