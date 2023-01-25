import React from "react";
import { TodoContext } from "../../TodoConext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
    }

    return(
        <form onSubmit={onSubmit} className="Group">
            <input
            value = {newTodoValue}
            onChange = {onChange}
            placeholder = "Add new task"
            className="TodoAddTask"
            ></input>
            <div>
                <button
                className="CreateTodoButton"
                type = "submit"
                >
                    Create task
                </button>
            </div>
        </form>
    );
}

export { TodoForm };