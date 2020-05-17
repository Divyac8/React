import React, { Component } from 'react';
import Link from 'react-router-dom'
class Loginlink extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Link to="/login">login</Link>
            </div>
         );
    }
}
 
export default Loginlink;