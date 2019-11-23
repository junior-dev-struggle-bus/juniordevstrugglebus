import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ResourceForm.css";



export default function ResourceForm() {
    const universal = { required: true };
    const preset = { value: "", ...universal };
    const [name, setName] = useState({ ...preset });
    const [email, setEmail] = useState({ ...preset });
    const [title, setTitle] = useState({ ...preset });
    const [subject, setSubject] = useState({ ...preset });
    const [category, setCategory] = useState({ ...preset });
    const [link, setLink] = useState({ ...preset });
    // Redirection resources for the previosly used Google form
    /* const url = "https://forms.gle/CVMbXaZjVk1tnwjDA";
    const googleForm = event => {
        event.preventDefault();
        window.open(url, "_blank");
    }; */
    const [posted, setPosted] = useState(false);
    const netlifyFunction = async event => {
        event.preventDefault();
        const form = Object.entries({ name, email, title, subject, category, link });
        // Additional validation checks on the form input need to be added
        // Only performing validation for empty form fields currently
        const valid = !form.some(([label, { value }]) => value === "");
        const data = form.reduce((object, [label, { value }]) => ({ ...object, [label]: value }), {});
        console.log(valid, data);
        const res = await axios.post("/.netlify/functions/resources", data);
        // If post is successful, will need to lock form and redirect
        setPosted(res.status === 200 ? true : false);
        console.log(res.data);
    };
    return (
        <div className="container">
            <form className="resource-form">
                <h2>Add Junior Dev Resource</h2>
                <fieldset>
                    <legend>
                        <p>
                            Submit links to your favorite educational material with regards to 
                            programming or the tech industry in general.
                        </p>
                        <span className="resource-required">Required</span>
                    </legend>
                    <label>
                        Full Name
                        {name.required && <span className="resource-required"/>}
                        <input
                            value={name.value} type="text" required={name.required}
                            placeholder="Enter your full name"
                            onChange={event => setName({ ...name, value: event.target.value})}
                        />
                    </label>
                    <label>
                        Email Address
                        {email.required && <span className="resource-required"/>}
                        <input
                            value={email.value} type="email" required={email.required}
                            placeholder="Enter your email address"
                            onChange={event => setEmail({ ...email, value: event.target.value})}
                        />
                    </label>
                    <label>
                        Resource Title
                        {title.required && <span className="resource-required"/>}
                        <input
                            value={title.value} type="text" required={title.required}
                            placeholder="Give the resource a title"
                            onChange={event => setTitle({ ...title, value: event.target.value})}
                        />
                    </label>
                    <label>
                        Technical Subject / Language
                        {subject.required && <span className="resource-required"/>}
                        <input
                            value={subject.value} type="text" required={subject.required}
                            placeholder="Identify the resource topic"
                            onChange={event => setSubject({ ...subject, value: event.target.value})}
                        />
                    </label>
                    <label>
                        Media / Platform Category
                        {category.required && <span className="resource-required"/>}
                        <select
                            value={category.value} required={category.required}
                            onChange={event => setCategory({ ...category, value: event.target.value})}
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
                        {link.required && <span className="resource-required"/>}
                        <input
                            value={link.value} type="url" required={link.required}
                            placeholder="Provide the resource URL"
                            onChange={event => setLink({ ...link, value: event.target.value})}
                        />
                    </label>
                </fieldset>
                <div className="resource-submit">
                    <Link to="/resources">
                        <button>Back</button>
                    </Link>
                    <button type="submit" onClick={netlifyFunction}>Add</button>
                    {/* <a href={url} target="_blank" rel="noopener noreferrer">
                        <button onClick={googleForm}>Google</button>
                    </a> */}
                </div>
            </form>
        </div>
    );
}


