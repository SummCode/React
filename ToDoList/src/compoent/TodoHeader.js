import React, { Component } from 'react';

import '../css/todoHeader.css';


export default class TodoHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };

        this.handlerKeyUp = this.handlerKeyUp.bind(this);
        this.itemInput = this.itemInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handlerKeyUp(event) {
        let value = event.target.value;
        if (!value) return false;

        let keyCode = event.keyCode;

        switch (keyCode) {
            case 13:
                this.addItem();
                break;
            default:
        }
    }

    itemInput(e) {
        this.setState({
            content: e.target.value
        });
    }


    addItem() {
        if (this.state.content.length === 0) {
            return;
        }
        let item = {
            isChecked: false,
            content: this.state.content,
        };
        const { addItem } = this.props;
        addItem(item);
        this.setState({
            content: '',
        });
    }

    render() {
        return (
            <div className='todo-header-group'>
                <div className='todo-header-container'>
                    <span className='todo-header-name'>ToDoList</span>
                    <input className='todo-header-input' value={this.state.content} onChange={this.itemInput}
                        placeholder='添加ToDo' onKeyUp={this.handlerKeyUp} />
                    <button className='todo-header-add' onClick={this.addItem}>添加</button>
                </div>
            </div>
        )
    }

}

