import React from 'react';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';

import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoTitle } from '../../components/TodoTitle/TodoTitle';
import { TodoContext } from '../../TodoConext';
import { TodoForm } from '../../components/TodoForm/TodoForm';
import { TodosError } from '../../components/TodosError/TodosError';
import { TodosLoading } from '../../components/TodosLoading/TodosLoading';



function TODOsUI () {
    const {                
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo} = React.useContext(TodoContext);

    return (
        <div>
        <div className='Container'>
            <TodoTitle />
            <TodoCounter /> 
            <TodoForm />
            <TodoSearch /> 
        </div>
        <div className="Container">
        <TodoList>
            {error && <TodosError error={error}/>}
            {loading && <TodosLoading />}
            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
  
        </div>
        </div>
    );
}

export { TODOsUI };