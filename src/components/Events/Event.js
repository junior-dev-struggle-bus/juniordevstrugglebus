import React, {Component} from 'react';
import styled from 'styled-components'
import meetupLogo from "../../img/meetupLogo.svg"


import { SkeletonLine } from '../UI/Skeleton'

export default function Resource(props) {
    const { title, link, date, location } =
        props.skeleton === true ?
            '' : props.resource

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

// This can also be referenced to how a 'Resource' is rendered
if (props.skeleton === true) {
    return (
        <div className = "py-5 text-left resource-card"> 
        
            <Wrapper style={{padding: '4em', margin: '15px', marginTop: '50px'}}>
                <Title>
                    <SkeletonLine/>
                </Title>
                <div>
                    <TextAttributes>
                        <SkeletonLine/>
                    </TextAttributes>
                    <TextAttributes>
                        <SkeletonLine/>
                    </TextAttributes>
                </div>
                    
            </Wrapper>
        </div>
    )
}
    
// Use Title and Wrapper like any other React component – except they're styled!

  return (
        <div className = "py-5 text-left resource-card"> 

<Wrapper>
  <Title>
   { date } - { title }
  </Title>
  <TextAttributes>
      Location: {location}
</TextAttributes>
        <div style={{color:'white',paddingBottom:"1em;"}}>
        <TextAttributes>
            <div style={{display:'flex'}}>
                <a target="_blank" href = {link}>
                        <div className = "col-sm-8">
                            <span>
                                <h4 style={{color:'white'}}>
                                    Meetup with us!
                                </h4>
                            </span>
                        </div>
                        <div className = "col-sm-4">
                            <img style={{maxWidth: '100px'}} src={meetupLogo} className="img-fluid"/>
                        </div>
                    </a>
                    </div>
         {/* Sign Up: <WebLink href ={link} target = "_blank">{link}</WebLink> */}
         </TextAttributes>
            {/* <h2>{title}</h2> */}
        
            </div>
        
        </Wrapper>
        </div>
        
    )
}