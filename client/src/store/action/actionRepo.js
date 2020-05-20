import axios from "axios"

export const FETCH_REPO = 'FETCH_REPO'
export const fetchRepo = (fetchedData) => {
    return {
        type: FETCH_REPO,
        repos: fetchedData
    }
}

export const searchTrendingRepos = (searchDetails) => {
    return dispatch => {
        // console.log(searchDetails)
        let language = searchDetails.language
        let sort = searchDetails.sortBy
        let order = searchDetails.order
        // var date = new Date();
        // date.setDate(date.getDate() - 7);

        // var finalDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        // var datetime = new Date();
        // console.log();

        const queryParams = `?q=language:${language}&sort=${sort}&order=${order}&per_page=10`    
        axios.get(`https://api.github.com/search/repositories` + queryParams)
            .then(res => {
                // console.log("Fetched Repos Data:", res.data)
                dispatch(fetchRepo(res.data.items))
            })
            .catch(err => console.log("Some error", err))
    }
}