// 页面组件
import loadable from '../utils/loadable';

export const Home = loadable(()=> import('../view/Home/index.jsx'));
export const About = loadable(()=> import('../view/About/index.jsx'));
export const More = loadable(()=> import('../view/More/index.jsx'));