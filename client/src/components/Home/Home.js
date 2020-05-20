import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../UI/Button/Button'

class Home extends Component {
    render() {
        return (
            <div style = {{textAlign: 'center', margin: '10vw 10vh'}}> 
                <h1>Welcome to our Git Trend Repo</h1>
                { !this.props.isAuthenticated ? 
                    <a href = '/auth/git'>
                        <Button>Login with GitHub</Button>
                    </a> 
                : null }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.userId
    }
}

export default connect(mapStateToProps)(Home);