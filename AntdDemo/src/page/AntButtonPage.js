import React, { Component } from 'react';

import Button from 'antd/lib/button'

import './AntButtonPage.css'

class AntButtonPage extends Component {

    render() {
        return (
            <div>
                <Button type="default">default</Button>
                <Button type="primary">primary</Button>
                <Button type="dashed">dashed</Button>
                <Button type="danger">danger</Button>
            </div>
        );
    }


}

export default AntButtonPage;