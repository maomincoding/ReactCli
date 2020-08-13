import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import logo from '../../assets/images/logo.jpg'
class About extends Component {
  render(){
      return (
          <div>
          这是About页
          <Button>333</Button>
          <img src={logo} alt="" />
          </div>
      )
  }
}

export default About
