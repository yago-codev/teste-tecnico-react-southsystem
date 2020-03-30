import axios from 'axios';

export const apiDragons = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1',
});

export const apiUsers = axios.create({
  baseURL: 'http://localhost:8080/users',
});
