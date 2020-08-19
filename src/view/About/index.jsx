import React, { useEffect} from 'react';
import styled from './css/index'

const About = ()=>{
  useEffect(() => {
    document.title = 'About';
  }, [])
    return (
          <div>
            <div className={styled.aboutTit}>
              This is the about page
            </div>
          </div>
      )
}

export default About
