import React, { createContext, useState } from 'react';
import base64 from 'base-64'; 

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [isAuth, setAuth ] = useState(false);

    const setToken = (token) =>{
        localStorage.setItem('token', token);
        setAuth(true);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
        setAuth(false);
    }

    const getToken = () =>{
        const encodedToken = localStorage.getItem('token');
        const decodedToken  = base64.decode(encodedToken);
        return decodedToken;
    }

    return (
        <AuthContext.Provider value={{ 
             isAuth, getToken, setToken, removeToken }}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
