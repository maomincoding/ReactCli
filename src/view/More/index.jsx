import React, { Component } from 'react';
import styleMod from './css/index';

class More extends Component {
  render() {
    return (
      <div>
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
