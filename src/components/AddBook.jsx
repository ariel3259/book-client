import React,{useState} from "react";
import { Modal,Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "../css/add-book.css"

const AddBook = () => {
    
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const openModal = () => setModal(!modal);
    const closeModal = () => setModal(!modal);
    const OnChangeTitle = e => setTitle(e.target.value);
    const OnChangeAuthor = e => setAuthor(e.target.value);
    const OnChangeDescription = e => setDescription(e.target.value);

    const OnClickAddBook = async () => {
        const data = {
            title,
            author,
            description
        };

        try{
            const response = await axios.post("http://localhost:8000/api/books",data);
            Swal.fire(response.data,"","success").then(() =>  window.location.reload());
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <button className = "add-book" onClick= {openModal}>+</button>
        <Modal show = {modal}>
            <Modal.Header>
                Adding a book
            </Modal.Header>
            <Modal.Body>
        <div className="mb-3">
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" onChange = {OnChangeTitle} placeholder = "Write book's title"/>
        </div>           
        <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" onChange = {OnChangeAuthor} placeholder = "Write book's author" />
        </div>     
        <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea rows="3" className="form-control" onChange = {OnChangeDescription} placeholder = "Write book's description" ></textarea>
        </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "success" onClick = {OnClickAddBook}>Add book</Button>
                <Button variant = "primary" onClick = {closeModal}>X</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AddBook