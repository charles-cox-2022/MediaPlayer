//This combines the reducers for all redux in the application
import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../Rapi/Redux/profileSlice'

export default configureStore({
  reducer: {
    profile: profileReducer
  },
})