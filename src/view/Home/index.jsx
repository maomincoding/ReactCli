import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import styled from './css/index';
import logo from "../../assets/images/logo.jpg";

class Home extends Component {
  render(){
      return (
          <div className={styled.container}>
              <div className={styled.home}>
                Hello ReactCli
              </div>
              <div className={styled.logo}>
                  <img src={logo} alt="" />
              </div>
              <div className={styled.tip}>
                <p className={styled.tips}>This is a plug and play react scaffold.</p>
                <p className={styled.tips}>You can use it to build projects very quickly.</p>
              </div>
          </div>
      )
  }
  componentDidMount() {
    document.title = 'ReactCli';
  }
}

export default Home
