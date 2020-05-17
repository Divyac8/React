import React, { Component } from 'react';
import axios from 'axios';
import Register from './register';
import createBrowserHistory from 'history/createBrowserHistory'
const history= createBrowserHistory()
class Login extends Component {
  constructor() {
    super();
    this.state = {
        userName: "",
        password: ""
      }
      }

      handelChange= (e) => {
		
        this.setState({ [e.target.name]: e.target.value });
         console.log(this.state);
     
       }
      
         handelSubmit=(e)=>{
          e.preventDefault()
          const LoginUser ={
            userName : this.state.userName,
            password : this.state.password
            
      
          }
          console.log("userName:"+ this.state.userName);
          console.log("password:"+ this.state.password);
          axios.post('http://18.219.121.39:8080/auth/login',LoginUser)
          .then(res =>{
            console.log(res);
            if(res){
              sessionStorage.setItem('token',res.data.token)
              this.props.history.push('/movies')
              
            }
          })
          
          
          
        }
          
          
    
    render() { 
        return ( 

    <div className="login">
      <h4>Welcome to Movie Application!</h4>
        

       <form className="form-group offset-lg-4" onSubmit={this.handelSubmit}  >
          <div class="form-group col-md-6">
            <label>User Name</label>
            <input type="text" className="form-control" name="userName" onChange={this.handelChange} value={this.state.userName}/>
          </div>
          <div class="form-group col-md-6">
            <label>password </label>
            <input type="text" className="form-control" name="password" onChange={this.handelChange} value={this.state.passwords} />
          </div>
        
        
        <button  className="btn btn-success btn-register" >Signup</button>
        <a className="register-page" href="/">Return to Register page</a>
        </form>
      </div>
    )
         
    }
}
 
export default Login;