//import { render } from "react-dom";
import React, {Component} from 'react';
import "./Header.css";
import "./Contact.js";
import "./Resume.js";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class Header extends Component {
  render(){
    return (
      <div className="header" id="myHeader">
        <div className="topnav" id="myTopnav">

          <a className="mywebsite" href='#AboutMe'> LOGO </a>
          <a href="#AboutMe">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="#Timeline">Timeline</a>
          <a href="#Resume">Resume</a>
          <a href="#Contact">Contact</a>
          

          <a href="javascript:void(0);" className="icon" onClick= { myFunction }>
          <FontAwesomeIcon icon={ faBars } className="fab fa-bars"/>
          </a>
 
        </div>
      </div>
        
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', myFunctionForSticky);
  
  // Get the header
  var header = document.getElementById("myHeader");
  
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// document.addEventListener('DOMContentLoaded', function() {
//   window.addEventListener('click' , borderFunction());
// // Add active class to the current button (highlight it)
//   function borderFunction(){
//     for (var i = 0; i < 4; i++) {
//       var header = document.getElementById("myTopnav");
//       var btns = header.getElementsByClassName("btn");
//       btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//       });
//     }
//   }
// })
