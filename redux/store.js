import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./features/poductsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
