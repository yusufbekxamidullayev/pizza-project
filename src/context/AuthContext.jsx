import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // page reload bo'lganda userni localStorage dan olish
    useEffect(() => {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (name, password) => {
        const loggedUser = { name, password };
        setUser(loggedUser);
        localStorage.setItem("authUser", JSON.stringify(loggedUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("authUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
