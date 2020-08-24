import { IPage } from "./../../app/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removePage as remove, createPage as createNewPage } from "./helper";

interface IPagesState {
  activePage: string;
  allPages: Array<IPage>;
}

const INITIAL_STATE: IPagesState = {
  activePage: "",
  allPages: [],
};

const pagesSlice = createSlice({
  name: "pages",
  initialState: INITIAL_STATE,
  reducers: {
    setActivePage(state, action: PayloadAction<string>) {
      state.activePage = action.payload;
    },
    addPage(state, action: PayloadAction<IPage>) {
      state.allPages.push(action.payload);
    },
    removePage(state, action: PayloadAction<string>) {
      remove(state.allPages, action.payload);
    },
    createPage(state, action: PayloadAction<string>) {
      state.allPages.push(createNewPage(action.payload));
    },
  },
});

export const { setActivePage } = pagesSlice.actions;

export default pagesSlice.reducer;
