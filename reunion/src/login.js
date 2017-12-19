
    
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (

        <div>
        <form name = "myform">
        <div id= "submit"><input type="button" value="Login" name="Submit" onClick= "validate()" /> </div>
        <div>
        <p>ENTER USER NAME <input type="text" name="username" /> ENTER PASSWORD <input type="password" name="pword" />
        
        </p></div>
        </form>
        </div>
		);
		}
	}
export default Login;
       