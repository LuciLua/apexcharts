function changeThemeDOM(theme: 'dark' | 'light'){
    if (theme === 'dark') {
        document.querySelector("body").classList.add('dark')
        document.querySelector("body").classList.remove('light')
    } else {
        document.querySelector("body").classList.remove('dark')
        document.querySelector("body").classList.add('light')
    }
}

export default changeThemeDOM