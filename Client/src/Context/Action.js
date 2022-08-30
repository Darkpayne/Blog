export const LoginStart = (userCredentials) =>({
    type : "LOGIN_START"
})

export const LoginSuccess = (user) =>({
    type : "LOGIN_SUCCESS",
    payload:user,
})
export const accessToken = (accessToken) =>({
    type : "ACCESS_TOKEN",
    payload:accessToken,
})

export const LoginFail = () =>({
    type : "LOGIN_FAIL"
})
export const Logout = () =>({
    type : "LOGOUT"
})
