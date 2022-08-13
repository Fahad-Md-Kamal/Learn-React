import { createSlice, configureStore } from "@reduxjs/toolkit";

const InitalCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: InitalCounterState,
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

const InitalAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: InitalAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  }
})

const store = configureStore({
  reducer: { 
    counter: counterSlice.reducer, 
    auth: authSlice.reducer 
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
