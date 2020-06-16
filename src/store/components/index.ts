import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IBComponentObject from '../../components/bootstrap/interfaces/IBComponentObject'

interface IComponentsState {
  components: Array<IBComponentObject>
}

const INITIAL_STATE: IComponentsState = {
  components: [],
}

const componentsSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    updateComponents(state, action: PayloadAction<IBComponentObject>) {
      state.components = [...state.components, action.payload]
    },
  }
})

export const {
  updateComponents,
} = componentsSlice.actions

export default componentsSlice.reducer
