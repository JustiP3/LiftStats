import React, { Component } from 'react'
import LoginForm from "../components/LoginForm"

export default class Welcome extends Component {

    state={loginForm:false, signupForm:false}

    handleLoginClick = () => {

    }

    handleSignupClick = () => {

    }
    
    render() {
        return (
        <div>
            <button>Log In</button>
            <button>Sign Up</button>
            <p>Track your workouts the way you want to track them.</p>
            <p>Then, get statistics and analysis on how you are progressing in your fitness journey.</p>
            <LoginForm />
        </div>
        );
    }
  }
   

     
  