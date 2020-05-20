/* Creating the single Navigation Item component that is placed inside the header of the Layout */
import React from 'react'
//Styles defined for Navigation inside this file 
import styles from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

const NavigationItem = (props) => (
    <li className = {styles.NavigationItem}>
        <NavLink
            to = {props.link}
            activeClassName = {styles.active}
            exact = {props.exact}>
            {props.children}
        </NavLink>
    </li>
)

export default NavigationItem