import axios from 'axios';
import { url } from './url';

const getAllPapers = async () => {
  const res = await axios.get(`${url}/api/papers/`);
  return res;
};

const exportObject = {
  getAllPapers
};

export default exportObject;
