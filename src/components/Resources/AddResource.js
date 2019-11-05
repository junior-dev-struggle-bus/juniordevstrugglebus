import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";



const Addresource = styled.div`
    position: fixed;
    top: 92vh;
    left: 80vw;
    min-height: 10vh;
    background-color: black;
    border-top: solid 2px gray;
    border-radius: 25px 25px 0 0;
    padding: 1em;
    transition: 1s;
    color: white;
    cursor: pointer;
    :hover {
        background-color: orange;
    }
`;

const WebLink = styled.a`
    color: white;
    transition: 0.3s;
    :hover {
        color: black;
    }
`;


export default function AddResource() {
    const [text, setText] = useState("Browser!");
    useEffect(() => {
        if (text === "Browser!") {
            const lambda = async () => {
                const res = await axios.get(".netlify/functions/resources");
                setText(res.data);
            }
            lambda();
        }
    }, [text]);
    return (
        <WebLink href="https://forms.gle/CVMbXaZjVk1tnwjDA" target="_blank">
            <Addresource>
                <h5>Add Educational Material</h5>
                {text}
            </Addresource>
        </WebLink>
    );
}



