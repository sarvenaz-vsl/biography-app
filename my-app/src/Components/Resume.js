import React, {Component} from 'react';
import "./Resume.css";

export default class Resume extends Component {
    render(){
      return (
      <div className="row">
        <div className="column middle">
          
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco.</p>
        </div>
  
        <div className="column side">
          <h3>Side</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
      </div>

      );
    }
  }