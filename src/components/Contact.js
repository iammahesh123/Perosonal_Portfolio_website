import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo2.jpeg" alt="" />
              </div>
              <ul className="contactCircles">
                <li>
                <a href="https://www.facebook.com/mahesh.kadambala.7/">
                  <FaFacebookF className="contactIcon" />
                  </a>
                </li>
                <li>
                <a href="https://twitter.com/maheshkm2807">
                  <FaTwitter className="contactIcon" />
                  </a>
                </li>
                <li>
                <a href="https://github.com/iammahesh123"> 
                  <FaGithub className="contactIcon" />
                  </a>
                </li>
                <li>
                <a href="https://www.instagram.com/i_am_mahesh_70/">
                  <FaInstagram className="contactIcon" />
                  </a>
                  
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kadambala-mahesh-5744b1218/">
                    <FaLinkedin className="contactIcon"/>
                    </a>
                  </li>
              </ul>
              <div className="footer">
                Developed by mahesh kadambala.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
