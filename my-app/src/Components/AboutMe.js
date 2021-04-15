import React, {Component} from 'react';
import "./AboutMe.css";


export default class AboutMe extends Component {
    render(){
      return (


       <div className="row">
        <div className="column middle">
          
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg">Image</div>
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