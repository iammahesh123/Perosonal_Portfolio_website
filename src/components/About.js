import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Myslef Mahesh.I am student of JNTU Guarajada university and freelancing of android developer and frontend web developer.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Kadambala Mahesh" },
    { id: 2, title: "Email:", text: "maheshkadambala18@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9573327520" },
    { id: 4, title: "Linkedin", text: "iammahesh123" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <Fade bottom>
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        </Fade>
        <div className="row  h-650 alignCenter">

          <div className="col-6">
          <Fade bottom>
            <div className="about__info">
              
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Myself Mahesh Kadambala, I'm pursuing B.tech in Information Technology at Jawaharlal Nehru Technological Gurajada University,Vizianagaram.
                 I had compeleted diplamo in computer engineering at
                  Government Polytechnic,Srikakulam. 
              </div>
              <div className="about__info-p2">
                I am good at Android application development and freelancer of android development and Web development technologies. 
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
