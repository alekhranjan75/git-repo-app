/* Actions file to handle the requestsrelated to fetching repos */
import axios from "axios"

export const FETCH_REPO = 'FETCH_REPO'

/*----------Defining the action type to be handled by the reducers to make changes---------- */
export const fetchRepo = (fetchedData) => {
    return {
        type: FETCH_REPO,
        repos: fetchedData
    }
}

/* ----------------------------------------Middleware functions-------------------------------------- */
// The function takes the search attributes from the form and then amkes the request
export const searchTrendingRepos = (searchDetails) => {
    return dispatch => {
        // console.log(searchDetails)
        let language = searchDetails.language
        let sort = searchDetails.sortBy
        let order = searchDetails.order

        const queryParams = `?q=language:${language}&sort=${sort}&order=${order}&per_page=10`  
        // Based on the query params the axios makes request to the "git api" to fetch the required repository  
        axios.get(`https://api.github.com/search/repositories` + queryParams)
            .then(res => {
                // console.log("Fetched Repos Data:", res.data)
                // Pass the data to the fetchRepo action
                dispatch(fetchRepo(res.data.items))
            })
            .catch(err => console.log("Some error", err))
    }
}