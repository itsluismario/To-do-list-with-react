import React from "react";
import './TodoItem.css';
import { ReactComponent as Eliminate } from "../../assets/close.svg";
import { ReactComponent as Done } from "../../assets/icon_circle_check_.svg";
import { ReactComponent as UnDone } from "../../assets/icon_circle_.svg";


function Task({ isDone }) {
  if (isDone) {
    return <Done />;
  }
  return <UnDone />;
}

function TodoItem(props){

    return(
        <li className="TodoItem noselect">
        <span onClick={props.onComplete}>
          <Task  
            isDone={props.completed} 
          />
        </span> 
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <Eliminate 
          className="closeIcon" 
          onClick={props.onDelete}
        />
      </li>
    );
}


export { TodoItem };