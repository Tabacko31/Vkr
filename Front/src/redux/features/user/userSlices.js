import { loginApi, signupApi } from '../../../api/api';
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    token:''
  },
  reducers: {
    login: (state, action) => {
    state.token=action.payload
    },
    signup: (state, action) => {
      state.token=action.payload
    }
  },
});

const { login,signup } = userSlice.actions;

export const loginFunc = (user) => async (dispatch) => {
  const newUser = await loginApi(user);
  console.log(newUser)
  dispatch(login(newUser.data.token));
};
export const signupFunc = (user) => async (dispatch) => {
  const newUser = await signupApi(user);
  console.log(newUser)
  localStorage.setItem('token',newUser.data.token)
  dispatch(signup(newUser.data.token));
};


export default userSlice.reducer;