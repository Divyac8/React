import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Register from './components/register';
import Contacts from './components/contacts';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(

    <BrowserRouter >
       <App />
    </BrowserRouter> ,
    document.getElementById('root')
    );