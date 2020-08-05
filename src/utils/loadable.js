// 懒加载组件
import React from 'react';
import Loadable from 'react-loadable';

const loadingComponent =()=>{
    return (
        <div>
          <p>加载中...</p>
        </div>
    )
};

export default (loader,loading = loadingComponent)=>{
    return Loadable({
        loader,
        loading
    });
};
