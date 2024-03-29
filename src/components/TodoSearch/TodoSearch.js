import React from "react";
import './TodoSearch.css';
import icon_search from '../../assets/icon_search_.svg';
import { TodoContext } from "../../TodoConext";

function TodoSearch () {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
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
    ];
}

export { TodoSearch };