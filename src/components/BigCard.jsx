import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/big-card.css";
import "../css/edit-book.css";
import "../css/delete-book.css";
import "../css/return-page.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import axios from "axios";

const BigCard = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState(0);
    
    const OnChangeTitle = e => setTitle(e.target.value);
    const OnChangeAuthor = e => setAuthor(e.target.value);
    const OnChangeDescription = e => setDescription(e.target.value);
    
    const OnClickSave = async () => {
        const data ={
            title,
            author,
            description,
            id
        };
        try{
            const response = await axios.put("http://localhost:8000/api/books",data);
            Swal.fire(response.data,"","success").then(() =>  window.location.replace("http://localhost:3000/"));
        }catch(err){
            console.log(err)
        }
    }

    const OnClickDelete = async () => {
        try{
            const response = await axios.delete("http://localhost:8000/api/books",{
                headers:{
                    "id":id
                }
            });
            Swal.fire(response.data,"","success").then(() => window.location.replace("http://localhost:3000/"));
        }catch(err){
            console.log(err);
        }
    }
    
    const OnClickReturn = () => window.location.replace("http://localhost:3000");


    useEffect( () => {
        setId(localStorage.id);
        setTitle(localStorage.title);
        setAuthor(localStorage.author);
        setDescription(localStorage.description);
    }, []);

    return (
        <div className="big-card">
            <div className="mb-3">
                <label htmlFor="" className="form-label">title</label>
                <input type="text" className="form-control" value={title} onChange={OnChangeTitle} />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">author</label>
                <input type="text" className="form-control" value={author} onChange={OnChangeAuthor} />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">description</label>
                <textarea  rows="3" style = {{resize:"none"}} className="form-control" value={description} onChange={OnChangeDescription}></textarea>
            </div>
            <div>
                <button className="edit-book" onClick={OnClickSave}>Save</button>
                <button className="delete-book" onClick={OnClickDelete}>Delete</button>
                <button className="return-page" onClick={OnClickReturn}>Return</button>
            </div>
        </div>
    )
}

export default BigCard;