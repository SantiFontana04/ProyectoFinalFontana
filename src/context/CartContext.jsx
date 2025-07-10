import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])

const addItem = (item, cantidad) =>{
    if(isInCart(item.id)){
        const carritoActualizado = cart.map((prod)=>{
            if(item.id === prod.id){
                return {...prod, quantity: prod.quantity + cantidad}
            }else{
                return prod
            }
        })
        setCart(carritoActualizado)
    }else{
        setCart([...cart, {...item, quantity:cantidad}])
    }
}

const removeItem = (id)=>{
    setCart(cart.filter((prod)=> prod.id !== id))
}

const clear = () =>{
    setCart([])
}

const isInCart= (id) =>{
    return cart.some((prod)=> prod.id === id)
}

const cartQuantity = ()=>{
    return cart.reduce((acc, prod)=> acc += prod.quantity,0)
}

const cartTotal = () =>{
    return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
}

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}