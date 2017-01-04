import axios from 'axios';
//axios 用法：
//https://www.npmjs.com/package/axios
var api = axios.create({
  baseURL: 'https://api.laoshi123.com/',
  timeout: 5000,
  withCredentials:false
});
export default api;