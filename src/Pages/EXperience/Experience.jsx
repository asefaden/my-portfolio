import React from 'react'
import './Experience.css'
import { motion as Motion } from 'framer-motion';
import asset from '../../assets/book.png'
const Experience = () => {
  return (
    <Motion.ul className='experience-container'
    initial={{opacity:0,y:100}}
      transition={{duration:2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
        <h1><img src={asset} alt="logo" className='experience-logo'/>Work Experience</h1>
        <div className='experience'>
            <h2>Internship at Raya University<span>September 2021 - November 2021</span></h2>
            <p>
                Developed and maintained web applications using content Management System(wordpress).
            </p>
            <ul>
               <li>Develop Student Management System.</li>
                <li>Conducted code reviews and provided mentorship to junior developers.</li>
                <li>Created RESTful APIs using Node.js and Express</li>
                <li>Designed and managed databases with MongoDB and PostgreSQL</li>
                <li>Deployed applications on AWS and Heroku</li>
            </ul>
            <p>Technology Used: <span>React, Node.js, Express, MongoDB, PostgreSQL, AWS, Heroku</span></p>
           
        </div>
        <div className='experience'>
            <h2>NAYU international trading PLC<span>Jul 21 2013 to May 15</span></h2>
            <p>
                 Responsible for administrating local area network, troubleshoot pc and office machine,
installing OS and efficient customer support
            </p>
           
        </div>
        
        <div className='experience'>
            <h2>System Administrator At HDM Tech Trading<span>Aug 2023 - Present</span></h2>
            <p>
                Developed and maintained web applications using React and Node.js.
                Collaborated with cross-functional teams to define, design, and ship new features.
                Improved application performance through code optimization and refactoring.
            </p>
            <ul>
               <li> Monitored  and upgrade on system performance and troubleshooted issues.</li>	
<li> Monitored and managed the main dashboard of the system.</li>	
<li> Responded to user inquiries and provided technical support.</li>	
<li> Managed the won, lost, cancelled and open games.</li>	
<li> Analyzed payouts, stakes, bets and refunds.</li>
<li> Analyzed overall cash flow including cash in, cash out, and net profit.</li>	
<li> Resolved and maintained problems of the System.</li>
<li> Managed cancellations effectively.</li>	
<li>Conducted regular system updates and patches.</li>
 <li>Monitored system performance and resolved issues.</li>
            </ul>
            <p>Technology Used: <span>React, Node.js, Express,Django, MongoDB, AWS, Heroku, Anydesk, TeamViewer</span></p>
           
        </div>
        <h1>Work Experience</h1>
        <div className='experience'>
            <h2>Education<span>November 10, 2018 - june 28, 2021</span></h2>
            <p>
                Bachelor of Science in Software Engineering, University of Debre Berhan. </p>
                <span>Graduated: June 28, 2021</span>
            
           
        </div>
    </Motion.ul>
  )
}

export default Experience;
