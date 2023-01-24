import React from "react";
import '../TodoStatus/TodoStatus.css'

function TodoStatus(props){

    return [
        <button className="{{props.setAllStatus && AllTodos}} StatusButton" onClick={props.onChangeAll}>All</button>,
        <button className="ActiveTodos StatusButton" onClick={props.onChangeActive}>Active</button>,
        <button className="CompletedTodos StatusButton" onClick={props.onChangeCompleted}>Completed</button>,
        <button className="ClearAllTodos StatusButton" onClick={props.clearAllTodos}>Clear</button>
    ]
}

export { TodoStatus };