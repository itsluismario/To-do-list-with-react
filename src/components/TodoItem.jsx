import React from "react";
import '../styles/TodoItem.css';
import { ReactComponent as Eliminate } from "../assets/close.svg";
import { ReactComponent as Done } from "../assets/icon_circle_check_.svg";
import { ReactComponent as UnDone } from "../assets/icon_circle_.svg";


function Task({ isDone }) {
  if (isDone) {
    return <UnDone />;
  }
  return <Done />;
}

function TodoItem(props){
    const onComplete = () => {
      alert('You already complete the to-do ' + props.text);
    }
    const onDelete = () => {
      alert('You get rid of the to-do ' + props.text);
    }
    return(
        <li className="TodoItem">
        <span onClick={onComplete}>
          <Task  
            isDone={props.completed} 
          />
        </span> 
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <Eliminate 
          className="closeIcon" 
          onClick={onDelete}
        />
      </li>
    );
}


export { TodoItem };