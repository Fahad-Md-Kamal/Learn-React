import { createSlice, configureStore } from "@reduxjs/toolkit";

const InitalState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: InitalState,
  reducers: {
    increament(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

counterSlice.actions.toggleCounter();

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;
