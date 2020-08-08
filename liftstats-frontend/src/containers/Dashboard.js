import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"

import { logSet, fetchRecentSets } from "../actions/workoutActions"



class Dashboard extends Component {

    state={recentWorkouts: [{workoutType:"bench press", weight: 150, reps: 10}]}

    componentDidMount() {
        console.log("component did mount")
       fetchRecentSets().then( resp => {
           this.setState({recentWorkouts: resp.recentWorkouts}) 
        })      
    }
    
    render() {

       return(
            <div className="container">
                {this.props.recentWorkouts}
                <LogSetForm logSet={this.props.logSet} />
                <RecentSetsFeed recentWorkouts={this.state.recentWorkouts} /> 
            </div>
        )
    }
}


     
export default connect(null, { logSet, fetchRecentSets })(Dashboard)