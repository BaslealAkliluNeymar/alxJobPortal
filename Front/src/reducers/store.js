import { configureStore } from "@reduxjs/toolkit";
import authReducer  from '../reducers/authReducer.js'
import jobReducer  from '../reducers/jobReducer.js' 
import talentReducer from '../reducers/talentReducer.js'

export const store = configureStore({
    reducer: {
      auth:authReducer,
      job:jobReducer,
      talent:talentReducer
    }
  })
  