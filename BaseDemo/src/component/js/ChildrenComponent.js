import React, { Component } from 'react';

import '../css/ChildrenComponent.css';


export default class ChildrenComponent extends Component {

    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);

        console.log(' ChildrenComponent ====> constructor() ');
    }

    //挂载组件
    componentWillMount() {
        console.log(' ChildrenComponent ====> componentWillMount() ');
    }

    componentDidMount() {
        console.log(' ChildrenComponent ====> componentDidMount() ');
    }

    //组件渲染完成，运行
    componentWillReceiveProps() {
        console.log(' ChildrenComponent ====> componentWillReceiveProps() ');

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(' ChildrenComponent ====> shouldComponentUpdate() ');
        let { item } = this.props;
        if (nextProps.item === item) {
            return false;
        }
        return true;//true 重新渲染，否则不渲染
    }

    componentWillUpdate() {
        console.log(' ChildrenComponent ====> componentWillUpdate() ');
    }

    componentDidUpdate() {
        console.log(' ChildrenComponent ====> componentDidUpdate() ');
    }

    //组件销毁
    componentWillUnmount() {
        console.log(' ChildrenComponent ====> componentWillUnmount() ');
    }

    render() {
        console.log(' ChildrenComponent ====> render() ');

        let { item, index } = this.props;
        return (
            <div className='children-component' onClick={this.removeItem}>
                <div className='children-component-container'>{(index + 1) + '. ' + item}</div>
            </div>
        );
    }

    removeItem() {
        let { index, removeItem } = this.props;
        removeItem(index);
    }


}