'use client'

import { Suspense, useEffect } from "react"
import useTheme from "../../app/hooks/useTheme"
import changeThemeDOM from "../../utils/changeThemeDOM"

function BtnTheme() {

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        changeThemeDOM(theme)
    }, [theme])


    return (
        <Suspense fallback={<p>Loading...</p>}>
            <button
                style={{ fontFamily: "inherit", backgroundColor: '#f39', color: '#fff', cursor: "pointer", border: 'none', padding: '10px 25px', borderRadius: '4px', position: "fixed", top: '10px', left: '10px' }}
                onClick={() => theme == 'dark' ? setTheme('light') : setTheme('dark')}>Theme</button>
        </Suspense>
    )
}

export default BtnTheme