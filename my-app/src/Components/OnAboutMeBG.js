import React, {Component} from 'react';
import "./OnAboutMeBG.css";


export default class OnAboutMeBG extends Component {
    render(){
      return (

       <div className="rowA">
           <div className="column sideA">
                <div className="fakeimg">Image</div>
                <br></br>
                <p className="name">Your Name</p>        
            </div>

            <div className="column middleA">            
                <br></br>
                <p className="hello">Hello!</p>                  
                <p className="AbouMeText">I am an android developer and a senior<br></br> java developer.<br></br> 
                I’m enthused in image processing.<br></br>
                I have years of professional <br></br>experience working as a android developer.<br></br> 
                I have worked in several companies.<br></br> The positions I work on span the range<br></br> from 
                junior Android developer to <br></br>chief technology officer.</p>          
            </div>
        </div> 

      );
    }
  }

  