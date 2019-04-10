import React, {Component} from 'react';
import axios from 'axios'

import Resource from "./Resource"

class Resources extends Component{
    state = {
        resources:[],
        categories:[],
    }
    async componentDidMount(){
        const resp = await axios.get('https://natespilman.tech/jdsb/resources/')
        const data = await resp.data
        const headers = await data[0].map(json => json.toLowerCase().replace(/ /g,'').replace(/[{()}]/g, ''))
        data.shift()

        const resources = []
        await data.forEach(
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
        console.log(process.env)
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
                        