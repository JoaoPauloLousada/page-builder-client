import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IBComponentObject from "../../components/bootstrap/interfaces/IBComponentObject";
import { remove, add } from "./helper";

interface IComponentsState {
  components: Array<IBComponentObject>;
}

const INITIAL_STATE: IComponentsState = {
  components: [],
};

const componentsSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    updateComponents(state, action: PayloadAction<IBComponentObject>) {
      state.components = add(state.components, action.payload);
    },
    removeComponent(state, action: PayloadAction<string>) {
      state.components = remove(state.components, action.payload);
    },
  },
});

export const { updateComponents, removeComponent } = componentsSlice.actions;

export default componentsSlice.reducer;
