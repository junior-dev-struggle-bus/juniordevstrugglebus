import React, {Component} from 'react';
import styled from 'styled-components'

import './Resource.css'

export default function Resource(props){
  const {title,mediacategory, link} = props.resource
    // Create a Title component that'll render an <h1> tag with some styles

const Title = styled.h3`
    paddingBotton:0;
    marginBottom:0;
`
const TextAttributes = styled.h5`
        paddingBotton:0;
        marginBottom:0;
`
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 4em;
color:white !important;
background: black;
border-radius:25px;
`;

const WebLink = styled.a`
color:white;
transition:.3s;
:hover{
    color:orange;
}

`


// Use Title and Wrapper like any other React component – except they're styled!

  return (
        <div className = "py-5 text-left resource-card"> 

<Wrapper>
  <Title>
  {title}
  </Title>
        <div style={{color:'white',}}>
        <TextAttributes>
            Category: {mediacategory}
        </TextAttributes>
        <TextAttributes>
         Website: <WebLink href ={link} target = "_blank">{link}</WebLink>
         </TextAttributes>
            {/* <h2>{title}</h2> */}
        
            </div>
        
        </Wrapper>
        </div>
        
    )
}