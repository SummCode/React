import React from 'react';

import completeItem from '../css/completeItem.css'


class CompleteItem extends React.Component {

    constructor(props) {
        super(props);
        this.completeDelete = this.completeDelete.bind(this)
        this.completeChecked = this.completeChecked.bind(this)
    }

    completeDelete() {
        const {itemDelete, index} = this.props;
        itemDelete(index);
    }

    completeChecked() {
        const {itemChecked, index} = this.props;
        itemChecked(index);
    }


    render() {
        const {item} = this.props;
        return (
            <div className="todo-list-item" >
                <div className='todo-item'>
                    <input type="checkbox" className='todo-item-checkbox' onClick={this.completeChecked}
                           checked={item.checked}/>
                    <div className='todo-item-content' dangerouslySetInnerHTML={{__html: item.content}}/>
                    <div className='todo-item-delete' onClick={this.completeDelete}>-</div>
                </div>
            </div>
        )
    }


}

export default CompleteItem;