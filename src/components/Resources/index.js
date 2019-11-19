import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Resource from "./Resource";
import AddResource from "./AddResource";
import ResourceForm from "./ResourceForm";
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
            const resp = await axios.get("https://natespilman.tech/jdsb/resources/");
            const data = await resp.data;
            const headers = await data[0].map(json =>
                json.toLowerCase().replace(/ /g, "").replace(/[{()}]/g, "")
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
        const { resources, categories } = this.state;
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
                                    resource => resource["language/topic"] === category
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
                <Route path={`${this.props.match.path}/add`} exact component={ResourceForm}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default Resources;


