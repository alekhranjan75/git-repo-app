/* Custom spinner component(used to show if a certain page is loading) */
import React from 'react'
import styles from './Spinner.module.css'

const Spinner = (props) =>(
    <div className = {styles.Loader}></div>
)

export default Spinner;