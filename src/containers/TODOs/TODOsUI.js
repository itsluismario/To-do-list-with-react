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
import { TodoStatus } from '../../components/TodoStatus/TodoStatus';
import './TODOs.css';

function TODOsUI () {
    const {                
        error, 
        loading, 
        searchedTodos,
        searchedTodosCompleted,
        searchedTodosActive, 
        completeTodo, 
        deleteTodo,
        clearAllTodos,
        onChangeAll,
        onChangeActive,
        onChangeCompleted,
        AllStatus,
        ActiveStatus,
        CompletedStatus
        } = React.useContext(TodoContext);

    return (
        <div>
            <div className='Container'>
                <TodoTitle />
                <TodoCounter /> 
                <TodoSearch /> 
                <TodoForm />
                <TodoStatus 
                    onChangeAll = {onChangeAll}
                    onChangeActive = {onChangeActive}
                    onChangeCompleted = {onChangeCompleted}
                    clearAllTodos = {clearAllTodos}
                    AllStatus = {AllStatus}
                    ActiveStatus = {ActiveStatus}
                    CompletedStatus = {CompletedStatus}
                />
            </div>
            
            <div className="Container">
            <TodoList>
                
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading />}
                {AllStatus && searchedTodos.map(todo => (
                <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                    />
                    ))}
                
                {ActiveStatus && searchedTodosActive.map(todo => (
                <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                    />
                    ))}

                {CompletedStatus && searchedTodosCompleted.map(todo => (
                
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