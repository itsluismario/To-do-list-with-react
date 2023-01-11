import React from "react";
import './Header.css';
import { TODOsUI } from "./TODOsUI";


// const defaultTodos = [
//     {text: 'Cortar cebolla', completed: true},
//     {text: 'Tomar cursop de intro a react', completed: true},
//     {text: 'Jugar minecraft', completed: false},
//     {text: 'itsluismario', completed: false},
  
//   ]

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                
                if (!localStorageItem) {
                  localStorage.setItem(itemName, JSON.stringify(initialValue));
                  parsedItem = initialValue;
                } else {
                  parsedItem = JSON.parse(localStorageItem);
                }
    
                setItem(parsedItem);
                setLoading(false);
            } catch(error) {
                setError(error);
            }
            
        }, 1000)
    }
    );


    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch(error) {
            setError(error);
        }

    };
  
    return {
      item,
      saveItem,
      loading, 
      error
    };
  }



function TODOs(){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []); 
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

    // console.log('Render (antes del useffect)');

    // React.useEffect(() => {
    //     console.log('use effect');
    // }, [totalTodos]);

    // console.log('Render (despues del useffect)');

    return (
        <TODOsUI 
            loading={loading}
            error={error}
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