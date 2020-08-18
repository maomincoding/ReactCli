// 路由配置
import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, More} from './routes'

const APPRouter = () =>(
        <div>
                <Route exact={true}  path="/" component={Home}/>
                <Route exact={true}  path="/about" component={About}/>
                <Route exact={true}  path="/more" component={More} />
        </div>
);

export default APPRouter;