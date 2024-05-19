import axios from 'axios';

const API_URL = 'https://localhost:7015/api/Contacts';

export const getContacts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getContact = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createContact = async (contact) => {
    const response = await axios.post(API_URL, contact);
    return response.data;
};

export const updateContact = async (id, contact) => {
    await axios.put(`${API_URL}/${id}`, contact);
};

export const deleteContact = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
