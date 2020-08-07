import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"


class Dashboard extends Component {

    state={recentSets: [{workoutType: "bench press", weight: 155, reps: 10, datecode:"20200806"}]} 

    
    render() {
       return(
            <div className="container">
                <LogSetForm logSet={this.props.logSet} />
                <RecentSetsFeed recentSets={this.state.recentSets} /> 
            </div>
        )
    }
}


const mapStateToProps = state => ({recentSets: state.recentSets})

const mapDispatchToProps = dispatch => {
    return {
      logSet: set => dispatch({type: 'LOG_SET', set: set })
    }
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)