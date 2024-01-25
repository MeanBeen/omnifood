import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    isLoading: false,
  },
  reducers: {
    getFoodsFetch: (state) => {
      state.isLoading = true;
    },
    getFoodsSuccess: (state, action) => {
      state.foods = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getFoodsFetch, getFoodsSuccess } = foodSlice.actions;
export default foodSlice.reducer;
