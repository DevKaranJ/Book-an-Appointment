// Add reducers for the provider
// store.js
import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './reducers/authenticationSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
