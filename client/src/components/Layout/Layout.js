import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    showSideDrawerState = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    toggleMenu = () => {
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.SideDrawer}
        })
    }
    render() {
        return (
            <div>
                <Toolbar menu = {this.toggleMenu}/>
                <SideDrawer 
                    open  = {this.state.showSideDrawer} 
                    closed = {this.showSideDrawerState}/>
                <main className = {styles.main}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;