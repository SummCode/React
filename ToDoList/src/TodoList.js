import React, {Component, Fragment} from 'react';

import TodoItem from './compoent/TodoItem';
import CompleteItem from './compoent/CompleteItem';


class TodoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            inputContent: '',

            toDoList: [],
            toDoSize: 0,

            completeList: [],
            completeSize: 0,
        };
        this.itemInput = this.itemInput.bind(this);
        this.itemAdd = this.itemAdd.bind(this);
        this.handlerKeyUp = this.handlerKeyUp.bind(this);

        this.getTodoItems = this.getTodoItems.bind(this);
        this.toDoItemDelete = this.toDoItemDelete.bind(this);
        this.toDoItemChecked = this.toDoItemChecked.bind(this);

        this.getCompleteItems = this.getCompleteItems.bind(this);
        this.completeItemDelete = this.completeItemDelete.bind(this);
        this.completeItemChecked = this.completeItemChecked.bind(this);
    }

    handlerKeyUp(event) {
        let value = event.target.value;
        if (!value) return false;

        let keyCode = event.keyCode;

        switch (keyCode) {
            case 13:
                this.itemAdd();
                break;
            default:
        }
    }

    itemAdd() {
        if (this.state.inputContent.length === 0) {
            return;
        }
        let item = {
            checked: false,
            content: this.state.inputContent,
        };
        this.setState({
            toDoList: [...this.state.toDoList, item],
            toDoSize: this.state.toDoSize + 1,
            inputContent: '',
        });
    }

    itemInput(e) {
        this.setState({
            inputContent: e.target.value
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

    toDoItemChecked(index) {
        const list = [...this.state.toDoList];
        let item = list[index];
        item.checked = !item.checked;
        this.toDoItemDelete(index);
        this.setState({
            completeList: [...this.state.completeList, item],
            completeSize: this.state.completeSize + 1,
            toDoSize: this.state.toDoSize - 1,
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

    completeItemChecked(index) {
        const list = [...this.state.completeList];
        let item = list[index];
        item.checked = !item.checked;
        this.completeItemDelete(index);
        this.setState({
            toDoList: [...this.state.toDoList, item],
            toDoSize: this.state.toDoSize + 1,
            completeSize: this.state.completeSize - 1,
        });
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
            <div className=''>
                <div className='header'>
                    <span className='title-name'>ToDoList</span>
                    <input className='input-frame' value={this.state.inputContent} onChange={this.itemInput}
                           placeholder='添加ToDo' onKeyUp={this.handlerKeyUp}/>
                    <button className='btn-add' onClick={this.itemAdd}>添加</button>
                </div>
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

export default TodoList;
