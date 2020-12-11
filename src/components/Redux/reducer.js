import {constants} from './constants';
import {todos} from './states';

export let reducer=(state=todos,action)=>{
    let newTodos;
    switch(action.type){
        case constants.ADD_TODO:
            newTodos=[...state];
            newTodos.push(action.payload);
            return newTodos;
        case constants.DELETE_TODO:
            newTodos=[...state];
            newTodos=newTodos.filter(todo=>todo.id!=action.payload);
            return newTodos;
        case constants.UPDATE_TODO:
            return action.payload;     
    }
    return state;
}