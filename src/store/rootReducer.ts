import { combineReducers } from '@reduxjs/toolkit'
import UiReducer from './ui/ui'

const rootReducer = combineReducers({
  ui: UiReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
