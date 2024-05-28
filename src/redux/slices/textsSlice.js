import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  texts: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};

const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.texts = [...state.texts, action.payload];
    },
  },
});

export const { addText } = textsSlice.actions;
export default textsSlice.reducer;
