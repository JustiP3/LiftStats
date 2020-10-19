import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Welcome from '../containers/Welcome'

class LoginForm extends Component {

    state={email:"", loggingIn: false}

    handleChange = (event) => {
      const {value, name} = event.target
      this.setState( {...this.state, [name]: value })
    }

    componentDidMount = function() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '280818742874917',
          cookie     : true,  // enable cookies to allow the server to access
                            // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v8.0' // use version 2.1
        });
    
        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.
        window.FB.getLoginStatus(function(response) {
          this.statusChangeCallback(response);
        }.bind(this));
      }.bind(this);
    
      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
    
    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    testAPI = function() {
      console.log('Welcome!  Fetching your information.... ');
      window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
      });
    }
    
    // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback = function(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this.testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
      }
    }
    
    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    checkLoginState = function() {
      window.FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }
    
    handleClick = function() {      
      window.FB.login(this.checkLoginState());
    };
   
   
    render() {

      const handleSubmit = (event) => {
        event.preventDefault() 
        this.props.handleLogin(this.state.email.split(".")[0])        
        this.setState( {...this.state, loggingIn: true})         
      }

      if (this.state.loggingIn === false) {
        return (
          <div className="card align-items-center">   
              <h1>Log In</h1>
              <h2 id="status">something</h2>
              <h2><button onClick={this.handleClick}>Login</button></h2>
              <form onSubmit={handleSubmit}>
                
                  <label>Email</label>
                  <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                  
                  <button type='submit'>Log In</button>
              </form>
              <button onClick={this.props.handleCloseForm}>Cancel</button>
          </div>
          );
      } else {

        let loggedIn = false 
        if (this.props.displayName !== "Not Logged In" && this.props.displayName !== "Logging In") {
          loggedIn = true 
        }

        return (
        <Route exact path="/">
          {loggedIn ? <Redirect to="/dashboard" /> : <Welcome />}
        </Route>      
      )}      
    }
}


export default LoginForm