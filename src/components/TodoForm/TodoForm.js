import React from "react";
import { TodoContext } from "../../TodoConext";

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
    }

    return(
        <form onSubmit={onSubmit}>
            <textarea
            value = {newTodoValue}
            onChange = {onChange}
            placeholder = "Add new task"
            ></textarea>
            <div>
                <button
                type = "submit"
                >
                    Create task
                </button>
            </div>
        </form>
    );
}

export { TodoForm };