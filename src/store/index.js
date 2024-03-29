// import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit"; //when use redux toolkit

const initialCounterState = { counter: 0, showCounter: true };

const initialAuthState = { isAuthenticated: false };
//code of simple redux toolkit {

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //as we know in redux we shouldn't directly chnage/mutate value of state we only over write. but in redux toolkit there is built in library which over write but write code like we are changing value of state directly
    },
    decrement(state) {
      state.counter--;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload; //must write payload here
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

//code of redux toolkit }

//code of simple redux {
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increment5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

//code of simple redux }


const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth:authSlice.reducer}
});

export const counterActions = counterSlice.actions;

export const  authActions= authSlice.actions;

export default store;
