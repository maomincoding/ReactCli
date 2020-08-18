import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/index';
import Navbar from './component/navbar/index'


class App extends Component {
  render(){
      return (
          <div>
          <BrowserRouter>
            <Navbar></Navbar>
            <Router/>
          </BrowserRouter>
          </div>
      )
  }
}

export default App
