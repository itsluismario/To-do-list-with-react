import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoTitle } from '../components/TodoTitle';
import { TodoAddTask } from '../components/TodoAddTask';

function TODOsUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {
    return(
        <div className="CardContainer">
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
            <TodoList>
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
    );
}

export { TODOsUI };