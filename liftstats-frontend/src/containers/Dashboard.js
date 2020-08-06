import React, { Component } from 'react'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"


export default class Dashboard extends Component {

    state={recentSets: [{workout_type: "bench press", weight: 155, reps: 10}]}

    
    render() {
       return(
            <div className="container">
                <LogSetForm />
                <RecentSetsFeed recentSets={this.state.recentSets} /> 
            </div>
        )
    }
  }


     
  