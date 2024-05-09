import axios from 'axios'

const url = '/api/contacts';

const getAllContacts = async () => {
  try {
    const request = await axios.get(url);
    return request.data;
  } catch(error) {
    throw error
  }
}

const createContact = async (newContact) => {
  try {
    const request = await axios.post(url, newContact);
    return request.data;
  } catch(error) {
    throw error
  }
}

const updateContact = async (updatedContact) => {
  try {
    const request = await axios.put(`${url}/${updatedContact.id}`, updatedContact);
    return request.data
  } catch(error) {
    throw error
  }
}

const deleteContact = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return true;
  } catch(error) {
    throw error
  }
}

export default {getAllContacts, createContact, updateContact, deleteContact}