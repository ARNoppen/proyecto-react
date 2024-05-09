import { useState } from "react";

export const ItemCount = () =>{
    const[ count, setCount] = useState(1)

    const handleIncrease = () =>setCount((prev) => prev + 1)
    return <> 
    <div>-</div>
    <input type="number" value={count}/>
    <div onClick={handleIncrease}>+</div>
    <button type="button">Agregar al carrito</button></>
}