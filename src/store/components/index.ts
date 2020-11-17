import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IBComponentObject from "../../bootstrap-module/components/bootstrap/interfaces/IBComponentObject";
import { remove, add, getComponent } from "./helper";

interface IComponentsState {
  components: Array<IBComponentObject>;
  selectedComponent: string;
}

const INITIAL_STATE: IComponentsState = {
  components: [],
  selectedComponent: "",
};

const componentsSlice = createSlice({
  name: "components",
  initialState: INITIAL_STATE,
  reducers: {
    updateComponents(state, action: PayloadAction<IBComponentObject>) {
      state.components = add(state.components, action.payload);
    },
    removeComponent(state, action: PayloadAction<string>) {
      state.components = remove(state.components, action.payload);
    },
    updateSelectedComponent(state, action: PayloadAction<string>) {
      state.selectedComponent = action.payload;
    },
    updateComponentProperty(
      state,
      action: PayloadAction<{
        componentId: string;
        propertyName: string;
        propertyValue: string;
      }>
    ) {
      const component = getComponent(
        state.components,
        action.payload.componentId
      );
      component.properties[action.payload.propertyName].value =
        action.payload.propertyValue;
    },
  },
});

export const {
  updateComponents,
  removeComponent,
  updateSelectedComponent,
  updateComponentProperty,
} = componentsSlice.actions;

export default componentsSlice.reducer;
