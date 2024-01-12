import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    showModal: false,
  },
  reducers: {
    ModalAction: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { ModalAction } = userSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer;
