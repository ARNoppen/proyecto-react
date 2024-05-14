import { useState } from "react";

export const ItemCount = ({stock}) =>{
    const[ count, setCount] = useState(1)

    const handleDecrease = () => {
        if(count > 1) setCount((prev) => prev - 1);
    }

    const handleIncrease = () => {
        if(stock > count) setCount((prev) => prev + 1);
    }

    return (
    <div className="d-flex"> 
        <div style={{ fontSize: "25px", padding: "5px 10px", marginRight: "10px", cursor: "pointer", fontWeight:"900px", color:"Blue" }} onClick={handleDecrease}>-</div>
            <input style={{border: "none"}} type="number" value={count} readOnly/>
        <div style={{ fontSize: "25px", padding: "5px 10px", marginRight: "10px", cursor: "pointer", fontWeight:"900px", color:"Blue"}} onClick={handleIncrease}>+</div>
        <div><button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "Blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} type="button">Agregar al carrito</button></div>
    
    </div>
    );
};