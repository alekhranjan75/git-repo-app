import * as actionTypes from '../action/actionAuth'

const initialState = {
    userId: null,
}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            return {
                ...state,
                userId: action.userDetails
            }
        case actionTypes.FETCH_USER:
            return {
                ...state,
                userId: action.userDetails,
                loading: false
            }
        case actionTypes.USER_LOGOUT:
            return {
                userId: null
            }
        default:
            return state
    }
}

export default reducerAuth;