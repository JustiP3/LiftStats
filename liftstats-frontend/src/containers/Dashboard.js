import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"
import LogSetButton from "../components/LogSetButton"

import { logSet, fetchRecentSets } from "../actions/workoutActions"



class Dashboard extends Component {

    state={showLogSetForm: false, recentWorkouts: [{workoutType:"bench press", weight: 150, reps: 10}]}

    componentDidMount() {
        console.log("component did mount")
       fetchRecentSets().then( resp => {
           this.setState({...this.state, recentWorkouts: resp.recentWorkouts}) 
        })      
    }

    handleLogSetClick = () => {
        this.setState({...this.state, showLogSetForm: true})    
        
    }

    handleCloseForm = () => {
        this.setState({...this.state, showLogSetForm: false})
    }
    
    render() {

        if (this.state.showLogSetForm === true) {
            return(
                <div className="container">    
                    <NavBar />           
                    <LogSetForm logSet={this.props.logSet} handleCloseForm={this.handleCloseForm} />
                    <RecentSetsFeed recentWorkouts={this.state.recentWorkouts} /> 
                </div>
            )
        } else {
            return(
                <div className="container">   
                    <NavBar />                
                    <LogSetButton handleLogSetClick={this.handleLogSetClick} />
                    <RecentSetsFeed recentWorkouts={this.state.recentWorkouts} /> 
                </div>
            )
        }
      
    }
}


     
export default connect(null, { logSet, fetchRecentSets })(Dashboard)