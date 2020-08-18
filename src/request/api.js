// 接口地址
import { get, post } from './http';
// get格式
export const homeData = g => get('/api/home.json', g); //获取home列表数据
// post格式
export const postData = g => post('', g); 