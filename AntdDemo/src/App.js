import React, { Component } from 'react';
import './App.css';

import AntButtonPage from './page/AntButtonPage'
import Button from 'antd/lib/button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AntButtonPage />
                <Button type="primary">App Button</Button>
            </div>
        );
    }
}

export default App;
