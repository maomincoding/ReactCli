import loadable from '../utils/loadable';

export const Home = loadable(() => import(/* webpackChunkName:"home" */'../view/Home/index'));
export const About = loadable(() => import(/* webpackChunkName:"about" */'../view/About/index'));
export const More = loadable(() => import(/* webpackChunkName:"more" */'../view/More/index'));