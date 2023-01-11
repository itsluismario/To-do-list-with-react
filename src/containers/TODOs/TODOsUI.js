import React from 'react';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoTitle } from '../../components/TodoTitle/TodoTitle';
import { TodoAddTask } from '../../components/TodoAddTask/TodoAddTask';

function TODOsUI ({
    loading, 
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {
    return (
        <div>
        <div className='Container'>
            <TodoTitle />
            <TodoCounter 
                total = {totalTodos}
                completed = {completedTodos}
            /> 
            <TodoAddTask />
            <CreateTodoButton />
            <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            /> 
        </div>
        <div className="Container">
                      
            <TodoList>
                {error && <p>Something is wrong</p>}
                {loading && <p>It's loading</p>}
                {(!loading && !!searchedTodos) && <p>Create your first TODO</p>}
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