import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};
export const calcSlice = createSlice({
  name: "caclculation",
  initialState,
  reducers: {
    add: (state, action) => {
      state.result =
        Number(action.payload.firstNumber) +
        Number(action.payload.secondNumber);
    },
    substract: (state, action) => {
      state.result =
        Number(action.payload.firstNumber) -
        Number(action.payload.secondNumber);
    },
    multiply: (state, action) => {
      state.result =
        Number(action.payload.firstNumber) *
        Number(action.payload.secondNumber);
    },
    divide: (state, action) => {
      state.result =
        Number(action.payload.firstNumber) /
        Number(action.payload.secondNumber);
    },
  },
});

export const { add, substract, multiply, divide } = calcSlice.actions;
export default calcSlice.reducer;
