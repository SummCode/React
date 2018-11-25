import React from 'react';

import '../css/completeItem.css';

export default class CompleteItem extends React.Component {

    constructor(props) {
        super(props);
        this.completeDelete = this.completeDelete.bind(this)
        this.completeChecked = this.completeChecked.bind(this)
    }


    completeDelete() {
        const { itemDelete, index } = this.props;
        itemDelete(index);
    }

    completeChecked() {
        const { itemChecked, index } = this.props;
        itemChecked(index);
    }


    render() {
        const { item } = this.props;
        return (
            <div className='complete-item-group'>
                <div className='complete-item-container'>
                    <input className='complete-item-checkbox' type="checkbox" onClick={this.completeChecked}
                        checked={item.isChecked} />
                    <div className='complete-item-content' dangerouslySetInnerHTML={{ __html: item.content }} />
                    <div className='complete-item-delete' onClick={this.completeDelete}>-</div>
                </div>
            </div>
        )
    }


}