// 路由配置
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../store/index';
import asyncComponent from '../utils/asyncComponent'

const Home = asyncComponent(() => import('../view/Home/index.jsx'))
const About = asyncComponent(() => import('../view/About/index'))
const More = asyncComponent(() => import('../view/More/index'))


const APPRouter = () =>(
        <div>
            <Router>
                <div>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/about" component={About}/>
                <Route exact={true} path="/more" component={More} />
                </div>
            </Router>
        </div>
);

export default APPRouter;