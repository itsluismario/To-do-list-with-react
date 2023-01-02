
//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar cursop de intro a react', completed: false},
  {text: 'Jugar minecraft', completed: false},
  {text: 'itsluismario', completed: false},

]

function App() {
  return (
    <React.Fragment>
    <TodoCounter /> 
    
    <TodoSearch />
    
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} />
      ))}
    </TodoList>
    <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
