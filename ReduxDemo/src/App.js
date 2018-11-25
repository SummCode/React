import React, {Component} from 'react';

import Header from './widget/js/Header';
import TodoList from './widget/js/TodoList';

import './App.css';

import store from './store/index';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleAppStoreChange = this.handleAppStoreChange.bind(this);
        store.subscribe(this.handleAppStoreChange);

    }

    componentDidMount() {
        this.setState({
                todoSize: this.state.todoList.length,
                completeSize: this.state.completeList.length,
            }
        )
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="app">
                <Header/>

                <TodoList listTitle={'计划任务'} listData={this.state.todoList}/>

                <TodoList listTitle={'已完成任务'} listData={this.state.completeList}/>

            </div>
        );
    }

    handleAppStoreChange() {
        this.setState(store.getState());
    }

}

