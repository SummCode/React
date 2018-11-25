import React, { Component } from 'react';
import { TODO_ITEM_DELETE, TODO_ITEM_CHECKED } from '../../store/actionCodes';

import store from '../../store/index';

import '../css/TodoItem.css';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.checkboxChange = this.checkboxChange.bind(this);
        this.itemChecked = this.itemChecked.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
        this.handleItemStoreChange = this.handleItemStoreChange.bind(this);

        store.subscribe(this.handleItemStoreChange)
    }

    componentWillUnmount() {
        // TODO
    }

    render() {
        const { item } = this.props;
        return (
            <div className="todo-item">
                <input className="todo-item-checkbox" type="checkbox"
                    onClick={this.itemChecked} onChange={this.checkboxChange} checked={item.status === 1} />
                <div className="todo-item-content" dangerouslySetInnerHTML={{ __html: item.content }} />
                <div className="todo-item-delete" onClick={this.itemDelete}>
                    <div className="todo-item-delete-icon">
                        -
                    </div>
                </div>
            </div>
        );
    }

    checkboxChange() {
        // TODO
    }


    itemChecked() {
        const { item, index } = this.props;
        const action = {
            type: TODO_ITEM_CHECKED,
            status: item.status,
            position: index
        };
        store.dispatch(action);
    }

    itemDelete() {
        const { item, index } = this.props;
        const action = {
            type: TODO_ITEM_DELETE,
            status: item.status,
            position: index
        };
        store.dispatch(action);
    }

    handleItemStoreChange() {
        this.setState(store.getState());
    }


}
