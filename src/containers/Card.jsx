import React from "react";
import '../styles/Card.css';
import { TodoCounter } from '../components/TodoCounter';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoTitle } from '../components/TodoTitle';
import { TodoAddTask } from '../components/TodoAddTask';


const defaultTodos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'Tomar cursop de intro a react', completed: true},
    {text: 'Jugar minecraft', completed: false},
    {text: 'itsluismario', completed: false},
  
  ]

function Card(){
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchTodos = [];

    if(!searchValue.length >= 1){
        searchTodos = todos;
    } else {
        searchTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed === false){
            newTodos[todoIndex].completed = true;
        } else {
            newTodos[todoIndex].completed = false;
        }
        
        setTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        setTodos(newTodos);
    }

    return (
        <div>
            
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
                {searchTodos.map(todo => (
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

export { Card };