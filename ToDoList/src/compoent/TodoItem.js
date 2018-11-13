import React from 'react';

import todoItem from '../css/todoItem.css'


class TodoItem extends React.Component {

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
            <div className="todo-list-item" >
                <div className='todo-item'>
                    <input type="checkbox" className='todo-item-checkbox' onClick={this.handleChecked}
                           checked={item.checked}/>
                    <div className='todo-item-content' dangerouslySetInnerHTML={{__html: item.content}}/>
                    <div className='todo-item-delete' onClick={this.handleDelete}>-</div>
                </div>
            </div>
        )
    }


}

export default TodoItem;