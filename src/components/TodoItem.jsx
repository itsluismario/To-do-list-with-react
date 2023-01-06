import React from "react";
import '../styles/TodoItem.css';
import { ReactComponent as Eliminate } from "../assets/close.svg";
import { ReactComponent as Done } from "../assets/icon_circle_check_.svg";
import { ReactComponent as UnDone } from "../assets/icon_circle_.svg";


function Task({ isDone }) {
  console.log(isDone)
  if (isDone) {
    return <UnDone />;
  }
  return <Done />;
}


function TodoItem(props){
    console.log(props.completed);
    return(
        <li className="TodoItem">
        <Task  isDone={props.completed} />
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <Eliminate className="closeIcon" />
      </li>
    );
}


export { TodoItem };