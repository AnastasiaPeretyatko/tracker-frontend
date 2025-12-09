import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashScreen, useRouter } from 'expo-router';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { http } from '../api';

SplashScreen.preventAutoHideAsync();

type LoginRequest = {
  email: string;
  password: string;
};

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  isLoading: boolean;
  logIn: (data: LoginRequest) => Promise<void>;
  logOut: () => void;
};

const authStoreKey = 'auth-key';

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  isLoading: false,
  logIn: () => Promise.resolve(),
  logOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStoreKey, jsonValue);
    } catch (error) {
      console.log('Error saving', error);
    }
  };

  const logIn = async (data: LoginRequest) => {
    console.log('click');
    setIsLoading(true);
    try {
      const res = await http.post('/auth/login', data);

      if (res.data.token) {
        await AsyncStorage.setItem('token', res.data.token);
        setIsLoggedIn(true);
        storeAuthState({ isLoggedIn: true });
        router.push('/(protected)/(tabs)/home');
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    storeAuthState({ isLoggedIn: false });
    AsyncStorage.removeItem('token');
    router.push('/login');
  };

  useEffect(() => {
    const getAuthFromStorege = async () => {
      try {
        const value = await AsyncStorage.getItem(authStoreKey);
        if (value !== null) {
          const auth = JSON.parse(value);
          setIsLoggedIn(auth.isLoggedIn);
        }
      } catch (error) {
        console.log('Error fetching from storage', error);
      }

      setIsReady(true);
    };

    getAuthFromStorege();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isReady, logIn, logOut, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
