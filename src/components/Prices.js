import React from "react";
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "My Projects",
    text:
      "I had done this projects to improve and explore my skills in various domains in Software Technology.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Feedback System App",
      subHeading: "Skills I learn",
      msg1: "Feedback system app can be used to give the feedbacks.\
      Actually i have done this project for my college faculty feedback.",
      msg2:"Java",
      msg3:"XML",
      msg4:"Firebase",
      msg5:"UI Designing",
      href:"https://github.com/iammahesh123/JntuvFeedbackSystem"
    },
    {
      id: 2,
      heading: "Standard",
      subHeading: "Skills I learn",
      msg1: "5GB Storage Space",
      msg2: "20GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "100 Email Account",
      msg5: "10 Free Domain Names",
      href:""
    },
    {
      id: 3,
      heading: "Premium",
      price: 160,
      msg1: "5GB Storage Space",
      msg2: "20GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "100 Email Account",
      msg5: "10 Free Domain Names",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <Fade bottom>
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        </Fade>
        <Fade bottom>
        <div className="row">

            <div className="col-4" >
              <div className="price">
                <div className="priceHeading">Feedback System App</div>
                <div className="price__rs">
                  Learnt
                </div>
                <ul>
                  <li>Feedback system app can be used to give the feedbacks.
      Actually i have done this project for my college faculty feedback.
      </li>
                  <li>Java</li>
                  <li>Xml</li>
                  <li>Firebase</li>
                  <li>Firebase Realtime Database</li>
                </ul>
                <div className="price__btn">
                  <a href="https://github.com/iammahesh123/JntuvFeedbackSystem" className="btn btn-outline">
                   Project Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4" >
              <div className="price">
                <div className="priceHeading">Simple Authentication App</div>
                <div className="price__rs">
                  Learnt
                </div>
                <ul>
                  <li>This app can be used to authenticate
      the app via login with Email and password/OTP Authentication.</li>
                  <li>Email Authentication</li>
                  <li>OTP Authentication</li>
                  <li>Firebase</li>
                  <li>UI Designing</li>
                </ul>
                <div className="price__btn">
                  <a href="https://github.com/iammahesh123/Android-Application" className="btn btn-outline">
                   Project Link
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4" >
              <div className="price">
                <div className="priceHeading">Image Objects Detection Using OpenCv</div>
                <div className="price__rs">
                  Learnt
                </div>
                <ul>
                  <li>Image Objects Detection is a mini-project of machine learning that can be used to find out the object in GUI image.</li>
                  <li>Python</li>
                  <li>YOLO Algorthim</li>
                  <li>Conventional Neural Networks
                  </li>
                  <li>Numpy</li>
                  <li>OpenCv</li>
                </ul>
                <div className="price__btn">
                  <a href="https://github.com/iammahesh123/Image-Object-Detection-using-openCV-with-Machine-Learning" className="btn btn-outline">
                   Project Link
                  </a>
                </div>
              </div>
            </div>

        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Prices;
