import React, { Component } from 'react';
import { ADD_TODO_ITEM, INPUT_CHANGE_VALUE } from '../../store/actionCodes';
import '../css/Header.css';

import store from '../../store/index';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlerKeyUp = this.handlerKeyUp.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);

        this.handleHeaderStoreChange = this.handleHeaderStoreChange.bind(this);
        store.subscribe(this.handleHeaderStoreChange)

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div className="header">
                <div className="header-body">
                    <div className="header-name">TodoList</div>
                    <input className="header-input" value={this.state.content} onChange={this.handleInputChange} onKeyDown={this.handlerKeyUp} />
                    <button className="header-add" onClick={this.addTodoItem}>添加</button>
                </div>
            </div>
        );
    }

    handleInputChange(e) {
        const action = {
            type: INPUT_CHANGE_VALUE,
            value: e.target.value
        };
        store.dispatch(action);
    }

    handlerKeyUp(event) {
        let value = event.target.value;
        if (!value) return false;

        let keyCode = event.keyCode;

        switch (keyCode) {
            case 13:
                this.addTodoItem();
                break;
            default:
        }
    }

    addTodoItem() {
        const action = {
            type: ADD_TODO_ITEM,
        }
        store.dispatch(action);
    }

    handleHeaderStoreChange() {
        this.setState(store.getState());
    }

}
