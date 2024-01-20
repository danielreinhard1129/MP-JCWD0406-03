<<<<<<< HEAD
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

=======
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  id: number | null;
  email: String;
  role: RoleSate | string;
}

type RoleSate = {
    id: number | null;
    name: string;
    userId: number | null;
}

const dataUser: UserState = {
  id: null,
  email: '',
  role: {
    id: null,
    name: '',
    userId: null
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    showModalRegister: false,
    showModalLogin: false,
    showModalForgotPassword: false,
    dataUser,
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

    AuthAction: (state, action: PayloadAction<UserState>) => {
      state.dataUser.id = action.payload.id;
      state.dataUser.email = action.payload.email;
      state.dataUser.role = action.payload.role;
    },

    LogoutAction: (state) => {
      state.dataUser.id = null;
      localStorage.removeItem('token');
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

>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
export default userSlice.reducer;
