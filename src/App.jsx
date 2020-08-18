import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/';
import Router from './router/index';
import Navbar from './component/navbar/index'


class App extends Component {
  render(){
      return (
          <div>
          <Provider store={store}>
          <BrowserRouter>
            <Navbar></Navbar>
            <Router/>
          </BrowserRouter>
          </Provider>
          </div>
      )
  }
}

export default App
