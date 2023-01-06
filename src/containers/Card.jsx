import React from "react";
import '../styles/Card.css';
import { TodoCounter } from '../components/TodoCounter';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoTitle } from '../components/TodoTitle';
import { TodoAddTask } from '../components/TodoAddTask';


const todos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Tomar cursop de intro a react', completed: true},
    {text: 'Jugar minecraft', completed: false},
    {text: 'itsluismario', completed: true},
  
  ]

function Card(){
    return (
        <div>
            
        <div className="CardContainer">
            <TodoTitle />
            <TodoCounter /> 
            <TodoAddTask />
            <CreateTodoButton />
            <TodoSearch />           
            <TodoList>
                {todos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
                ))}
            </TodoList>
            
        </div>
        
            
        </div>
    );
}

export { Card };