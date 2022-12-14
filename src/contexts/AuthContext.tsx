

import React, { createContext, FC, ReactNode, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface IAuthContext {
    isLoggedIn: boolean;
    login: () => void;
}

export const AuthContext = createContext<IAuthContext>({ isLoggedIn: false, login: () => { } });
export const useAuthContext = () => useContext(AuthContext);


type Props = {
    children: ReactNode;
}

const AuthContextProvider: FC<Props> = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login }}>
            {
                props.children
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider