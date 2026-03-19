import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import assets from "../../assets/profile.jpg";
const About = () => {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
      transition={{duration:2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="about-container"
    >
      <div className="about-header">
        <img src={assets} alt="logo" className="about-logo" />
        <p>
          <h2>Assefa Demeke</h2>
          <span>
            Full-Stack Developer | Web Developer | Mobile Developer
          </span>
        </p>
        <p></p>
        
      </div>
      <div className="about">
        <h1>About Me</h1>
        <p>
          Hey! I'm a full-stack developer who loves building things that
          actually make a difference. I work on both web and mobile stuff, and I
          enjoy jumping between frontend and backend—whether it's making a slick
          UI or setting up a solid backend system. Lately, I've been diving into
          everything from DevOps to AI agents. I'm always experimenting with new
          tools, building projects, and sharing what I learn along the way.
          Basically, if there's an idea worth building, I'm all in.<br></br>I am
          Passionate, dedicated an energetic graduate and eager with a job and
          committed to accomplish all duties interested to be honesty and
          responsibility. I would love to help your organization/company to
          receive its mission of making healthy produce as available as takeout
          in highly numerate computer literature, ensuring increase teammate and
          am able to learn and adapt quickly to new idea.
        </p>
      </div>
      <motion.div className="about-contact"
      initial={{opacity:0,x:200}}
      transition={{duration:2.5}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}>
        <a
          href="https://github.com/asefaden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/assefa-demeke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          LinkedIn
        </a>
        <a  href="https://mailto:assede1122@gmail.com" target="_blank"
          rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" />
          Gmail </a>
        <a href="https://x.com/ASSEFADEME24410" target="_blank"
          rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
          Twitter </a>
      </motion.div>
    </motion.div>
  );
};

export default About;
