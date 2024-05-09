import axios from 'axios';

async function makeRequest(url) {
  try {
    const request = await axios.get(url)
    console.log(Request)
    return request.data
  } catch(error) {
    throw error
  }
}

export default {makeRequest}