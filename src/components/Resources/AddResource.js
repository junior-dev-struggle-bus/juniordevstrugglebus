import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";



const Addresource = styled.div`
    position: fixed;
    right: 7.5%;
    bottom: 0;
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

const Function = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: bold;
    height: 2em;
    margin: 0.5em 0 0;
`;

const Call = styled.button`
    font-size: 0.875em !important;
    height: 100%;
    width: 50%;
`;


export default function AddResource() {
    const [text, setText] = useState("Browser!");
    const netlifyFunction = async () => {
        if (text === "Browser!") {
            const res = await axios.get(".netlify/functions/resources");
            setText(res.data);
        }
    };
    return (
        <Addresource>
            <WebLink href="https://forms.gle/CVMbXaZjVk1tnwjDA" target="_blank">
                <h5>Add Educational Material</h5>
            </WebLink>
            <Function>
                <Call onClick={() => netlifyFunction()}>
                    Function
                </Call>
                {text}
            </Function>
        </Addresource>
    );
}


