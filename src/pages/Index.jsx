import React from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import "../css/mainContainer.css";

const Index = () =>{
    return (
        <>
        <Header title = "books" addBook = {true} />
        <CardContainer isBooks = {true}/>
        </>
    )
}

export default Index;