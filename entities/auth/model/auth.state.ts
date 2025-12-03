import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { API_AUTH } from '../api/auth.service';
import { http } from '../../../shared/api';
import { AuthState, LoginRequest, LoginResponse } from '../types';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage<AuthState>(
  'auth',
  {
    token: null,
    isLoading: false,
    error: null,
  },
  storage,
);

export const loginAtom = atom(
  (get) => get(authAtom),
  async (_get, set, { email, password }: LoginRequest) => {
    set(authAtom, (prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const { data } = await http.post<LoginResponse>(API_AUTH.LOGIN, { email, password });

      set(authAtom, {
        token: data.token,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set(authAtom, {
        token: null,
        isLoading: false,
        error: (error as Error).message,
      });
    }
  },
);




