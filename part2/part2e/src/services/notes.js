import axios from 'axios';
const baseUrl = '/api/notes';

const getAll = async() => {
  try {
    const request = await axios.get(baseUrl);
    return request.data;
  } catch(error) {
    throw error
  }
}

const create = async(newObject) => {
  try {
    const request = await axios.post(baseUrl, newObject);
    return request.data;
  } catch(error) {
    throw error
  }
  
}

const update = async(id, newObject) => {
  try {
    const request = await axios.put(`${baseUrl}/${id}`, newObject)
  return request.data;
  } catch(error) {
    throw error
  }
}

export default {
  getAll,
  create,
  update,
}