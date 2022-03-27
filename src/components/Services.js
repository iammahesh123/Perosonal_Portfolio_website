import Fade from "react-reveal";
import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
  FaAndroid,
  FaHtml5,
  FaProjectDiagram,
  FaAmazon,
} from "react-icons/fa";
import { Fade } from "react-reveal";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "My Skills",
    text:
      "I have improve the skills in various domains of software technologies to practice and develop the projects.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaAndroid className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "UI design,Java,XML,Android Studio,Firebase,SQLite",
      
    },
    {
      id: 2,
      icon: <FaGithub className="commonIcons" />,
      heading: "Github",
      text:
        "Create Resportary,Push the project,\
        pull the request,commit the changes.",
    },
    {
      id: 3,
      icon: <FaProjectDiagram className="commonIcons" />,
      heading: "Programming Languages",
      text:
        "C, C++, Advance Java, Python(Data Science,machine Learning Libraries), \
               R programming",
    },
    {
      id: 4,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "Web Technologies",
      text:
        "HTML,\
          CSS,\
          Javascript,\
          Bootstrap,ReactJs,\
        AngularJs",
    },
    {
      id: 5,
      icon: <FaAmazon className="commonIcons" />,
      heading: "Amazon Web Service",
      text:
        "I am currently learning the Amazon web technologies.",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Blockchain Technology",
      text:
        "I am currently learning Blockchain technology and cryptography.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
      
        <div className="services__header">
          <Fade bottom>
            <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
           
            <div className="commonBorder"></div>
            
          </div>
          </Fade>
          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                   <Fade bottom>  
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services_box-subheader">{info.subHeading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
                </Fade> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
