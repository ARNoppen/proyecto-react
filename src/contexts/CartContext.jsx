import { remove } from "firebase/database";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({children}) => {
    const [items, setItems] = useState([
        { id: 1, name: "Zapatillas",price: 300},
        { id: 2, name: "Remera",price: 500},
        { id: 3, name: "Musculosa",price: 600}
    ]);

    const clear = () => setItems([]);

    const removeItem = (id) => {
        const filtered = items.filter((item) => item.id !== id);
        setItems(filtered); 
    };

    const addItem = (item) => {
        
        setItems([...items, item]); 
    };

    return  <CartContext.Provider value={{addItem, clear, items, removeItem}}> 
    {children} 
    </CartContext.Provider>
}   