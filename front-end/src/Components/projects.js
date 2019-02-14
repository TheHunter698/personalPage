import React, { Component } from 'react'

const axios = require('axios')

export default class projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: {}
        }
    }
    componentDidMount = () =>{
        axios('https://api.github.com/users/TheHunter698/repos')
        .then((res) => {
            console.log(res)
            var projectsInfo = []

            for(let element = 0; element < res.data.length; element++){
                projectsInfo.push(res.data[element])
            }
            console.log(projectsInfo)
            this.setState({projects: projectsInfo})
        })
        .catch((err) => console.log(err))
    }

    render() {
      var project = this.state.projects
      
      return (
        <div>
            <h2>Projects</h2>
            <div className="list">
                <ul>
                    {}
                </ul>
            </div>
        </div>
      )
    }
}
