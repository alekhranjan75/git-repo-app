import * as actionTypes from '../action/actionRepo'

const initialState = {
    trendingRepos: null,
    loading: true
}

const reducerRepo = (state = initialState, action) => {
    switch (action.type) {
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