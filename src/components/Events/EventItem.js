import React, { useState } from "react";
import styled from "styled-components";
import meetupLogo from "../../img/meetupLogo.svg";

import { SkeletonLine } from "../UI/Skeleton";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h3`
  paddingbotton: 0;
  marginbottom: 0;
`;
const TextAttributes = styled.h5`
  paddingbotton: 0;
  marginbottom: 0;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  color: white !important;
  background: black;
  border-radius: 25px;
`;

function Event() {
  return <div />;
}

export default Event;
