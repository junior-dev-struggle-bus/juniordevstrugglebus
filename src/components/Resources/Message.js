import React, { useState, useEffect } from "react";

import "./Message.css";



export default function Message(props) {
    // Don't set the redirect countdown timer inside of setTimeout!
    // State changes control the timer, so set it as state instead
    const [delay, setDelay] = useState(5);
    useEffect(() => {
        if (!props.error) {
            const timeout = setTimeout(countdown => {
                setDelay(countdown);
                if (countdown === 0) {
                    props.history.push("/resources");
                }
            }, 1000, delay - 1);
            return () => clearTimeout(timeout);
        }
    });
    return props.view && (
        <output className={props.error ? "failure" : "success"}>
            <span>
                {props.error ? "Missing field input!" : "Thank you for contributing!"}
            </span>
            <span>
                {props.error ? "Please fill out the required fields." : `Redirecting you in ${delay}...`}
            </span>
        </output>
    );
}



