import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTelegramPlane} from '@fortawesome/free-brands-svg-icons';


export default class Footer extends Component {
  render(){
    return (
        
  <footer className="page-footer font-small default-color">
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">
          <a href="javascript:void(0);" className="fb-ic" >
            <FontAwesomeIcon icon={faFacebookF} className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>
                    
          <a href="javascript:void(0);" className="tw-ic">
            <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"/>
          </a>
          
          <a href="javascript:void(0);" className="gplus-ic">
          <FontAwesomeIcon icon={faGooglePlusG} className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"/>
          </a>
                    
          <a className="ins-ic">
          <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"/>
          </a>

          <a className="ins-ic">
          <FontAwesomeIcon icon={faTelegramPlane} className="fab fa-telegram-plane fa-lg white-text mr-md-5 mr-3 fa-2x"/>
          </a>
          
          </div>
        </div>
      </div>
    </div> 
    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a href=""> Name.ir</a>
    </div>
  </footer>
    );
  }
}