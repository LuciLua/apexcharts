'use client'

import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}