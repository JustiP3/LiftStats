import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"


class Dashboard extends Component {

    state={recentSets: [{workoutType: "bench press", weight: 155, reps: 10, datecode:"20200806"}]} 

    componentDidMount() {
        console.log("component did mount ")
        this.setState({recentSets: this.props.recentSets()} )
      }
    
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
      logSet: workout => dispatch({type: 'LOG_SET', workout: workout }),
      recentSets: () => dispatch({type: 'GET_RECENT_SETS'})
    }
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)