import { createSlice } from '@reduxjs/toolkit';


const data =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user') as string)
    : null;

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    showModalRegister: false,
    showModalLogin: false,
    showModalForgotPassword: false,
    dataUser: data,
  },
  reducers: {
    ModalRegisterAction: (state, action) => {
      state.showModalRegister = action.payload;
    },
    ModalLoginAction: (state, action) => {
      state.showModalLogin = action.payload;
    },
    ModalForgotPasswordAction: (state, action) => {
      state.showModalForgotPassword = action.payload;
    },

    AuthAction: (state, action) => {
      state.dataUser = action.payload;
    },

    LogoutAction: (state) => {
      localStorage.removeItem('user');
      state.dataUser = null;
    },
  },
});
export const {
  ModalRegisterAction,
  ModalLoginAction,
  ModalForgotPasswordAction,
  AuthAction,
  LogoutAction,
} = userSlice.actions;

export default userSlice.reducer;
