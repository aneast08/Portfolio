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
        <p className='p-text'>I am a full-time Technical Specialist at Apple where I was promoted in six months for leadership and customer skills. Recent Computer Science graduate with a track record of developing and implementing software applications, using Agile methodologies and cutting-edge technologies. Proven experience in web development using React, NodeJS, and SQL, demonstrated through designing and building a website for NexusEdge. I am hoping to leverage this experience within the field of web development and Artificial Intelligence.</p>
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