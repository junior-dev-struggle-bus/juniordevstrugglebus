import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Form from "./Form";
import Resource from "./Resource";
import AddResource from "./AddResource";
import NotFound from "../NotFound";

// Currently unused
// import { SkeletonLine } from '../UI/Skeleton'



class Resources extends Component {
    state = {
        resources: [],
        categories: []
    };
    
    componentDidMount() {
        const resourceData = async () => {
            const resp = await axios.get("/.netlify/functions/allResources");
            const resources = await resp.data.map(resp => resp.data);

            const categories = [
                ...new Set(resources.map(resource => resource.topic))
            ];
            this.setState({ resources });
            this.setState({ categories });
            // console.log(resources)
        };
        resourceData();
    }
    
    render() {
        const { resources, categories } = this.state;
        console.log(resources);
        return (
            <Switch>
                <Route path={this.props.match.path} exact>
                    {resources.length === 0 ? (
                        <div style={{ color: "black" }} className="container">
                            <h1>Loading Resources</h1>
                            <Resource skeleton={true} />
                            <Resource skeleton={true} />
                            <Resource skeleton={true} />
                            <Resource skeleton={true} />
                            <Resource skeleton={true} />
                        </div>
                    ) : (
                        <div className="container">
                            {categories.map(category => {
                                const resources = this.state.resources.filter(
                                    resource => resource["topic"] === category
                                );
                                return (
                                    <div style={{ padding: "1em" }}>
                                        <h2 className="text-left">{category}</h2>
                                        <div>
                                            {resources.map(resource => (
                                                <Resource resource={resource} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                            <AddResource {...this.props}/>
                        </div>
                    )}
                </Route>
                <Route path={`${this.props.match.path}/add`} exact component={Form}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default Resources;


