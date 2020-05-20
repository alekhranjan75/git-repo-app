/* Display the List of trending "Repo" */
import React, { Component } from 'react'
import Repo from './Repo';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';

class RepoList extends Component {
    render() {
        /* Check if the data has been fetched by the api if not show a spinner else show the Repo list */
        let repos = (<Spinner/>)
        if (!this.props.loading) {
            repos = <div>
                <h1 style = {{textAlign: 'center'}}>Top Trending {this.props.repos[0].language} Repositories</h1>
                <ul>
                    {/* Returns a unordered list of the repos */}
                    {this.props.repos.map(repo => {
                        return <Repo
                        /* Passing the props reuired by the "Repo" component */
                                key = {repo.node_id}
                                language = {repo.language}
                                url = {repo.html_url}
                                name = {repo.full_name}
                                description = {repo.description}
                                forks = {repo.forks}
                                stars = {repo.stargazers_count}/>
                    })}
                </ul>
            </div>
        }
        return (
            <div>
                {/* Displays all the repo if loaded otherwise shows the spinner */}
                {repos}
            </div>
        )
    }
}
// Getting the  Repos store inside the sore and also the props to check if the data has been loaded
const mapStateToProps = state => {
    return {
        repos: state.repo.trendingRepos,
        loading: state.repo.loading
    }
}

// Connect to store
export default connect(mapStateToProps)(RepoList);