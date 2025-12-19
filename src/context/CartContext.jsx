import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("cart" , JSON.stringify(cart))
    } , [cart])

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
            let itemFind = prev.find((pro) => pro.id === el.id);

            if(itemFind.qty > 1){
                return prev.map((item) => {
                    if(item.id === el.id){
                        return {...item , qty: item.qty - 1}
                    }else{
                        return item;
                    }        
                })
            }else{
                return prev.filter((pre) => pre.id !== el.id)
            }
        })
    }

    return(
        <CartContext.Provider value={{cart , setCart , addToCart ,increase , decrease}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider