import React,{Component} from 'react';
import styled from './css/index';
import logo from '../../assets/images/logo.png'
class Home extends Component {
  render(){
      return (
          <div>
              <div className={styled.home}>
                Hello ReactCli
              </div>
              <div className={styled.logo}>
                <img src={logo} alt=""/>
              </div>
          </div>
      )
  }
}

export default Home
