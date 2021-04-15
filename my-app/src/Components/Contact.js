import React, {Component} from 'react';
import "./Contact.css";

export default class Contact extends Component {
    render(){
      return (
        <div className="row1">
        <div className="ContactText">

            <p>
            You can get a hold of me by using the contact form below.<br></br><br></br>

            If you want to mail something to me you can use my business address:<br></br><br></br>

            Kinnear Consulting<br></br>
            PO Box 53<br></br>
            Downpatrick<br></br>
            BT30 0AP<br></br>
            Contact Form:
            </p>
        
            <div className="container">
                <form action="/action_page.php">
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-25">
                            <label for="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-25">
                            <label for="mail">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="mail" name="email" placeholder="Email.."></input>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-25">
                            <label for="message">Your Message</label>
                        </div>
                        <div class="col-75">
                            <textarea id="message" name="message" placeholder="Write something.."></textarea>
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                    <div class="row">
                        <input type="submit" value="Submit"></input>
                        <br></br><br></br><br></br>
                    </div>
                </form>
            </div>
        </div>
</div>
      );
    }
  }