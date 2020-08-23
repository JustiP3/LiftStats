import React, { Component } from 'react'
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import { connect } from 'react-redux'


class Welcome extends Component {

    state={loginForm:false, signupForm:false}

    handleLoginClick = (event) => {
        event.preventDefault()
        this.setState({loginForm: true, signupForm:false})        
    }

    handleSignupClick = (event) => {
        event.preventDefault()
        this.setState({loginForm: false, signupForm:true}) 
    }

    handleCloseForm = (event) => {
        event.preventDefault()
        this.setState({loginForm: false, signupForm: false})
    }

    render() {

      
        if (this.state.loginForm === true) {
            return (                
                <div className="container">           
                   
                    <LoginForm handleCloseForm={this.handleCloseForm} handleLogin={this.props.login} displayName={this.props.displayName} />       
                </div>
            );                
        } else if (this.state.signupForm === true) {
            return (                
                <div className="container">  
                            
                    <SignupForm handleCloseForm={this.handleCloseForm} />    
                </div>
            );
        } else {
            return (                
                <div className="container"> 
                             
                    <p>Track your workouts the way you want to track them.</p>
                    <p>Then, get statistics and analysis on how you are progressing in your fitness journey.</p>
                    <button onClick={this.handleLoginClick}>Log In</button>
                    <button onClick={this.handleSignupClick}>Sign Up</button> 
                    <button onClick={this.props.login}>Test login</button>      
                    <button onClick={this.props.logout}>Test logout</button>
                    <h2>displayName = {this.props.displayName}</h2> 
                </div>
            );
        }
    }
  }

const mapStateToProps = state => ({displayName: state.displayName})

const mapDispatchToProps = dispatch => ({
  login: email => {
      dispatch({type: 'LOGIN_REQUEST'});
      fetch(`http://localhost:3000/users/login/${email}`).then(resp => resp.json()).then(json => {
          debugger 
          if (!!json && !!json.display_name) {
            dispatch({type: 'LOGIN', displayName: json.display_name, userId: json.id})            
          } else {
            dispatch({type: "LOGOUT"})
          }
          
      })
  },
  logout: () => dispatch({type: 'LOGOUT'})
})


export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
     
  