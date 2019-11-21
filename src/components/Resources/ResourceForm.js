import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ResourceForm.css";



export default function ResourceForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [text, setText] = useState("Browser!");
    const url = "https://forms.gle/CVMbXaZjVk1tnwjDA";
    const netlifyFunction = async event => {
        event.preventDefault();
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
                    <input/>
                </label>
                <label>
                    Email
                    <input/>
                </label>
                <label>
                    Title
                    <input/>
                </label>
                <label>
                    Subject
                    <input/>
                </label>
                <label>
                    Category
                    <select>
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
                    <input/>
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



