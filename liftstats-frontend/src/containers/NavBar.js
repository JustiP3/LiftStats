import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class NavBar extends Component {
    
    render() {

        return(
            <div>
            <h1><NavLink to="/dashboard">Dashboard</NavLink> | <NavLink to="/stats">Stats </NavLink> | <button onClick={this.props.logout}> <NavLink to="/">Logout</NavLink></button></h1>
            <h2>Current User: {this.props.displayName}</h2>
            </div>
        )
    }
 
}

const mapStateToProps = state => ({displayName: state.displayName})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({type: 'LOGOUT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

 

