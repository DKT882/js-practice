import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counters/CountSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
