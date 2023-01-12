import React from "react";
import './Header.css';
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