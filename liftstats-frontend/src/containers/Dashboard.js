import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"

import { logSet, fetchRecentSets } from "../actions/workoutActions"



class Dashboard extends Component {

    state={recentWorkouts: []}

    componentDidMount() {
        console.log("component did mount")
        this.setState({recentWorkouts: fetchRecentSets()})
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