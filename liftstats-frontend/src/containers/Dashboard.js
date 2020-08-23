import React, { Component } from 'react'
import NavBar from './NavBar'
import RecentSetsFeed from "../components/RecentSetsFeed"
import LogSetForm from "../components/LogSetForm"
import LogSetButton from "../components/LogSetButton"
import { connect } from 'react-redux'


class Dashboard extends Component {

    state={showLogSetForm: false, recentWorkouts: [{workoutType:"", weight: "", reps: ""}]}

    componentDidMount() {
            this.updateRecentWorkouts()
    }

    updateRecentWorkouts = () => {
        fetch(`http://localhost:3000/users/${this.props.userId}/workouts`).then((response) => {
          return response.json();
        }).then((json) => {                    
            this.setState({showLogSetForm: false, recentWorkouts: json})          
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
                <div className="container" >    
                    <NavBar />           
                    <LogSetForm logSet={this.logSet} handleCloseForm={this.handleCloseForm} updateRecentWorkouts={this.updateRecentWorkouts} />
                </div>
            )
        } else {
            return(
                <div className="container" >   
                    <NavBar />         
                    <LogSetButton handleLogSetClick={this.handleLogSetClick} />
                    <RecentSetsFeed recentWorkouts={this.state.recentWorkouts} /> 
                </div>
            )
        }
      
    }
}

const mapStateToProps = state => ({userId: state.userId})

export default connect(mapStateToProps)(Dashboard)