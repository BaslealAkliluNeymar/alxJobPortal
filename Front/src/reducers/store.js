import { configureStore } from "@reduxjs/toolkit";
import authReducer  from '../reducers/authReducer.js'
import jobReducer  from '../reducers/jobReducer.js' 

export const store = configureStore({
    reducer: {
      auth:authReducer,
      job:jobReducer
    }
  })
  