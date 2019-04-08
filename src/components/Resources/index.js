import React, {Component} from 'react';
import axios from 'axios'

import Resource from "./Resource"

class Resources extends Component{
    state = {
        resources:[],
        categories:[],
    }
    async componentDidMount(){
        console.log(process.env.NODE_ENV)
        const resp = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1KJCyQz0yrwdaH7hR_Yc61txUHECPT1MW1TDhnCHFoM4/values/responses?key=key')
        const data = await resp.data
        const values = await data.values
        const headers = await values[0].map(json => json.toLowerCase().replace(/ /g,'').replace(/[{()}]/g, ''))
        values.shift()

        const resources = []
        await values.forEach(
            line => {
                const obj = {};
                for(let i = 0; i < line.length; i++){
                    obj[headers[i]] = line[i]
                }
                resources.push(obj)
            }      
        )
        const categories = [...new Set(resources.map(resource => resource['language/topic']))]
        this.setState({resources})
        this.setState({categories})
    }
    
    render(){
        const {categories} = this.state
        return(
            <div className = "container">
            {categories.map(category =>{ 
                const resources = this.state.resources.filter(resource => 
                    resource['language/topic'] == category)
                    return(
                        <div style = {
                            {
                                padding:'1em',
                            }
                        }>
                            <h2 className = "text-left">
                                {category}
                            </h2>
                            <div>
                                {
                                resources.map(resource =>
                                    <Resource resource={resource}/>)
                                }
                            </div>
                        </div>
                        )
                    }
                )
            }
            </div>
        )
    }
}

export default Resources
                        