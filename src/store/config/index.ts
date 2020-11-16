import { IConfigState } from "./../../app/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UIFrameworkEnum } from "../../app/enums";

const INITIAL_STATE: IConfigState = {
  UIFramework: UIFrameworkEnum.bootstrap,
};

const configSlice = createSlice({
  name: "config",
  initialState: INITIAL_STATE,
  reducers: {},
});

// export const { } = configSlice.actions;

export default configSlice.reducer;
