import React, { Component } from "react";
import axios from "axios";

import Resource from "./Resource";
import AddResource from "./AddResource";

// Currently unused
// import { SkeletonLine } from '../UI/Skeleton'



class Resources extends Component {
    state = {
        resources: [],
        categories: []
    };
    componentDidMount() {
        const resourceData = async () => {
            const resp = await axios.get("http://localhost:8888/.netlify/functions/allResources");
            const resources = await resp.data.map(resp => resp.data);

            const categories = [
                ...new Set(resources.map(resource => resource.topic))
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
                        resource => resource.topic === category
                    );
                    return (
                        <div style={{ padding: "1em" }}>
                            <h2 className="text-left">{category}</h2>
                            <div>
                                {resources.map(resource => (
                                    <Resource key={resource.title} resource={resource} />
                                ))}
                            </div>
                        </div>
                    );
                })}
                <AddResource/>
            </div>
        );
    }
}

export default Resources;


