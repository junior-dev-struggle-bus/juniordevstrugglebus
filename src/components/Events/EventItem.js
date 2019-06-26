import React from "react";
import styled from "styled-components";
import meetupLogo from "../../img/meetupLogo.svg";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 2rem;
  margin: 1rem 0;
  color: white;
  background: black;
  border-radius: 25px;
`;

function Event(props) {
  const { name, link, local_date, venue } = props.event;

  return (
    <div className="container-fluid">
      <Wrapper>
        <h3>{name}</h3>
        <h5>Location: {venue.name}</h5>
        <h5>Date: {local_date}</h5>
        <div>
          <h5>RSVP on</h5>
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <img
              alt="Meetup logo"
              // Weird img tag bottom margin coming from one of the css files -- brute forced it.
              style={{ maxWidth: "10rem", marginBottom: "0" }}
              src={meetupLogo}
            />
          </a>
        </div>
      </Wrapper>
    </div>
  );
}

export default Event;
