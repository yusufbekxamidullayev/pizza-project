import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    function addToCart(el) {
        console.log(el);

        setCart((prev) => [...prev, { ...el, qty: 1 }])
    }

    function increase(el) {
        setCart((prev) => {
            return prev.map((item) => {
                if (item.id === el.id) {
                    return { ...item, qty: item.qty + 1 }
                } else {
                    return item
                }
            })
        })
    }

    function decrease(el) {
        setCart((prev) => {
            return prev.filter((item) => item.qty > 1).map((it) => {
                if (el.id === it.id) {
                    return { ...it, qty: it.qty - 1 }
                } else {
                    return it
                }
            })
        })
    }

    return(
        <CartContext.Provider value={{cart , setCart , addToCart ,increase , decrease}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider