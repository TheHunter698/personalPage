import React, { Component } from 'react';
import './App.css';
import Studies from './Components/studies.js'
import Projects from './Components/projects.js'
import Contact from './Components/contact.js'
import Description from './Components/description.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showDesc: true,
    }
  }
  render() {
    if(this.state.showDesc){
      return(
        <div>
          <Description/>
          <Projects/>
          <Studies/>
          <Contact/>
        </div>
      )
    }
    else{
      return (
        <div>
          <Projects/>
          <Studies/>
          <Contact/>
        </div>
      );
    }
  }
}

export default App;
