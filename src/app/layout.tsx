import ThemeContextProvider from "../contexts/themeContext"
import "../styles/globals.scss"
import {Inter} from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function RootApp({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Graph</title>
            </head>
            <body className={`${inter.className} dark`}>
                <ThemeContextProvider>
                    {children}
                </ThemeContextProvider>
            </body>
        </html>
    )
}