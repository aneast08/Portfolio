import React, {useState, useEffect} from 'react';
// import {motion} from 'framer-motion';
import{images} from '../../constants';


import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import {urlFor, client} from '../../client';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) =>setAbouts(data))
  }, []);
  

  return (
    <>
      <h2 className="head-text">My <span> Goals </span></h2>
      
      <div className="app__profiles">
        <p className='p-text'>I am a senior at the University of Colorado Boulder majoring in Computer Science with a minor in Astronomy. My plan is to apply my technical skills to the rocketry or climate industry to help further human exploration and better the wellbeing of future generations. After a semester abroad I was fortunate to attend the Space Resources conference in Luxembourg where I learned about opportunities in the space and climate industries. This conference confirmed my interest in working in these areas.</p>
        <div className='app__profiles-img'>
          <img src={images.rocket} alt="rocket" className='app-profiles-img-rocket'/>
          <img src={images.earth} alt="earth" className='app-profiles-img-earth'/>
        </div>
        <a href="https://andrew-east-resume.tiiny.site/" className='app__profiles-btn app__flex p-text'>
          <button type="button" className='app__flex p-text'>Download my full resume here!</button>
        </a>
        {/* {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration: .5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))} */}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'goals',
  "app__whitebg"
);