import React from "react";
import AddBook from "./AddBook";
import "../css/Header.css";

const Header = props => {
    return(
        <header>{props.title}
        {props.addBook 
        ? <AddBook /> : undefined}
        </header>
    );
}

export  default Header;