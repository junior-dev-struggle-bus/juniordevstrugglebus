import React, {Component} from 'react';
import styled from 'styled-components'

import aboutImage from "../../img/meetupLogo.svg"

const Aboutsection = styled.div`
    background-color:black;
    width:100vw;
    padding:2em;
    border-radius:3m;
    margin:2em 0;
`

const Styledp = styled.div`
padding:3em 20em;
color:white;
`

const Position = styled.div`
color:white;
`

const Organization = (props) =>{
    const bodList = [{name:'Austin Atendido',title:'Chairman of the Board'},{name:'Nate Spilman',title:'Member of the Board'}]
    const execList = [{name:'Austin Atendido',title:'President'},{name:'Nate Spilman',title:'Vice President'},{name:'Nate Spilman',title:'Treasurer'},{name:'Daniel Kluss',title:'Secretary'}]
    return(
        <div>
            <Aboutsection>
              <h1 style={{color:'white'}}>About the Junior Dev Struggle Bus</h1>
              <Styledp>
                  The Junior Dev Struggle Bus is a non-profit organization in filings with the state of Washington. We are in the process of opening a bank account and filing for 501c3 status at the national level. The short and the long of it is, our community intention is to grow developers who then give back to the community. Tech companies are more than happy to donate money toward that mission, which we will then funnel toward instructors, community spaces, etc.
                  </Styledp>
            </Aboutsection>
            <Aboutsection>
              <h3 style={{color:'white',padding:'1em 0'}}>The Executive Team and Board of Directors</h3>
              {bodList.map(position => {
                  return(
                      <Position>
                      {position.title} - {position.name}
                      </Position>
              )})}
            </Aboutsection>
            {/* <!--end of row--> */}
        {/* <!--end of container--> */}
    </div>
        )
    }

export default Organization
