/* Reducers to handle repo states */
import * as actionTypes from '../action/actionRepo'

const initialState = {
    trendingRepos: null,
    loading: true
}

const reducerRepo = (state = initialState, action) => {
    switch (action.type) {
        // When the user fetches the repos from the api store the values to the state
        case actionTypes.FETCH_REPO:
            return {
                ...state,
                trendingRepos: action.repos,
                loading: false
            }
        default:
            return state
    }
}

export default reducerRepo;