import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"


class Dashboard extends Component {

 
    
    render() {
       return(
            <div className="container">
                {this.props.recentWorkouts}
                <LogSetForm logSet={this.props.logSet} />
                <RecentSetsFeed recentWorkouts={this.props.recentWorkouts} /> 
            </div>
        )
    }
}


const mapStateToProps = state => ({recentWorkouts: state.recentWorkouts})


const mapDispatchToProps = dispatch => {
    return {
      logSet: workout => dispatch({type: 'LOG_SET', workout: workout }),
      fetchRecentSets: () => dispatch({type: 'GET_RECENT_SETS'})
    }
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)