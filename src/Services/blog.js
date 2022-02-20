import axios from 'axios';
import { url } from './url';

const getAllBlogs = async () => {
  const res = await axios.get(`${url}/api/blog/`);
  return res;
};

const exportObject = {
  getAllBlogs
};

export default exportObject;
