export interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string,
    name: string | null,
    email: string,
    createdAt: Date,
    updatedAt: Date
  }
}

export interface LoginRequest {
  email: string;
  password: string;
}