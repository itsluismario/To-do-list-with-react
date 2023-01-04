import React from "react";
import '../styles/TodoSearch.css';
import icon_search from '../assets/icon _search_.svg';

function TodoSearch () {
    return(
        <div className="SearchContainer">
            <img src={icon_search} alt={icon_search} className="searchIcon"/>
            <input className="TodoSearch" placeholder="Search" />
        </div>        
    );
}

export { TodoSearch };