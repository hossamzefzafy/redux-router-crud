import { configureStore } from '@reduxjs/toolkit'
import posts from './PostSlice';
import auth from './authSlice';




const store = configureStore(
    {
        reducer:{posts, auth}
    })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export default store