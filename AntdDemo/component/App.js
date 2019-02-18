import React, { Component } from 'react'

import { Button } from 'antd'

import './App.css'


export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="Ghost">ghost</Button>
            </div>
        );
    }

}