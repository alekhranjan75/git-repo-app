/* Logout Component */
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import {authLogout} from '../../store/action/actionAuth'

class Logout extends Component {
    componentDidMount() {
        // As son as the component mounts the logout function is called to log the user out!
        //The logout function is defined inside the 
        this.props.logout()
    }
    render() {
        return <Redirect to = '/'/>
    }
}
// mapDispatchToProps is used for dispatching actions to the store.
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authLogout())
    }
}

// The connect() function connects a React component to a Redux store
export default connect(null, mapDispatchToProps)(Logout);