/* The Backdrop Component */
import React from 'react'
import styles from './Backdrop.module.css'
const backdrop = (props) => (
    // Conditionwhen to show and hide the backdrop
    props.show ? <div className = {styles.Backdrop} onClick = {props.clicked}></div> : null
)
export default backdrop;