/* Trending Repo page that fetches the trending repositories based on the search arguments */
import React, { Component } from 'react'
import Button from '../UI/Button/Button';
import { connect } from 'react-redux'
import {searchTrendingRepos} from '../../store/action/actionRepo'
import Input from '../UI/Input/Input'
import styles from './TrendingRepo.module.css'
import RepoList from './Repo/RepoList';
import { Route } from 'react-router';


 class TrendingRepo extends Component {
     
    // Form to get the required search attributes
    state = {
        searchForm: {
            language: {
                elementName: 'Language',
                elementType: 'select',
                elementProp: {
                    options: [
                        {value: 'python', displayValue: 'Python'},
                        {value: 'php', displayValue: 'PHP'},
                        {value: 'javascript', displayValue: 'JavaScript'},
                        {value: 'c', displayValue: 'C'}
                    ]
                },
                value: 'python',
                validity: true
            },
            sortBy: {
                elementName: 'SortBy',
                elementType: 'select',
                elementProp: {
                    options: [
                        {value: 'stars', displayValue: 'Stars'},
                        {value: 'fork', displayValue: 'Fork'},
                    ]
                },
                value: 'stars',
                validity: true
            },
            order: {
                elementName: 'Order',
                elementType: 'select',
                elementProp: {
                    options: [
                        {value: 'asc', displayValue: 'Ascending'},
                        {value: 'desc', displayValue: 'Descending'},
                    ]
                },
                value: 'desc',
                validity: true
            }
        },
        formIsValid: true
    }

    // Check if the form is valid before proceeding
    validityCheck = (value, rules) => {
        let isValid = true
        if (rules) {
            if (rules.required) {
                isValid = value.trim('') !== "" && isValid;
            }
            if (rules.minLength) {
                isValid = (value.length >= rules.minLength) && isValid
            }
            if (rules.maxLength) {
                isValid = (value.length <= rules.maxLength) && isValid
            }
        }
        return isValid
    }
    
    // Update the values of the form if any changes are made in the form element
    changedHandler = (event, id) => {
        // console.log("Input Handler Invoked", "id is", id)
        const searchFormCopy = {
            ...this.state.searchForm
        }
        let ele = searchFormCopy[id]
        ele.value = event.target.value
        ele.validity = (this.validityCheck(ele.value, ele.validation))
        ele.touched = true
        searchFormCopy[id] = ele
        let formIsValid = true
        for (let inputElement in searchFormCopy) {
            formIsValid = searchFormCopy[inputElement].validity && formIsValid
        }
        // console.log("searchForm:-------",searchFormCopy)
        //Finding the index with the specific id
        this.setState((prevState, props) => {
            return {
                searchForm: searchFormCopy,
                formIsValid: formIsValid
            }
        })
    }
    searchHandler = (event) => {
        //Prevents from reloading the page that caused loss of Data
        event.preventDefault();
        
        // Store the value of the form in an object
        const searchDetails = {}
        for (let data in this.state.searchForm) {
            searchDetails[data] = this.state.searchForm[data].value;
        }
        // Based on the form attributes call the below method, which is basically used to feth the data
        this.props.searchTrendingRepos(searchDetails)

        // Pushes the new route on the same page
        this.props.history.replace('/trending-repo/repo-list')
        
    }
    
    
    render() {
        // Creating an array of the form elements
        let formElements = []
        for (let key in this.state.searchForm) {
            formElements.push({
                id: key,
                properties: this.state.searchForm[key]
            })
        }
        
         
        let form = (
            // On form submit call the "searchHandler" method
            <form onSubmit = {this.searchHandler}>
                {formElements.map(ele => {
                    // Based on the type of input every form elements takes we map it to the required type of input
                    return(
                        <Input 
                            key = {ele.id}
                            inputtype = {ele.properties.elementType}
                            properties = {ele.properties.elementProp}
                            invalid = {!ele.properties.validity}
                            shouldValidate = {ele.properties.validation}
                            touched = {ele.properties.touched}
                            value = {ele.properties.value}
                            changed = {(event) =>this.changedHandler(event, ele.id)}
                            label = {ele.properties.elementName}/>
                    )
                })}
                <Button btnType = "Success" disabled = {!this.state.formIsValid} >OK</Button>
            </form>
            )
        return (
            <div>
                <div className = {styles.TrendingRepo}>
                    <h4>Enter Search Details</h4>
                    {form}
                </div>
            <br/>
            <Route path={this.props.match.path + '/repo-list'} 
                        component = {RepoList} />
            </div>
            
        )
    }
 }

 
//  dispatch the action to the store which is defined inside the "actionAuth" file
const mapDispatchToProps = dispatch => {
    return {
        // It passes the search attributes, that the user sets in the form, which is used by the action dispatcher to make request from the api
        searchTrendingRepos: (searchDetails) => dispatch(searchTrendingRepos(searchDetails))
    }
}
// connect to the store
export default connect(null, mapDispatchToProps)(TrendingRepo);