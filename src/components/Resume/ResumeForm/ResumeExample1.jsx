import React from "react";
import "./firsttemp.css";

const ResumeExample1 = () => {
  return (
    <>
      <div className="container">
        <div className="left_Side">
          <div className="profileText">
            <div className="imgBx">
              <img src="/images/temp 3.webp" alt="Profile" />
            </div>
            <h2>
              Muhammed Irshad <br />
              <span>Web Developer</span>
            </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title"> Contact Info</h3>
            <ul>
              <li>
                <span className="icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span className="text">+1 234 5678 900</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <span className="text">john_doe@email.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </span>
                <span className="text">www.mywebsite.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span className="text">www.linkedin.com/me</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span className="text">Patna, Bihar,India</span>
              </li>
            </ul>
          </div>
          <div className="contactInfo education">
            <h3 className="title">Education</h3>
            <ul>
              <li>
                <h5>2010 - 2013</h5>
                <h4>Master Degree in Computer Science</h4>
                <h4>University Name</h4>
              </li>
              <li>
                <h5>2007 - 2010</h5>
                <h4>Bachelor Degree in Computer Science</h4>
                <h4>University Name</h4>
              </li>
              <li>
                <h5>1997 - 2007</h5>
                <h4>Matriculation</h4>
                <h4>University Name</h4>
              </li>
            </ul>
          </div>
          <div className="contactInfo language">
            <h3 className="title">Languages</h3>
            <ul>
              <li>
                <span className="text">English</span>
                <span className="percent">
                  <div style={{ width: "100%" }}></div>
                </span>
              </li>
              <li>
                <span className="text">Spanish</span>
                <span className="percent">
                  <div style={{ width: "70%" }}></div>
                </span>
              </li>
              <li>
                <span className="text">Hindi</span>
                <span className="percent">
                  <div style={{ width: "100%" }}></div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_Side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
              pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
              ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
              dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
              metus
            </p>
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2019 - Present</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>UX/UI Designer</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year_company">
                <h5>2014 - 2016</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Junior UX Designer</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="about skills">
            <h2 className="title2">Professional Skills</h2>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent">
                <div style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="box">
              <h4>Javascript</h4>
              <div className="percent">
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="box">
              <h4>Photoshop</h4>
              <div className="percent">
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="box">
              <h4>Html</h4>
              <div className="percent">
                <div style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
          <div className="about interest">
            <h2 className="title2">Interest</h2>
            <ul>
              <li>
                <i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
              </li>
              <li>
                <i className="fa fa-microphone" aria-hidden="true"></i> Singing
              </li>
              <li>
                <i className="fa fa-book" aria-hidden="true"></i> Reading
              </li>
              <li>
                <i className="fa fa-cutlery" aria-hidden="true"></i> Cooking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeExample1;
