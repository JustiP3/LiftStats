import React, { Component } from 'react'

import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"


class Dashboard extends Component {

    state={recentSets: [{workoutType: "bench press", weight: 155, reps: 10, datecode:"20200806"}]} 

    
    render() {
       return(
            <div className="container">
                <LogSetForm />
                <RecentSetsFeed recentSets={this.state.recentSets} /> 
            </div>
        )
    }
}


/*
const logSet = ( set={workoutType:"", weight:0, reps: 0} ) => {
    return {type:"LOG_SET", set}
} 
*/


     
export default Dashboard