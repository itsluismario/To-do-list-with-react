import React from "react";
import '../styles/TodoSearch.css';
import icon_search from '../assets/icon_search_.svg';

function TodoSearch ({searchValue, setSearchValue}) {
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return [
    <div className="SearchContainer">
    <img src={icon_search} alt={icon_search} className="searchIcon"/>
    <input 
        className="TodoSearch" 
    placeholder="Search" 
        value={searchValue}
        onChange={onSearchValueChange}
    />
    </div>,     
    <p>{searchValue}</p>   
    ];
}

export { TodoSearch };