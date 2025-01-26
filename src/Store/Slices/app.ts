import { AppReducer } from "Types/slices";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppReducer = {
  showHeader: false,
  tab: 0,
  subRoutes: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShowHeader(state, action: PayloadAction<boolean>) {
      state.showHeader = action.payload;
    },
    setTab(state, action: PayloadAction<number>) {
      state.tab = action.payload;
    },
    setSubRoutes(state, action: PayloadAction<boolean>) {
      state.subRoutes = action.payload;
    },
  },
});

export default app.reducer;

export const { setShowHeader, setTab, setSubRoutes } = app.actions;
