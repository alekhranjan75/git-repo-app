import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import Backdrop from '../../UI/BackDrop/Backdrop'
import { connect } from 'react-redux'

const sideDrawer = (props) => {
    let attachedClass = [styles.SideDrawer, styles.Close]
    if(props.open) {
        attachedClass = [styles.SideDrawer, styles.Open]
    }
    return (
        <div>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className = {attachedClass.join(" ")} onClick = {props.closed}>
            <nav>
                <NavigationItems isAuth = {props.isAuthenticated}/>
            </nav>
        </div>
        </div>
        
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.userId
    }
}
export default connect(mapStateToProps)(sideDrawer);