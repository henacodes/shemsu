import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = " https://api.escuelajs.co/api/v1";

const initialState = {
  list: [],
  productsLoading: false,
  productsFetchError: null,
  categories: [],
  categoriesLoading: false,
  categoriesFetchError: null,
  product: {},
  productLoading: false,
  productFetchError: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await axios.get(
        `${API_URL}/products/?price_min=100&price_max=200`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //FETCH PRODUCTS
    [fetchProducts.pending]: (state, action) => {
      console.log("products loading");
      state.productsLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      console.log("Rquest Fulfill");
      state.productsLoading = false;
      state.list = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      console.log("products error");
      state.productsLoading = false;
      state.productsFetchError = action.payload;
    },
  },
});

export default productsSlice.reducer;
