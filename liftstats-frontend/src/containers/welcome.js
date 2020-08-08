import React, { Component } from 'react'
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"


export default class Welcome extends Component {

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
                <div class="container">           
                   
                    <LoginForm handleCloseForm={this.handleCloseForm} />       
                </div>
            );                
        } else if (this.state.signupForm === true) {
            return (                
                <div class="container">  
                            
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
                </div>
            );
        }
    }
  }


     
  