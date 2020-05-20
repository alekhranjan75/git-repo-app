/* Custom input component based on the type required */
import React from 'react'
import styles from './Input.module.css'
const Input = (props) => {
    let inputElement = null;
    const inputStyles = [styles.InputElement];

    // Check if the element is invalid if so change the color of that partiular input element
    if (props.invalid && props.shouldValidate && props.touched) {
        inputStyles.push(styles.Invalid)
    }
    switch (props.inputtype) {
        // Input type for plain input
        case 'input':
            inputElement = <input className = {inputStyles.join(' ')} {...props.properties} value = {props.value} onChange = {props.changed}/>
            break;
        // TextArea input
        case 'textarea':
            inputElement = <textarea className = {inputStyles.join(' ')} {...props.properties} value = {props.value} onChange = {props.changed}/>
            break;
        // Dropdown select input
        case 'select':
            inputElement = (
                <select 
                    className = {inputStyles.join(' ')} 
                    {...props.properties} 
                    value = {props.value} 
                    onChange = {props.changed}>
                    {props.properties.options.map(opt => {
                        return <option key = {opt.value}>{opt.displayValue}</option>
                    })}
                </select>
            )
            break;
        // The default input type
        default:
            inputElement = <input className = {inputStyles.join(' ')} {...props} />
            break;
    }
    return(
        <div className = {styles.Input}>
            <label className = {styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;