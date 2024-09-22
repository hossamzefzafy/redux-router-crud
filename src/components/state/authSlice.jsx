import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: true,
        user: 1
    },
    reducers: {
       /*  login(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload; */
      /*   },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
        }
    */} 
})
export default auth.reducer