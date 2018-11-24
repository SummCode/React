import React, {Component} from 'react';

import '../css/ComponentLifecycle.css'

import ChildrenComponent from './ChildrenComponent'


export default class ComponentLifecycle extends Component {

    //初始化组件
    constructor(props) {
        super(props);
        this.state = {
            childrens: [],
            isChildren: false
        };
        this.getItemView = this.getItemView.bind(this);
        this.addComponent = this.addComponent.bind(this);
        this.removeComponent = this.removeComponent.bind(this);
        this.updateComponent = this.updateComponent.bind(this);
        console.log(' ParentComponent ====> constructor() ');
    }

    //挂载组件
    componentWillMount() {
        console.log(' ParentComponent ====> componentWillMount() ');
    }

    componentDidMount() {
        console.log(' ParentComponent ====> componentDidMount() ');
    }

    //组件渲染完成，运行
    componentWillReceiveProps() {
        console.log(' ParentComponent ====> componentWillReceiveProps() ');

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(' ParentComponent ====> shouldComponentUpdate() ');
        return true;//true 重新渲染，否则不渲染
    }

    componentWillUpdate() {
        console.log(' ParentComponent ====> componentWillUpdate() ');
    }

    componentDidUpdate() {
        console.log(' ParentComponent ====> componentDidUpdate() ');
    }

    //组件销毁
    componentWillUnmount() {
        console.log(' ParentComponent ====> componentWillUnmount() ');
    }

    render() {
        console.log(' ParentComponent ====> render() ');
        return (
            <div className='component-lifecycle'>
                <div className='component-lifecycle-parent'>
                    <div className='group-btn'>
                        <button className='btn' onClick={this.addComponent}>Add Component</button>
                        {/*<button className='btn' onClick={this.removeComponent}>Remove Component</button>*/}
                        <button className='btn' onClick={this.updateComponent}>Show Children Component</button>
                    </div>
                </div>

                {this.state.isChildren ?
                    <div className='component-lifecycle-parent'>
                        <ul className='children-component'>
                            {this.getItemView()}
                        </ul>
                    </div> : ''
                }


            </div>


        );
    }

    getItemView() {
        return (
            this.state.childrens.map((item, index) => {
                return (
                    <ChildrenComponent
                        key={item}
                        item={item}
                        index={index}
                        removeItem={this.removeComponent}/>
                )
            })
        )
    }

    addComponent() {
        let count = 65 + this.state.childrens.length;
        let item = String.fromCharCode(count);
        const list = [...this.state.childrens, item]
        this.setState({
            childrens: list,
            isChildren: true
        });
    }

    removeComponent(index) {
        const list = [...this.state.childrens];
        list.splice(index, 1);
        if (list.length === 0) {
            this.setState({
                isChildren: false
            });
        }
        this.setState({
            childrens: list
        });
    }

    updateComponent() {

        if (this.state.childrens.length === 0) {
            return;
        }

        this.setState({
            isChildren: !this.state.isChildren
        })
    }

}