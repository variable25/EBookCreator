export const validateEmail = (email) => {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!email) return "Email is required"
    if(!emailRegEx.test(email)) return "Please enter a valid email address"
    return ''
}

export const validatePassword = (password) => {
    if(!password) return 'Password is required'
    if(password.length < 6) return 'Password should atleast be 6 characters'
    return ''
}

