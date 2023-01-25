import React from "react";
import '../TodoStatus/TodoStatus.css'

function TodoStatus(props){
    return [
        <button className= {props.AllStatus ? "SelectedButton StatusButton" : "AllTodos  StatusButton"} onClick={props.onChangeAll}>All</button>,
        <button className={props.ActiveStatus ? "SelectedButton StatusButton" : "ActiveTodos  StatusButton"} onClick={props.onChangeActive}>Active</button>,
        <button className={props.CompletedStatus ?"SelectedButton StatusButton" : "CompletedTodos  StatusButton"} onClick={props.onChangeCompleted}>Completed</button>,
        <button className="ClearAllTodos StatusButton" onClick={props.clearAllTodos}>Clear</button>
    ]
}

export { TodoStatus };