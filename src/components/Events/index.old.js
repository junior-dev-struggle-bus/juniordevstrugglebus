import React, { Component } from "react";
import axios from "axios";

// Currently unused
// import styled from "styled-components";

import Event from "./Event";

// Currently Unused
// import { SkeletonLine } from '../UI/Skeleton'

// Currently unused
// const WebLink = styled.a`
// color:white;
// transition:.3s;
// :hover{
//     color:black;
// }
// `
class Events extends Component {
  state = {
    resources: [],
    categories: []
  };
  componentDidMount() {
    var eventsData = async () => {
      const resp = await axios.get("https://natespilman.tech/jdsb/events/");
      const data = await resp.data;
      const headers = await data[0].map(json =>
        json
          .toLowerCase()
          .replace(/ /g, "")
          .replace(/[{()}]/g, "")
      );
      data.shift();

      const resources = [];
      await data.forEach(line => {
        const obj = {};
        for (let i = 0; i < line.length; i++) {
          obj[headers[i]] = line[i];
        }
        resources.push(obj);
      });
      const categories = [
        ...new Set(resources.map(resource => resource["language/topic"]))
      ];
      this.setState({ resources });
      this.setState({ categories });
    };
    eventsData();
  }

  render() {
    if (this.state.resources.length === 0) {
      return (
        <div style={{ color: "black" }} className="container">
          <h1>Loading Events</h1>
          <Event skeleton={true} />
          <Event skeleton={true} />
          <Event skeleton={true} />
          <Event skeleton={true} />
          <Event skeleton={true} />
        </div>
      );
    }

    const { categories } = this.state;
    return (
      <div className="container">
        <h1 style={{ color: "black", padding: ".5em" }}>Upcoming Events</h1>
        {categories.map((category, index) => {
          const resources = this.state.resources.filter(
            resource => resource["language/topic"] === category
          );
          return (
            <div
              key={index}
              style={{
                padding: "1em"
              }}
            >
              {resources.map((resource, index) => (
                <Event key={index} resource={resource} />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Events;
