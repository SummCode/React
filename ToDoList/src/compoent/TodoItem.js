import React from 'react';

import '../css/todoItem.css'


export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }

    handleDelete() {
        const {itemDelete, index} = this.props;
        itemDelete(index);
    }

    handleChecked() {
        const {itemChecked, index} = this.props;
        itemChecked(index);
    }


    render() {
        const {item} = this.props;
        return (
            <div className='todo-item-group'>
                <div className='todo-item-container'>
                    <input className='todo-item-checkbox' type="checkbox" onClick={this.handleChecked}
                           checked={item.isChecked}/>
                    <div className='todo-item-content' dangerouslySetInnerHTML={{__html: item.content}}/>
                    <div className='todo-item-delete' onClick={this.handleDelete}>-</div>
                </div>
            </div>
        )
    }


}