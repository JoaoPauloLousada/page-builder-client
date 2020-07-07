import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IBComponentObject from "../../components/bootstrap/interfaces/IBComponentObject";
import { remove } from "./helper";

interface IComponentsState {
  components: Array<IBComponentObject>;
}

const INITIAL_STATE: IComponentsState = {
  components: [],
};

const findParent = (
  component: IBComponentObject,
  action: PayloadAction<IBComponentObject>
) => {
  if (component.id === action.payload.parentId) {
    if (component.children) component.children.push(action.payload);
    else component.children = [action.payload];
    return true;
  }
  if (component.children && component.children.length > 0) {
    for (const comp of component.children) {
      if (findParent(comp, action)) return true;
    }
  }
  return false;
};

const componentsSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    updateComponents(state, action: PayloadAction<IBComponentObject>) {
      if (action.payload.parentId === "CANVAS") {
        state.components = [...state.components, action.payload];
        return;
      }
      for (const component of state.components) {
        if (findParent(component, action)) return;
      }
    },
    removeComponent(state, action: PayloadAction<string>) {
      state.components = remove(state.components, action.payload);
    },
  },
});

export const { updateComponents, removeComponent } = componentsSlice.actions;

export default componentsSlice.reducer;
