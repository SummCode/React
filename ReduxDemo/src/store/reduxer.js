import { ADD_TODO_ITEM, TODO_ITEM_DELETE, TODO_ITEM_CHECKED, INPUT_CHANGE_VALUE } from './actionCodes';

const defaultState = {
    content: '',
    todoList: [],
    completeList: [],
};


export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUT_CHANGE_VALUE:
            newState.content = action.value;
            return newState;
        case ADD_TODO_ITEM:

            if (newState.content.length === 0) {
                return;
            }

            let item = {
                content: newState.content,
                status: 0
            };
            newState.todoList.push(item);
            newState.content = '';
            return newState;
        case TODO_ITEM_CHECKED:
            console.log(action);
            if (action.status === 0) {
                let index = action.position;
                let item = {
                    content: newState.todoList[index].content,
                    status: 1
                };
                newState.todoList.splice(index, 1);
                newState.completeList.push(item);
            } else {
                let index = action.position;
                let item = {
                    content: newState.completeList[index].content,
                    status: 0
                };
                newState.completeList.splice(index, 1);
                newState.todoList.push(item);
            }
            console.log(newState.todoList);
            console.log(newState.completeList);
            return newState;
        case TODO_ITEM_DELETE:
            if (action.status === 0) {
                newState.todoList.splice(action.position, 1)
            } else {
                newState.completeList.splice(action.position, 1)
            }
            return newState;
        default:
            return state;
    }

}

