import React, { Component } from 'react'
import LoginForm from "../components/LoginForm"

export default class Welcome extends Component {

    state={loginForm:false, signupForm:false}

    handleLoginClick = (event) => {
        console.log("login click")
        event.preventDefault()
        this.setState({loginForm: true, signupForm:false})        
    }

    handleSignupClick = (event) => {
        console.log("signup click")
        event.preventDefault()
        this.setState({loginForm: false, signupForm:true}) 
    }

    render() {
        if (this.state.loginForm === true) {
            return (                
                <div>                
                    <LoginForm />       
                </div>
            );                
        } else if (this.state.signupForm === true) {
            return (                
                <div>                
                    <p>Track your workouts the way you want to track them.</p>
                    <p>Then, get statistics and analysis on how you are progressing in your fitness journey.</p>
                    <button onClick={this.handleLoginClick}>Log In</button>
                    <button onClick={this.handleSignupClick}>Sign Up</button>        
                </div>
            );
        } else {
            return (                
                <div>                
                    <p>Track your workouts the way you want to track them.</p>
                    <p>Then, get statistics and analysis on how you are progressing in your fitness journey.</p>
                    <button onClick={this.handleLoginClick}>Log In</button>
                    <button onClick={this.handleSignupClick}>Sign Up</button>        
                </div>
            );
        }
    }
  }


     
  