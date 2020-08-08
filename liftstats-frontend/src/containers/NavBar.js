import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    
    render() {
        return(
        <h1>
            <NavLink to="/dashboard">Dashboard</NavLink> | <NavLink to="/stats">Stats </NavLink>
        </h1>)
    }

 
}


 

