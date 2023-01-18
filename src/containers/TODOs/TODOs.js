import React from "react";
import './TODOs.css';
import { TodoProvider } from "../../TodoConext";
import { TODOsUI } from "./TODOsUI";


function TODOs(){
    return (
        <TodoProvider>
            <TODOsUI />
        </TodoProvider>
    );
}

export { TODOs };