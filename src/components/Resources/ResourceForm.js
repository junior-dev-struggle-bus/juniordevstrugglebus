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
            <form className="resource-form">
                <h2>Add Resource Form</h2>
                {text}
                <fieldset>
                    <label>
                        Full Name
                        <input
                            value={name} type="text" required
                            placeholder="Enter your full name"
                            onChange={event => setName(event.target.value)}
                        />
                    </label>
                    <label>
                        Email Address
                        <input
                            value={email} type="email" required
                            placeholder="Enter your email address"
                            onChange={event => setEmail(event.target.value)}
                        />
                    </label>
                    <label>
                        Resource Title
                        <input
                            value={title} type="text" required
                            placeholder="Give the resource a title"
                            onChange={event => setTitle(event.target.value)}
                        />
                    </label>
                    <label>
                        Technical Subject / Language
                        <input
                            value={subject} type="text" required
                            placeholder="Identify the resource topic"
                            onChange={event => setSubject(event.target.value)}
                        />
                    </label>
                    <label>
                        Media / Platform Category
                        <select
                            value={category} required
                            onChange={event => setCategory(event.target.value)}
                        >
                            <option value="">Select a media category</option>
                            <option value="course">Course</option>
                            <option value="video">Video</option>
                            <option value="blog post">Blog Post</option>
                            <option value="free course">Free Course</option>
                            <option value="inexpensive course">Inexpensive Course</option>
                            <option value="bootcamp">Bootcamp</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label>
                        Link To Resource
                        <input
                            value={link} type="url" required
                            placeholder="Provide the resource URL"
                            onChange={event => setLink(event.target.value)}
                        />
                    </label>
                </fieldset>
                <div className="resource-submit">
                    <Link to="/resources">
                        <button>Back</button>
                    </Link>
                    <button type="submit" onClick={netlifyFunction}>Add</button>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <button onClick={googleForm}>Google</button>
                    </a>
                </div>
            </form>
        </div>
    );
}



