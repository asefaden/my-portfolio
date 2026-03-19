import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import asset from "../../assets/github.png";
const Projects = () => {
  return (
    <motion.div className="project"
    initial={{opacity:0,y:200}}
      transition={{duration:2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
      <nav className="project1">
        <h1>Web Applications</h1>
        <div className="project-list1">
          <h2>Tour Guide Application</h2>
          <a
            href="https://github.com/asefaden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={asset} alt="logo" className="project-logo" />
          </a>
          <p>
            A Web-based Tour Guide Application that provides users with
            information about various tourist destinations, attractions, and
            activities.
            <br />
            It offers features such as itinerary planning, booking options, and
            user reviews to enhance the travel experience.
            <br />
            <br />
            <span>Typescript</span>
            <span>Nodemailer</span>
            <span>React</span>
            <span>Nodejs</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>NGINX</span>
            <span>AWS</span>
          </p>
        </div>
        <div className="project-list2">
          <h2>Pharmacy Management System</h2>
          <a
            href="https://github.com/asefaden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={asset} alt="logo" className="project-logo" />
          </a>
          <p>
            A Web-based Pharmacy Management System that allows users to
            efficiently manage pharmacy operations, including inventory
            management, sales tracking, and customer management.
            <br />
            It offers features such as prescription management, billing, and
            reporting to streamline pharmacy workflows.
            <br />
            <span>Typescript</span>
            <span>Nodemailer</span>
            <span>React</span>
            <span>Nodejs</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>NGINX</span>
            <span>AWS</span>
          </p>
        </div>
      </nav>
      <div className="project2">
        <h1>Mobile Applications</h1>
        <div className="project-list1">
          <h2>Chat App</h2>
          <a
            href="https://github.com/asefaden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={asset} alt="" className="project-logo" />
          </a>
          <p>
            A social Networking platform for people who like building things and
            sharing with others. with the functionality of creating posts,
            comments, likes, and follows. creating projects, posting update for
            projects, leader board like product hunt and a lot more.
            <br />
            <span>Typescript</span>
            <span>Nodemailer</span>
            <span>React</span>
            <span>Nodejs</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>NGINX</span>
            <span>AWS</span>
          </p>
        </div>
      </div>
      <div className="project3">
        <h1>Payment Gateway</h1>
        <div className="project-list2">
          <h2>Payment Gateway</h2>
          <a
            href="https://github.com/asefaden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={asset} alt="logo" className="project-logo" />
          </a>
          <p>
            A Mobile Payment Gateway Application that enables users to make
            secure and convenient payments using their mobile devices.
            <br />
            It offers features such as mobile wallet integration, QR code
            payments.
            <br />
            <span>Typescript</span>
            <span>Nodemailer</span>
            <span>React</span>
            <span>Nodejs</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>NGINX</span>
            <span>AWS</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
