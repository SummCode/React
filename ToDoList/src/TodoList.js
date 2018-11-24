import React, {Component,} from 'react';

import TodoHeader from './compoent/TodoHeader';
import TodoItem from './compoent/TodoItem';
import CompleteItem from './compoent/CompleteItem';

import './todoList.css'

export default class TodoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            toDoList: [],
            toDoSize: 0,

            completeList: [],
            completeSize: 0,
        };
        this.itemAdd = this.itemAdd.bind(this);

        this.getTodoItems = this.getTodoItems.bind(this);
        this.toDoItemDelete = this.toDoItemDelete.bind(this);
        this.toDoItemChecked = this.toDoItemChecked.bind(this);

        this.getCompleteItems = this.getCompleteItems.bind(this);
        this.completeItemDelete = this.completeItemDelete.bind(this);
        this.completeItemChecked = this.completeItemChecked.bind(this);

    }


    itemAdd(item) {
        this.setState({
            toDoList: [...this.state.toDoList, item],
            toDoSize: this.state.toDoSize + 1,
        });
    }

    toDoItemChecked(index) {
        const list = [...this.state.toDoList];
        let item = list[index];
        item.isChecked = !item.isChecked;
        this.toDoItemDelete(index);
        this.setState({
            completeList: [...this.state.completeList, item],
            completeSize: this.state.completeSize + 1,
            toDoSize: this.state.toDoSize - 1,
        });
    }

    toDoItemDelete(index) {
        const list = [...this.state.toDoList];
        list.splice(index, 1);
        this.setState({
            toDoList: list,
            toDoSize: list.length,
        })
    }

    completeItemChecked(index) {
        const list = [...this.state.completeList];
        let item = list[index];
        this.completeItemDelete(index);
        item.isChecked = !item.isChecked;
        this.setState({
            toDoList: [...this.state.toDoList, item],
            toDoSize: this.state.toDoSize + 1,
            completeSize: this.state.completeSize - 1,
        });
    }

    completeItemDelete(index) {
        const list = [...this.state.completeList];
        list.splice(index, 1);
        this.setState({
            completeList: list,
            completeSize: list.length,
        })
    }

    getTodoItems(list) {
        return (
            list.map((item, index) => {
                return (
                    <TodoItem
                        itemDelete={this.toDoItemDelete}
                        itemChecked={this.toDoItemChecked}
                        key={index}
                        item={item}
                        index={index}/>
                )
            })
        )
    }

    getCompleteItems(list) {
        return (
            list.map((item, index) => {
                return (
                    <CompleteItem
                        itemDelete={this.completeItemDelete}
                        itemChecked={this.completeItemChecked}
                        key={index}
                        item={item}
                        index={index}/>
                )
            })
        )
    }


    render() {
        return (
            <div>
                <TodoHeader addItem={this.itemAdd}/>
                {/*正在进行*/}
                <div className='todo'>
                    <div className='todo-layout'>
                        <span className='list-title'>正在进行</span>
                        <span className='todo-num'>{this.state.toDoSize}</span>
                    </div>
                </div>
                <ul>
                    {this.getTodoItems(this.state.toDoList)}
                </ul>
                {/*已完成*/}
                <div className='todo'>
                    <div className='todo-layout'>
                        <span className='list-title'>已经完成</span>
                        <span className='todo-num'>{this.state.completeSize}</span>
                    </div>
                </div>
                <ul>
                    {this.getCompleteItems(this.state.completeList)}
                </ul>
            </div>
        );
    }
}

