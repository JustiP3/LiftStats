import React, { Component } from 'react'
import StatsCard from '../components/StatsCard'
import { connect } from 'react-redux'

class StatsCardContainer extends Component {

    state={workoutTypes: []}

    componentDidMount() {
       
        fetch(`http://localhost:3000/users/${this.props.userId}/workouts/types`).then(resp => {
            return resp.json()
        }).then(json => {                 
            return this.setState({workoutTypes: json.workout_types})
        })
    }

    renderCards() {
        if (!!this.state.workoutTypes && this.state.workoutTypes.length > 0) {
            return this.state.workoutTypes.map(workout => <StatsCard key={workout} workout={workout} userId={this.props.userId}/>)
        } else {
            return <div>Error in Render Cards</div>
        }
    }
    
    render() { 
        return(
        <div className="container" style={{margin: 50 }}>
           {this.renderCards()}
        </div>
        )
    } 
}

const mapStateToProps = state => ({userId: state.userId})

export default connect(mapStateToProps)(StatsCardContainer)
     