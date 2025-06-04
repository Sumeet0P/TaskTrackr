import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types'; // Adjust the import path as needed
const TASKS_KEY = 'tasks';

export const saveTasks = async (tasks: Task[]) => {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Error saving tasks', e);
  }
};

export const loadTasks = async (): Promise<Task[]> => {
  try {
    const stored = await AsyncStorage.getItem(TASKS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Error loading tasks', e);
    return [];
  }
};
