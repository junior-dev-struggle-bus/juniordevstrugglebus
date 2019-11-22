import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ResourceForm.css";



export default function ResourceForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const [text, setText] = useState("Browser!");
    const url = "https://forms.gle/CVMbXaZjVk1tnwjDA";
    const netlifyFunction = async event => {
        event.preventDefault();
        const resource = { name, email, title, subject, category, link };
        console.log(resource);
        if (text === "Browser!") {
            const res = await axios.get("/.netlify/functions/resources");
            setText(res.data);
        }
    };
    const googleForm = event => {
        event.preventDefault();
        window.open(url, "_blank");
    };
    return (
        <div className="container">
            <form style={{ color: "black", textAlign: "center" }}>
                <h2>Add Resource Form</h2>
                {text}
                <label>
                    Name
                    <input required value={name} onChange={event => setName(event.target.value)}/>
                </label>
                <label>
                    Email
                    <input required value={email} onChange={event => setEmail(event.target.value)}/>
                </label>
                <label>
                    Title
                    <input required value={title} onChange={event => setTitle(event.target.value)}/>
                </label>
                <label>
                    Subject
                    <input required value={subject} onChange={event => setSubject(event.target.value)}/>
                </label>
                <label>
                    Category
                    <select required value={category} onChange={event => setCategory(event.target.value)}>
                        <option>Course</option>
                        <option>Video</option>
                        <option>Blog Post</option>
                        <option>Free Course</option>
                        <option>Inexpensive Course</option>
                        <option>Bootcamp</option>
                        <option>Other</option>
                    </select>
                </label>
                <label>
                    Link
                    <input required value={link} onChange={event => setLink(event.target.value)}/>
                </label>
                <div className="resource-submit">
                    <Link to="/resources">
                        <button>Back</button>
                    </Link>
                    <button onClick={netlifyFunction}>Add</button>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <button onClick={googleForm}>Google</button>
                    </a>
                </div>
            </form>
        </div>
    );
}



