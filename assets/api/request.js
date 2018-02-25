import axios from 'axios'
export const baseURL ="https://jsonplaceholder.typicode.com"
const api = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
export default  api;
