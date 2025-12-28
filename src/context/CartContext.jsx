import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    // Cartni localStoragega yozamiz har safar o'zgarganda
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id);
        if (exists) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const increase = (product) => addToCart(product);

    const decrease = (product) => {
        const exists = cart.find((item) => item.id === product.id);
        if (!exists) return;
        if (exists.qty === 1) {
            setCart(cart.filter((item) => item.id !== product.id));
        } else {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty - 1 } : item
                )
            );
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, increase, decrease }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
