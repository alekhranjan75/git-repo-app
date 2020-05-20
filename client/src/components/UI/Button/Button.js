/* The custom button Component */
import React from 'react'
import styles from './Button.module.css'

const Button = (props) => (
    <button className = {styles.Button}
            disabled = {props.disabled}
            onClick = {props.purchasing}> {props.children}
    </button>
)

export default Button;