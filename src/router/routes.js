import loadable from '../utils/loadable';

export const Home = loadable(() => import(/* webpackChunkName:"homeMod" */'../view/Home/index'));
export const About = loadable(() => import(/* webpackChunkName:"aboutMod" */'../view/About/index'));
export const More = loadable(() => import(/* webpackChunkName:"moreMod" */'../view/More/index'));