import { configureStore } from '@reduxjs/toolkit'
import posts from './PostSlice';




const store = configureStore(
    {
        reducer:{posts}
    })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export default store