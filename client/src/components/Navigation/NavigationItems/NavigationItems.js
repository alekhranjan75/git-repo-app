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
            <NavigationItem link = '/' exact>
                Home
            </NavigationItem>
        {
            props.isAuth ? 
                <NavigationItem link = "/trending-repo"  >
                    Trending
                </NavigationItem> 
            :null}   
        {
            props.isAuth ? 
                <NavigationItem link = "/logout"  exact>
                    Logout
                </NavigationItem> 
            :null}
        
        </ul>
)};

export default NavigationItems;