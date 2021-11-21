import React,  {useEffect,useState} from "react";  
import "../css/card-container.css";
import CardsBooks from "./CardsBooks";
import axios from "axios";

const CardContainer = props => {
    const [books, setBooks] = useState([]);

    useEffect(async ()=>{
        if(!props.isBooks){
            setBooks(undefined); 
            return;
        }
        try{
            const response = await axios.get("http://localhost:8000/api/books");
            setBooks(response.data);
        }catch(err){
            console.log(err)
        }

    }, [axios]);

    return(
        <div className="card-container">
            {!books ? props.children : books.map(element => <CardsBooks 
            title = {element.title} 
            id = {element.id} 
            author = {element.author} 
            description = {element.description}
            key = {element.id}  />)}
        </div>
    )
}

export default CardContainer;