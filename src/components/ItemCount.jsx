import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) =>{
    const[ quantity, setQuantity] = useState(1)

    const handleDecrease = () => {
        if(quantity > 1) setQuantity((prev) => prev - 1);
    }

    const handleIncrease = () => {
        if(stock > quantity) setQuantity((prev) => prev + 1);
    }

    const handleAdd = () => {
        onAdd(quantity);
        setQuantity(1);
    };

    return (
    <div className="d-flex"> 
        <div style={{ fontSize: "25px", padding: "5px 10px", marginRight: "10px", cursor: "pointer", fontWeight:"900px", color:"Blue" }} onClick={handleDecrease}>-</div>
            <input style={{border: "none"}} type="number" value={quantity} readOnly/>
        <div style={{ fontSize: "25px", padding: "5px 10px", marginRight: "10px", cursor: "pointer", fontWeight:"900px", color:"Blue"}} onClick={handleIncrease}>+</div>
        <button type="button" style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "Blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"}} onClick={handleAdd}>Agregar al carrito</button>
    </div>
    );
};