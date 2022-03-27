import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Mahesh ",
    text:
      "I,m mahesh, freelancing android developer with good UI design \
     along with full stack development in this field​.",
    image: "/images/",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>
                  {state.title}
                </h1>
                <p>{state.text}</p>
                <ul className="header__ul">
                  <li>
                  <a href="https://www.facebook.com/mahesh.kadambala.7/">
                    <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
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
