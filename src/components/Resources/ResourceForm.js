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
    const [posted, setPosted] = useState(false);
    const [number, setNumber] = useState(0);
    const url = "https://forms.gle/CVMbXaZjVk1tnwjDA";
    const netlifyFunction = async event => {
        event.preventDefault();
        const resource = { name, email, title, subject, category, link };
        // Additional validation checks on the form input need to be added
        // Only performing validation for empty form fields currently
        const invalid = Object.values(resource).some(input => input === "");
        console.log(invalid, resource);
        const res = await axios.post("/.netlify/functions/resources", resource);
        // If post is successful, will need to lock form and redirect
        setPosted(res.status === 200 ? true : false);
        setNumber(number + parseInt(res.data, 10));
    };
    const googleForm = event => {
        event.preventDefault();
        window.open(url, "_blank");
    };
    return (
        <div className="container">
            <form className="resource-form">
                <h2>Add Resource Form</h2>
                <h4>Responses: {number}</h4>
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



