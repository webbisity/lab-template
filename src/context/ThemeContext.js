import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    useEffect(() => {
        /* console.log("cookie:" + document.cookie); */
        /* document.cookie = `darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; */
    }, []);

    const [darkMode, setDarkMode] = useState(document.cookie.length > 0 ? (document.cookie === "true" ? true : false) : true );


    return (
        <ThemeContext.Provider value={{
            darkMode, setDarkMode
        }}>{ children }
        </ThemeContext.Provider>
    )
}