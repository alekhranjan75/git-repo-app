import React, { Component } from 'react'
import Repo from './Repo';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';

class RepoList extends Component {
    render() {
        let repos = (<Spinner/>)
        if (!this.props.loading) {
            repos = <div>
                <h1 style = {{textAlign: 'center'}}>Top Trending {this.props.repos[0].language} Repositories</h1>
                <ul>
                    {this.props.repos.map(repo => {
                        return <Repo
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
                {repos}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        repos: state.repo.trendingRepos,
        loading: state.repo.loading
    }
}


export default connect(mapStateToProps)(RepoList);