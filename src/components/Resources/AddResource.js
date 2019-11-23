import React from "react";
import { Link } from "react-router-dom";

import "./AddResource.css"

export default function AddResource(props) {
    return (
        <Link to={`${props.match.path}/add`}>
            <div className="add-resource">
                <h5>Add Educational Material</h5>
            </div>
        </Link>
    );
}