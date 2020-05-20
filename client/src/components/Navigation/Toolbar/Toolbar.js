/* The toolbar of the app */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './Toolbar.module.css'
import menuStyles from './Menu.module.css'

class Toolbar extends Component {
    render() {
        // console.log("isAuthenticated", this.props.isAuthenticated)
        return (
            <header className = {styles.Toolbar}>
                <div 
                    onClick = {this.props.menu} 
                    className = {menuStyles.DrawerToggle}>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <nav className = {styles.DesktopOnly}>
                    {/* Passing the authenticated props to NavigationItems */}
                    <NavigationItems isAuth = {this.props.isAuthenticated}/>
                </nav>

            </header>
        )
    }
}
// mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
// Here we need the userId of the auth store to check if the user is authenticated
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.userId
    }
}

// connect to react-redux store
export default connect(mapStateToProps)(Toolbar);