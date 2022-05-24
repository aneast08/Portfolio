import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

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
        <p className='p-text'>I am a senior at the University of Colorado boulder majoring in Computer Science with a minor in Astronomy. I hope to apply my technical skills to the rocketry or climate industry in hopes to further human exploration and survival. </p>
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
  'about',
  "app__whitebg"
);