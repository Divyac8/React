import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Router, Route, IndexRoute, hashHistory, Switch } from 'react-router'
import Login from './components/login';
import Register from './components/register';
import Contacts from './components/contacts';
import Movie from './components/movie';


class App extends Component {
    render() {
        return ( 
        <div className = "App" >
        <switch>
            <Route path ="/login"  component={Login}></Route>
            <Route path ="/counter" component={Contacts}></Route>
            <Route path="/" exact component={Register}></Route>
            <Route path="/movies" exact component={Movie}></Route>
        </switch>
         
    </div>

        );
    }
}


export default App;