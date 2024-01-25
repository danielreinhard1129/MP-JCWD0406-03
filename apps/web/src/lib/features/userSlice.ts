import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  id: number | null;
  firstName: string;
  lastName: string;
  email: String;
  role: RoleSate ;
}

interface RoleSate {
    id: number | null;
    name: string;
    userId: number | null;
}

const dataUser: UserState = {
  id: null,
  firstName: '',
  lastName: '',
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
      state.dataUser.firstName = action.payload.firstName;
      state.dataUser.lastName = action.payload.lastName;
      state.dataUser.email = action.payload.email;
      state.dataUser.role = action.payload.role;
    },

    LogoutAction: (state) => {
      state.dataUser.role.id = null;
      state.dataUser.id = null;
      state.dataUser.role.name = ''
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

export default userSlice.reducer;
