import React from "react";
import styled from "styled-components";

import orgImage from "../../img/orgPage.jpeg";

const Aboutsection = styled.div`
  background-color: black;
  width: 100vw;
  padding: 2em;
  border-radius: 3m;
  margin: 2em 0;
`;

const Styledp = styled.div`
  padding: 3em 20em;
  color: white;
`;

const Position = styled.div`
  color: white;
`;

const Organization = props => {
  const bodList = [
    { name: "Austin Atendido", title: "Chairman of the Board" },
    { name: "Nate Spilman", title: "Member of the Board" }
  ];
  const execList = [
    { name: "Austin Atendido", title: "President" },
    { name: "Nate Spilman", title: "Vice President" },
    { name: "Nate Spilman", title: "Treasurer" },
    { name: "Daniel Kluss", title: "Secretary" }
  ];
  return (
    <div>
      <section className="imageblock about-1 bg--secondary">
        <div className="imageblock__content col-md-6 col-sm-4 pos-right">
          <div
            className=""
            style={{
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%"
            }}
          >
            <img alt="image" src={orgImage} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-8 text-left">
              <h1 style={{ paddingBottom: "1em" }}>
                About the Junior Dev Struggle Bus
              </h1>
              <p>
                The Junior Dev Struggle Bus is a non-profit organization in
                filings with the state of Washington. We are in the process of
                opening a bank account and filing for 501c3 status at the
                national level. The short and the long of it is, our community
                intention is to grow developers who then give back to the
                community. Tech companies are more than happy to donate money
                toward that mission, which we will then funnel toward
                instructors, community spaces, etc.
              </p>
            </div>
          </div>
          {/* <!--end of row--> */}
        </div>
        {/* <!--end of container--> */}
      </section>
      <Styledp />
      <Aboutsection id="exec">
        <h3 style={{ color: "white", padding: "0 0 1em 0" }}>
          The Executive Team and Board of Directors
        </h3>
        <h4 style={{ color: "white", padding: "0 0 1em 0" }}>
          Board of Directors
        </h4>
        {bodList.map(position => {
          return (
            <Position>
              {position.title} - {position.name}
            </Position>
          );
        })}

        <h4 style={{ color: "white", padding: "1em 0 1em 0" }}>
          Executive Team
        </h4>
        {execList.map(position => {
          return (
            <Position>
              {position.title} - {position.name}
            </Position>
          );
        })}
        <Styledp>Interested in joining the team? Let us know!</Styledp>
      </Aboutsection>

      {/* <!--end of row--> */}
      {/* <!--end of container--> */}
    </div>
  );
};

export default Organization;
