import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

function useTheme() {
    const context = useContext(ThemeContext)

    if (context) {
        return context
    } else {
        throw new Error("provider not must be used without a provider")
    }
}

export default useTheme
