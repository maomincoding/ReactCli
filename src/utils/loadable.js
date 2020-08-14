// 懒加载组件
import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const loadingComponent = () => {
    return (
        <div> <Spin size="large" /></div>
    )
};

export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,
        loading
    });
};