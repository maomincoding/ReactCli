import React,{Component} from 'react';
import Navbar from '../../component/navbar'
import styled from './css/index'

class About extends Component {
  render(){
      return (
          <div>
          <Navbar></Navbar>
            <div className={styled.aboutTit}>
              This is the about page
            </div>
          </div>
      )
  }
  componentDidMount(){
    document.title = 'About';
  }
}

export default About
