import axios from "axios"

export const AUTH = 'AUTH'
export const FETCH_USER = 'FETCH_USER'
export const USER_LOGOUT = 'USER_LOGOUT'

export const auth = (details) => {
    return {
        type: AUTH,
        userDetails: details
    }
}

export const authFetchUser = (data) => {
    return {
        type: FETCH_USER,
        userDetails: data
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}

export const authenticate = () => {
    return dispatch => {
        axios.get('/auth/git')
        .then(res => {
            console.log(res)
            dispatch(auth(res))
        })
        .catch(err => console.log(err))
    }
}

export const fetchUser = () => {
    return dispatch => {
        axios.get('/api/current_user')
        .then(res => {
            console.log("User Data:", res.data._id)
            dispatch(authFetchUser(res.data))
        })
    }
}

export const authLogout = () => {
    return dispatch => {
        axios.get('/api/logout')
        .then(res => {
            console.log("User Data:", res.data._id)
            dispatch(userLogout())
        })
    }
}