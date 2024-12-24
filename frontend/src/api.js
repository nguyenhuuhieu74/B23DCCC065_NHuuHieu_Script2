import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getPolls = () => api.get('/polls');
export const createPoll = (title) => api.post('/polls', { title });
export const getOptions = (pollId) => api.get(`/options/${pollId}`);
export const createOption = (pollId, optionText) => api.post('/options', { pollId, optionText });
export const voteOption = (optionId) => api.post(`/options/vote/${optionId}`);
