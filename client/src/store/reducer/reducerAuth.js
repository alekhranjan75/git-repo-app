/* Reducer fucntion to handle auth related states */
import * as actionTypes from '../action/actionAuth'

const initialState = {
    userId: null,
}

const reducerAuth = (state = initialState, action) => {
    // check for the type of the action
    switch (action.type) {
        case actionTypes.AUTH:
            // assign the state "userId" the value received from the action when authenticating 
            return {
                ...state,
                userId: action.userDetails
            }
        case actionTypes.FETCH_USER:
            // assign the state "userId" the value received from the action when fetching the data from backend cookie
            return {
                ...state,
                userId: action.userDetails
            }
        case actionTypes.USER_LOGOUT:
            // Set the state "userId" to null when the user logs out
            return {
                userId: null
            }
        default:
            // for deafult cases return the state as it is
            return state
    }
}

export default reducerAuth;