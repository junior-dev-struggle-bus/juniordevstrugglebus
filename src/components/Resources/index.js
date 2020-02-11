import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import Resource from "./Resource";

// Currently unused
// import { SkeletonLine } from '../UI/Skeleton'

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

class Resources extends Component {
  state = {
    resources: [],
    categories: []
  };
  componentDidMount() {
    var resourceData = async () => {
      const resp = await axios.get("https://natespilman.tech/jdsb/resources/");
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
    resourceData();
  }

  render() {
    if (this.state.resources.length === 0) {
      return (
        <div style={{ color: "black" }} className="container">
          <h1>Loading Resources</h1>
          <Resource skeleton={true} />
          <Resource skeleton={true} />
          <Resource skeleton={true} />
          <Resource skeleton={true} />
          <Resource skeleton={true} />
        </div>
      );
    }

    const { categories } = this.state;
    return (
      <div className="container">
        {categories.map(category => {
          const resources = this.state.resources.filter(
            resource => resource["language/topic"] === category
          );
          return (
            <div key={category}
              style={{
                padding: "1em"
              }}
            >
              <h2 className="text-left">{category}</h2>
              <div>
                {resources.map(resource => (
                  <Resource key={resource.link} resource={resource} />
                ))}
              </div>
            </div>
          );
        })}
        <WebLink href="https://forms.gle/CVMbXaZjVk1tnwjDA" target="_blank">
          <Addresource>
            <h5>Add Educational Material</h5>
          </Addresource>
        </WebLink>
      </div>
    );
  }
}

export default Resources;
