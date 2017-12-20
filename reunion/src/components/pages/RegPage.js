
import React, { Component } from 'react';

class RegPage extends Component {
  render() {
    return (


     <div>
        <form name = "myform">
        
        <div>
        Enter First Name <input type="text" name="first" />
        </div>
        <div>
         Enter Last Name <input type="text" name="last" />
        </div>
        <div>
        Enter address <input type="text" address="adress" />
        </div>
        <div>
         Enter City <input type="text" city="city" />
         </div> 
         <div>
         Enter State <input type="text" state="state" />Enter Zip <input type="text" zip="zip" />
         </div>

        <div id= "submit"><input type="button" value="Submit" name="Submit" onClick= "validate()" /> </div>
        </form>
        </div>
    );
    }
  }



export default RegPage;