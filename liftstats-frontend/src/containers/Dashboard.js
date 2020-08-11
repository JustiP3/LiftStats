import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"
import LogSetButton from "../components/LogSetButton"

import { logSet } from "../actions/workoutActions"



class Dashboard extends Component {

    state={showLogSetForm: false, recentWorkouts: [{workoutType:"", weight: "", reps: ""}]}

    componentDidMount() {
        console.log("component did mount")
        fetch('http://localhost:3000/users/1/workouts').then((response) => {
          return response.json();
        }).then((json) => {          
            this.setState({...this.state, recentWorkouts: json.recentWorkouts})          
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
                    <RecentSetsFeed propWorks={this.props.recentWorkouts} recentWorkouts={this.state.recentWorkouts} /> 
                </div>
            )
        }
      
    }
}

const mapStateToProps = (state) => ({recentWorkouts: state.recentWorkouts})

     
export default connect(mapStateToProps, { logSet })(Dashboard)