import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "slices/globalSlice";

import counterReducer from "../slices/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    global: globalReducer,
  },
});
