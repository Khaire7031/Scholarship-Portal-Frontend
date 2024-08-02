import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    const setToken = (newToken) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);

            // Decode the token to get user details
            try {
                const decoded = jwtDecode(token); // Using jwtDecode function
                setUser({
                    email: decoded.sub,
                    role: decoded.role || 'USER' // Adjust according to your token structure
                });
            } catch (e) {
                console.error('Failed to decode token:', e);
                setUser(null);
            }
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token');
            setUser(null);
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            user,
            setToken,
        }),
        [token, user]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
