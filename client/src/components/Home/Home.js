/* The home page of the react app */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../UI/Button/Button'

class Home extends Component {
    render() {
        return (
            <div style = {{textAlign: 'center', margin: '10vw 10vh'}}> 
                <h1>Welcome to our Git Trend Repo</h1>
                {/* Check if the user is logged in; if not show login button */}
                { !this.props.isAuthenticated ? 
                    <a href = '/auth/git'>
                        <Button>Login with GitHub</Button>
                    </a> 
                : null }
            </div>
        )
    }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
// Here we need the userId of the auth store
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.userId
    }
}

// The connect() function connects a React component to a Redux store
export default connect(mapStateToProps)(Home);