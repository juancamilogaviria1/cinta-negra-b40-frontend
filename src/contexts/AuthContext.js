import React, { createContext, useState, useEffect } from 'react';
import  { useHistory } from 'react-router-dom';


export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const  history = useHistory();
    const [isAuth, setAuth ] = useState(false);

    const getToken = () =>{
        return localStorage.getItem('token');
    }

    useEffect(() => {
        if ((getToken)) setAuth(true);
    }, [])

    const setTokenAndLogin = (token) =>{
        localStorage.setItem('token', token);
        setAuth(true);
        return history.push('/');
    }

    const removeTokenAndLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
    }


    return (
        <AuthContext.Provider value={{ 
             isAuth, getToken, setTokenAndLogin, removeTokenAndLogout
              }}>
                { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
