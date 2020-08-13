import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import styled from './css/index';


class Home extends Component {
  render(){
      return (
          <div className={styled.container}>
              <div className={styled.home}>
                Hello ReactCli
              </div>
              <div className={styled.logo}>
               
              </div>
              <div className={styled.link}>
                <Link to={"/about/"}>About</Link>
                <Link to={"/more/"}>More</Link>
              </div>
              <div className={styled.tip}>
                <p className={styled.tips}>This is a plug and play react scaffold.</p>
                <p className={styled.tips}>You can use it to build projects very quickly.</p>
              </div>
          </div>
      )
  }
}

export default Home
