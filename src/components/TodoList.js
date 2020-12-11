import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {useSelector,useDispatch} from 'react-redux';
import {addTodo,deleteTodo,updateTodo} from './Redux/actions';
function TodoList() {
  let todos=useSelector(state=>state);
  let dispatch=useDispatch();
  // console.log(todos)
  const addTodos = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    dispatch(addTodo(todo));
  };

  const updateTodos = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    const newTodos=todos.map(item => (item.id === todoId ? newValue : item));
    dispatch(updateTodo(newTodos));
  };

  const removeTodo = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1>Destinations which you want to visit?</h1>
      <TodoForm onSubmit={addTodos} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodos}
      />
    </>
  );
}

export default TodoList;
