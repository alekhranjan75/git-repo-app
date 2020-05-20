/* Acions file for authentcation related actions, most of the actions or request are made to the backend */
import axios from "axios"

export const AUTH = 'AUTH'
export const FETCH_USER = 'FETCH_USER'
export const USER_LOGOUT = 'USER_LOGOUT'

/*----Defining the action type and payload that is to be used by the reducer to manage the state ------*/


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
/* ----------------------------------------Middleware functions-------------------------------------- */

// action for logging in a user via git when he clicks on the login button
export const authenticate = () => {
    return dispatch => {
        
        // The request is send to the backend that handles the login in process
        axios.get('/auth/git')
        .then(res => {
            console.log(res)
            dispatch(auth(res))
        })
        .catch(err => console.log(err))
    }
}

// Check if the user is logged in by making a call to the backend that returns the userId from the cookied if the user is logged in
export const fetchUser = () => {
    return dispatch => {
        axios.get('/api/current_user')
        .then(res => {
            console.log("User Data:", res.data._id)
            dispatch(authFetchUser(res.data))
        })
    }
}


// Logout function again which is made to the backend, which logs out the user
export const authLogout = () => {
    return dispatch => {
        axios.get('/api/logout')
        .then(res => {
            console.log("User Data:", res.data._id)
            dispatch(userLogout())
        })
    }
}