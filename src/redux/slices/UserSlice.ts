import { createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  phone: string;
  role: string
  balance: object;
}

interface UserState {
  user: User | null;
  isAuth: boolean;
  isLoading: boolean
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  isLoading: true,
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
   setIsLoading: (state, action) => {
    state.isLoading = action.payload;
  },
  },
});

export const { setUser, setIsAuth, setIsLoading } = UserSlice.actions;

export default UserSlice.reducer;
