/* All the navigation links  */
import React, { useEffect, useState } from 'react'

import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    const [user, setUser] = useState(props.isAuth)
    useEffect(() => {
        setUser(props.isAuth)
       console.log("User", user)
    }, [user])
    return (
        <ul className = {styles.NavigationItems}>
            {/* The home Page  */}
            <NavigationItem link = '/' exact>
                Home
            </NavigationItem>
        {
            /* Check if the user is authenticated if so display the "trending" Navigation */
            props.isAuth ? 
                <NavigationItem link = "/trending-repo"  >
                    Trending
                </NavigationItem> 
            :null}   
        {
            /* Check if the user is authenticated if so display the "Logout" Navigation for the user to logout*/
            props.isAuth ? 
                <NavigationItem link = "/logout"  exact>
                    Logout
                </NavigationItem> 
            :null}
        
        </ul>
)};

export default NavigationItems;