import React, {Component} from 'react';

import TodoItem from './TodoItem';

import '../css/TodoList.css';

import store from '../../store/index';


export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState()

        this.getViewItems = this.getViewItems.bind(this);

        this.handleListStoreChange = this.handleListStoreChange.bind(this);
        store.subscribe(this.handleListStoreChange)
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="todo-list">
                <div className="todo-list-body">
                    <div className="todo-list-title">
                        <span>{this.props.listTitle}</span>
                        <span>{this.props.listData.length}</span>
                    </div>
                    <div className="todo-list-content">
                        <ul>
                            {this.getViewItems()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    getViewItems() {
        const {listData} = this.props;
        return (
            listData.map((item, index) => {
                return <TodoItem item={item} index={index} key={index}/>
            })
        );
    }

    handleListStoreChange() {
        this.setState(store.getState());
    }

}