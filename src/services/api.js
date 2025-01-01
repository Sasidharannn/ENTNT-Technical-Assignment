import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getCompanies = () => api.get('/companies');
export const addCompany = (company) => api.post('/companies', company);

export default api;
