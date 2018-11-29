import React, { Component } from 'react';

import './App.css';

import ComponentLifecycle from '../component/js/ComponentLifecycle';
import FitScreen from '../component/js/FitScreen';

export default class App extends Component {

    render() {
        return (
            <div className='App'>
               <FitScreen/>
            </div>
        );
    }
}