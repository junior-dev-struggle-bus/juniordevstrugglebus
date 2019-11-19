import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ResourceForm.css";



export default function ResourceForm() {
    const [text, setText] = useState("Browser!");
    const netlifyFunction = async event => {
        event.preventDefault();
        if (text === "Browser!") {
            const res = await axios.get("/.netlify/functions/resources");
            setText(res.data);
        }
    };
    const googleForm = event => {
        event.preventDefault();
        window.open("https://forms.gle/CVMbXaZjVk1tnwjDA", "_blank");
    };
    return (
        <div className="container">
            <form style={{ color: "black", textAlign: "center" }}>
                <h2>Add Resource Form</h2>
                {text}
                <div className="resource-submit">
                    <Link to="/resources">
                        <button>Back</button>
                    </Link>
                    <button onClick={netlifyFunction}>Add</button>
                    <a href="https://forms.gle/CVMbXaZjVk1tnwjDA" target="_blank" rel="noopener noreferrer">
                        <button onClick={googleForm}>Google</button>
                    </a>
                </div>
            </form>
        </div>
    );
}


