import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NewNavbarPage from './Components/NewNavbar';
import Resume from './Components/Resume';
import OnAboutMeBG from './Components/OnAboutMeBG';
import SkillBar from './Components/SkillBar';
import ContactBG from './Components/ContactBG';
import Timeline from './Components/Timeline';
import programmingSkillsLogo from './Components/programmingSkillsLogo.jpg';
import contactImgLogo from './Components/contactImgLogo.png';
import timelineImgLogo from './Components/timelineImgLogo.png';
import resumeImgLogo from './Components/resumeImgLogo.png';


export default function App() {
  return (
      <div className="all">
        <Header />
        
        <div className="App">
 
          <div className="AboutMe"> 
            <div id="AboutMe"></div>
            <div className="BG">
                <div className="top-left">
                  <OnAboutMeBG />
                </div>
            </div>
          </div>

          <div className="SkillBar">
            <div id="Skills"><br></br><br></br></div>  
            <br></br><br></br>
            <div className="centeredAboveIcons">
              <img src={programmingSkillsLogo} className="programmingSkills" /> 
            </div>
              <br ></br><br></br>
              <h2 className="skill" align="center">My Skills</h2>
              <p className="hm" align="center">Let's throw some light on my skills.</p>
              <br></br><br></br><br></br>
              <div>
                <SkillBar />
              </div>
          </div>    


          <div className="Timeline">
            <div id="Timeline"><br></br><br></br></div>            
              <div className="TL">
                <br></br><br></br>
                <div className="centeredAboveIcons">
                  <img src={timelineImgLogo} className="contactImg" /> 
                </div>
                <br></br><br></br>
                <h2 className="tltext" align="center">Timeline</h2>
                {/* <p className="hmTL" align="center">Got some expertise thanks to my latest jobs.</p> */}
                <h6 className="phone" align="center">Got some expertise thanks to my latest jobs.</h6>
                <div>
                  <br></br><br></br>
                  <Timeline />
                  <br></br><br></br><br></br><br></br><br></br>
                </div> 
              </div>
          </div>
          
          
          <div className="ResumeDL">
            <div id="Resume"><br></br><br></br></div>
            <br></br><br></br>
            <div className="centeredAboveIcons">
              <a  download="timelineImgLogo">
              <img src={resumeImgLogo} className="contactImg" /> </a>
            </div>
              <br></br><br></br>
              <h2 className="skill" align="center">Resume</h2>
              <p align="center">Find out more miscelaneous facts about me.</p>
              <br></br><br></br><br></br>
              <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="DLbtn"><i className="fa fa-download"></i> Download My Resume</button>
                <br></br><br></br><br></br>
              </div>
          </div>


          <div className="Contact">
            <div id="Contact"><br></br><br></br></div>            
              {/* <br></br><br></br><br></br><br></br> */}
              <div className="contactBG">
                <br></br><br></br>
                <div className="centeredAboveIcons">
                  <img src={contactImgLogo} className="contactImg" /> 
                </div>
                <br></br><br></br>
                <h2 className="skill" align="center">Contact Me</h2>
                <p className="hm" align="center">Agree - It's time to get in touch</p>
                <div  className="centered">
                  <br></br><br></br><br></br><br></br><br></br>
                  <ContactBG />
                  <br></br><br></br><br></br>
                  <h6 className="phone" align="center">Phone Number : +989127683971</h6>
                </div>
              </div>              
              <div>               
              </div>
          </div>

          <div>
            
            <div className="footer" align="center"><br></br><br></br>
              © 2020 Copyright :
              <a href=""> Name.ir</a>
              <br></br><br></br>
            </div>
            
          </div>
        </div>
      </div>

  );
}






