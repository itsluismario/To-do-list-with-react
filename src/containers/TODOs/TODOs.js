import React from "react";
import './TODOs.css';
import { TODOsUI } from "./TODOsUI";


// const defaultTodos = [
//     {text: 'Cortar cebolla', completed: true},
//     {text: 'Tomar cursop de intro a react', completed: true},
//     {text: 'Jugar minecraft', completed: false},
//     {text: 'itsluismario', completed: false},
  
//   ]

function TODOs(){
    const localStorageTodos = localStorage.getItem('TODOS_V1');
    let parsedTodos;

    if(!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify([]));
        parsedTodos = [];
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = React.useState(parsedTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchValue.length >= 1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const saveTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos)
        localStorage.setItem('TODOS_V1', stringifiedTodos);
        setTodos(newTodos);
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed === false){
            newTodos[todoIndex].completed = true;
        } else {
            newTodos[todoIndex].completed = false;
        }  
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    return (
        <TODOsUI 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export { TODOs };