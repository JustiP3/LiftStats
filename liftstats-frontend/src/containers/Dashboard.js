import React, { Component } from 'react'
import RecentSetsFeed from "../components/RecentSetsFeed"


export default class Dashboard extends Component {

    state={recentSets: [{workout_type: "bench press", weight: 155, reps: 10}]}

    
    render() {
       return(<RecentSetsFeed recentSets={this.state.recentSets} />)
    }
  }


     
  