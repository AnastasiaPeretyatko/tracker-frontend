import { http } from '@/shared/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { atom } from 'jotai/vanilla';

interface TaskState {
  tasks: ITask[];
  isLoading: boolean;
  error: string | null;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const storage = createJSONStorage<TaskState>(() => AsyncStorage);

export const taskAtom = atomWithStorage<TaskState>(
  'tasks',
  {
    tasks: [],
    isLoading: false,
    error: null,
  },
  storage,
);

export const tasksAtomWithFetch = atom(
  (get) => get(taskAtom),
  async (get, set) => {
    set(taskAtom, (prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const { data } = await http.get('/tasks/all');
      set(taskAtom, (prev) => ({
        ...prev,
        tasks: data,
      }));
    } catch (error) {
      console.log({ error });
    }

    set(taskAtom, (prev) => ({
      ...prev,
      isLoading: false,
    }));
  },
);
