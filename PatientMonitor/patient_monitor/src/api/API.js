// api.js

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
