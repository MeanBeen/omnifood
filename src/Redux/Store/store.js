import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "../Slice/FoodSlice";
import foodsSaga from "../Saga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    foods: foodsReducer,
  },
  middleware: () => [saga],
});

saga.run(foodsSaga);
