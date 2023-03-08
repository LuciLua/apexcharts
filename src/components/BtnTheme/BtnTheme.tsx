'use client'

import { Suspense, useEffect, useState } from "react"
// import useTheme from "../../app/hooks/useTheme"
import changeThemeDOM from "../../utils/changeThemeDOM"

function BtnTheme() {

    type ThemeType = 'light' | 'dark'

    const [theme, setTheme] = useState<ThemeType>('light')

    function handleTheme() {

        if (typeof window !== undefined) {
            const local_theme: any = localStorage.getItem('theme')
            local_theme ? changeThemeDOM(theme) : localStorage.setItem('theme', theme)
            if (local_theme == 'dark') {
                setTheme('light')
                localStorage.setItem('theme', 'light')
            }
            else if (local_theme == 'light') {
                setTheme('dark')
                localStorage.setItem('theme', 'dark')
            }
            console.log(local_theme)
        }
    }

    useEffect(() => {

        if (typeof window !== undefined) {

            const local_theme: any = localStorage.getItem('theme')
            local_theme ? setTheme(local_theme) : localStorage.setItem('theme', theme);

            changeThemeDOM(theme)
        }

    }, [theme])


    return (
        <button
            style={{ fontFamily: "inherit", backgroundColor: '#f39', color: '#fff', cursor: "pointer", border: 'none', padding: '10px 25px', borderRadius: '4px', position: "fixed", top: '10px', left: '10px' }}
            onClick={() => handleTheme()}>Theme</button>
    )
}

export default BtnTheme