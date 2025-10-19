import axios from 'axios';
import { Task } from '../types/Task';

const API_BASE_URL = 'http://localhost:8080/tasks';

export const taskService = {
  getAllTasks: async (): Promise<Task[]> => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  },

  getTaskById: async (id: string): Promise<Task> => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  },

  createTask: async (task: Task): Promise<Task> => {
    const response = await axios.post(API_BASE_URL, task);
    return response.data;
  },

  updateTask: async (id: string, task: Task): Promise<Task> => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, task);
    return response.data;
  },

  deleteTask: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
  },

  searchTasks: async (name: string): Promise<Task[]> => {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { name }
    });
    return response.data;
  },

  executeTask: async (id: string): Promise<Task> => {
    const response = await axios.put(`${API_BASE_URL}/${id}/execute`);
    return response.data;
  }
};
