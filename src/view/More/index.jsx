import React, { Component } from 'react';
import Navbar from '../../component/navbar/index';
import styleMod from './css/index';

class More extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className={styleMod.moreTit}>
          This is the more page
        </div>
      </div>
    )
  }
  componentDidMount() {
    document.title = 'More';
  }
}

export default More
