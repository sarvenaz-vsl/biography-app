import React, {Component} from 'react';
import './Timeline.css';



export default class Timeline extends Component {
  render(){
    return (
        <div class="mytimeline">
            <div class="containerTL leftTL">
                <div class="contentT">
                    <h4> 2011-2018 </h4>
                    <p>Shahid soltani Highschool (Sampad) <br></br>
                    I graduated Highschool , where I enjoyed doing math and computer. 
                    I have done some projects meanwhile in Highschool such as app designs 
                    and game designs.</p>
                </div>
            </div>
            <div class="containerTL rightTL">
                <div class="contentT">
                    <h4> Feb 2019-Nov 2019 </h4>
                    <p>Careers Dinng  <br></br>
                    Full stack android developer.</p>
                </div>
            </div>
            <div class="containerTL leftTL">
                <div class="contentT">
                    <h4> 2019-2022 </h4>
                    <p>Shahid beheshti university  Bachelor computer science <br></br>
                    Where I started computer science bachlor and I’m currently studying.</p>
                </div>
            </div>
            <div class="containerTL rightTL">
                <div class="contentT">
                    <h4>Nov2019-Jun2020</h4>
                    <p>Amoozeshdar<br></br>
                    Project manager </p>
                </div>
            </div>
            <div class="containerTL leftTL">
                <div class="contentT">
                    <h4>Jun2020- present</h4>
                    <p>Iran ICT Guild org <br></br>
                    Chief Technology officer</p>
                </div>
            </div>
        </div>

  
    );
  }
}