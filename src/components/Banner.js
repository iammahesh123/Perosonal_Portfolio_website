import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Typical from "react-typical"
const Banner = () => {
  const [state] = React.useState({
    title: "I am Mahesh ",
    text:
      "Hi myself mahesh, freelancing android developer with UI design \
     with full stack development.",
    image: "/images/",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
            
              <div className="header__section">
              <ul className="header__ul">
                  <li>
                    <a href="https://github.com/iammahesh123">
                    <FaGithub className="headerIcon" />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/kadambala-mahesh-5744b1218/">
                    <FaLinkedin className="headerIcon" />
                    </a>
                  </li>
                  <li>
                  <a href="https://twitter.com/maheshkm2807">
                    <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/i_am_mahesh_70/">
                    <FaInstagram className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>
                  {state.title}
                  
                </h1>

                <p>
                  {state.text}
                  <Typical loop={Infinity}
                  steps={["B.tech student",1000,"Android Developer",1000,"Frontend Developer",1000,"Full Stack Developer",1000]}/>
                  </p>
                <p>
                
                </p>

                <div>
              
                </div>
                <div className="header__buttons">
                  <a href="./images/resume.pdf" download="mahesh_resume.pdf"className="btn btn-outline">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
