import { combineReducers } from '@reduxjs/toolkit'
import UiReducer from './ui'
import ComponentsReducer from './components'

const rootReducer = combineReducers({
  ui: UiReducer,
  components: ComponentsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
