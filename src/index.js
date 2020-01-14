import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    // gives routing functionality to our app component 
<BrowserRouter>
<App />
</BrowserRouter>
, 
document.getElementById('root'));
