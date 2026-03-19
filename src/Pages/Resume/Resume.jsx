import React from 'react'
import './Resume.css'
import { motion } from 'framer-motion';
import asset from '../../assets/book.png'
const Resume = () => {
  return (
    <div className='resume'>
        <h1><img src={asset} alt="logo"/> Education</h1>
        <motion.ul className='education'
        initial={{opacity:0,x:100}}
      transition={{duration:2}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}>
        <li><h2>University of Debre Berhan</h2>
        <time>2018 -2023 </time> BSc. in Software Engineering, Debre Berhan University</li>
        <li><h2>Preparatory College</h2><time>2016-2018 </time>Biruh Tesfa, North Tigray Region</li>
        <li><h2>High School</h2><time>2014-2015</time>Korem High School, Korem Primary School.</li>
        <li><h2>Primary School</h2><time>2005-2013</time> Primary School, Falla Elementary School</li>
        </motion.ul>   
        <h1><img src={asset} alt="logo"/> Certifications</h1>
        <motion.ul className='certifications'
        initial={{opacity:0,x:-100}}
      transition={{duration:2}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}>
        <li><h2>Raya University internship</h2>Coursera, Issued September 2021 </li>
        <li><h2>Nayu International Trading Certificate</h2>Coursera, Issued Aug 2021 -June 2023 </li>
        <li><h2>HDM Tech Trading Certificate</h2>Coursera, Issued Aug 2023 - No Expiration Date</li>
        </motion.ul>
        <h1><img src={asset} alt="logo"/> Languages</h1>
        <motion.ul className='languages'
        initial={{opacity:0,x:100}}
      transition={{duration:2}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}>
        <li>Amharic (Native)</li>
        <li>English (Fluent)</li>
        <li>Tigrigna (Native)</li>
        <li>Afaan Oromo (Beginner)</li>
        </motion.ul>
        <h1> <img src={asset} alt="logo"/> Interests</h1>
        <motion.ul className='interests'
        initial={{opacity:0,x:-100}}
      transition={{duration:2}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}>
        <li>Web Development</li>
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>Data Science</li>
        </motion.ul>
         </div>
  )
}

export default Resume
