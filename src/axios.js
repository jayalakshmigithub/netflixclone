import axios from 'axios'
import {baseURL} from './Keys/Key';
const instance = axios.create({
    baseURL: baseURL,
    
  });

  export default instance;