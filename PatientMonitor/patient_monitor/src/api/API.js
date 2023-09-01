import axios from 'axios';

const API_BASE_URL = 'https://ide-cecdcfabfcfbbebeafcdfabeecadbeabeefbbfeeecacecfa.premiumproject.examly.io/proxy/8081'; // Replace with your API base URL

export const fetchPatients = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patients`);
    return response.data;
  } catch (error) {
    // Handle error here, e.g., log or show an error message
    console.error('Error fetching patients:', error);
    return [];
  }
};

export const createPatient = async (newPatient) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/patients`, newPatient);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error creating patient:', error);
    throw error;
  }
};

export const updatePatient = async (patientId, updatedPatient) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/patients/${patientId}`, updatedPatient);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error updating patient:', error);
    throw error;
  }
};

export const deletePatient = async (patientId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/patients/${patientId}`);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error deleting patient:', error);
    throw error;
  }
};

// You can also add the threshold related methods here if needed

export const fetchThreshold = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/threshold`);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error fetching threshold data:', error);
    return [];
  }
};
export const updateThreshold = async (thresholdData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/threshold`, thresholdData);
    return response.data;
  } catch (error) {
    console.error('Error updating threshold values:', error);
    throw error;
  }
};
