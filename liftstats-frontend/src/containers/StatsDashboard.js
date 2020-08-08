import React, { Component } from 'react'
import NavBar from './NavBar'
import StatsCardContainer from './StatsCardContainer'

export default class StatsDashboard extends Component {

    
    render() {
        return(
        <div className="container">
            <NavBar />
            <h1>Stats Dashboard</h1>
            <StatsCardContainer />
        </div>
        )
    }

 
}


     
  