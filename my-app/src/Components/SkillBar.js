import React, {Component} from 'react';
import "./SkillBar.css";


export default class SkillBar extends Component {
    render(){
      return (
          
        <div className="skillResponsive">

            <p>Android Development (65%)</p>
            <div className="androidDev"></div>  
            <br></br>

            <p>Image Processing (20%)</p>    
            <div className="imageProcess"></div>   
            <br></br>

            <p>Java Programming (60%)</p>    
            <div className="java"></div>  
            <br></br>

            <p>Python (35%)</p>    
            <div className="python"></div> 
            <br></br>

            <p>SQL (80%)</p>    
            <div className="SQL"></div>  
            <br></br>

            <p>Git (90%)</p>    
            <div className="git"></div>  
            <br></br><br></br><br></br>
    
        </div>
      );
    }
  }