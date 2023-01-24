import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []); 
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const completedAllTodos = todos.filter(todo => !!todo.completed);
    
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

    let searchedTodosCompleted = [];

    if(!searchValue.length >= 1){
        searchedTodosCompleted = completedAllTodos;
    } else {
        searchedTodosCompleted = todos.filter(todo => {
            if (todo.completed === true){
                const todoText = todo.text.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText);
            }
        })
    }

    let searchedTodosActive = [];

    if(!searchValue.length >= 1){
        searchedTodosActive = todos.filter(todo => !todo.completed);
    } else {
        searchedTodosActive = todos.filter(todo => {
            if (todo.completed === false){
                const todoText = todo.text.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText);
            }
        })
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
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

    const clearAllTodos = () => {
        const newTodos = [];
        saveTodos(newTodos);
    }
    
    const [AllStatus, setAllStatus] = React.useState(false);
    const [ActiveStatus, setActiveStatus] = React.useState(true);
    const [CompletedStatus, setCompletedStatus] = React.useState(false);

    const onChangeAll = () => {
        setAllStatus(true)
        setActiveStatus(false)
        setCompletedStatus(false)
    }

    const onChangeActive = () => {
        setAllStatus(false)
        setActiveStatus(true)
        setCompletedStatus(false)
    }

    const onChangeCompleted = () => {
        setAllStatus(false)
        setActiveStatus(false)
        setCompletedStatus(true)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            searchedTodosCompleted,
            searchedTodosActive,
            addTodo,
            completeTodo,
            deleteTodo,
            clearAllTodos,
            onChangeAll,
            onChangeActive,
            onChangeCompleted,
            AllStatus,
            ActiveStatus,
            CompletedStatus,
            setAllStatus,
            setActiveStatus,
            setCompletedStatus
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};