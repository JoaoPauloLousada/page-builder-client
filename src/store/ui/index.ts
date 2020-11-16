import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUiState {
  hasModalOpen: boolean; // EXAMPLE
  isEditMode: boolean;
}

const INITIAL_STATE: IUiState = {
  hasModalOpen: false,
  isEditMode: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    setHasModalOpen(state, action: PayloadAction<boolean>) {
      state.hasModalOpen = action.payload;
    },
  },
});

export const { setHasModalOpen } = uiSlice.actions;

export default uiSlice.reducer;
