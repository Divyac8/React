import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { postData } from './services/postdate';
import { Link } from 'react-router';
import axios from 'axios';
import Loginlink from './loginlink';
import { browserHistory } from "react-router";
import createBrowserHistory from 'history/createBrowserHistory'
const history= createBrowserHistory()




class Register extends Component {
    constructor() {
      super();
      this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      password: ''
}



}


  handelChange=  (e) => {
		
   this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);

  }
 

  handelSubmit= (e) =>{
    e.preventDefault()
    const User ={
      fistName : this.state.firstName,
      lastName : this.state.lastName,
      userName : this.state.userName,
      password : this.state.password
      

    }
    console.log("fistname:"+ this.state.firstName);
    console.log("lastname:"+this.state.lastName);
    console.log("username:"+ this.state.userName);
    console.log("password:"+ this.state.password);
    axios.post('http://18.219.121.39:8080/auth/register',User)
    .then(res =>{
      console.log(res);
      if(res){
      this.props.history.push('/login');
    }
    })
    
    
    
  }
    
  // componentDidMount() {
  //   function handelSubmit(e){
  //     e.preventDefault()
  //     const User ={
  //       fistname : this.state.firstname,
  //       lastname : this.state.lastname,
  //       username : this.state.username,
  //       password : this.state.password
        
  
  //     }
  //     console.log("fistname:"+ this.state.firstname);
  //     console.log("lastname:"+this.state.lastname);
  //     console.log("username:"+ this.state.username);
  //     console.log("password:"+ this.state.password);
  //     axios.post('http://18.219.121.39:8080/auth/register',User)
  //     .then(res =>{
  //       console.log(res);
        
        
  //       })
        
  //     }
    
  //    };
     
    

  
  


  // componentDidMount=(event) =>{

  //   fetch('http://18.219.121.39:8080/auth/register', {

  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json',

  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       firstname: this.state.firstname,
  //       lastname: this.state.lastname,
  //       username: this.state.username,
  //       password: this.state.password

  //     })

  //   }).then((Response) => Response.json())

  //     .then((Result) => {
  //       if (Result.Status === 'Success')
  //               this.props.history.push("/login");

  //       else

  //         alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
  //     })
  // }


  

render() {
    return (
      

      <div className="register">
        <h2 className="movie">Welcome to Movie Application!</h2>
        <h4>Register a new user</h4>

       <form className="form-group offset-lg-4" onSubmit = {this.handelSubmit}  >
        <div className="form-group col-md-6 ">
            <label>First Name:</label>
            <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handelChange}/>
          </div>
          <div className="form-group col-md-6">
            <label  >Last Name:</label>
            <input type="text" className="form-control" name="lastName" onChange={this.handelChange} value={this.state.lastName}/>
          </div>
          <div className="form-group col-md-6">
            <label>User Name</label>
            <input type="text" className="form-control" name="userName" onChange={this.handelChange} value={this.state.userName}/>
          </div>
          <div className="form-group col-md-6">
            <label>password </label>
            <input type="text" className="form-control" name="password" onChange={this.handelChange} value={this.state.password} />
          </div>
        
        
        <button  className="btn btn-success btn-register"  >Register</button>
        <br></br><br></br><br></br>
        
        <a className="login-page" href="/login">Return to Login page</a>

        </form>
      
      

        
      
          
        
      
        
        

      </div>
    )
}
}


export default Register;