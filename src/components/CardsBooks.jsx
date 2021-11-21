import React from "react";
import "../css/cards-books.css"


const CardsBooks = props => {

    const OnClickDescription = () => {
        localStorage.title = props.title;
        localStorage.id = props.id;
        localStorage.author = props.author;
        localStorage.description = props.description;
        window.location.replace("http://localhost:3000/description");
    }

    return (
        <div className = "cards-book" onClick = {OnClickDescription}>
            <h2 className = "title">title : {props.title}</h2>
            <h2>id : {props.id} </h2>
            <h2>author : {props.author}</h2>
            <h2>description: {props.description}</h2>
        </div>
    )
}

export default CardsBooks;