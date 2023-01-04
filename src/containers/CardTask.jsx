import React from "react";
import '../styles/CardTask.css';
import { TodoCounter } from '../components/TodoCounter';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';

const todos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Tomar cursop de intro a react', completed: false},
    {text: 'Jugar minecraft', completed: false},
    {text: 'itsluismario', completed: false},
  
  ]

function CardTask(){
    return (
        <div>
            
        <div className="CardContainer">
            <div>
                <TodoCounter /> 
                <CreateTodoButton />
            </div>
            <TodoSearch />           
            <TodoList>
                {todos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} />
                ))}
            </TodoList>
            
        </div>
        
            
        </div>
    );
}

export { CardTask };