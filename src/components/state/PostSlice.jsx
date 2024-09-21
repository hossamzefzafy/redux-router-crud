import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {records : [], loading: false, console: null};

// First, create the thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(_, ThunkAPI)=>{
const {rejectWithValue} = ThunkAPI
try {
    const res = await fetch("http://localhost:5000/posts")
    const data = await res.json()

    return data;
    
} catch (error) {

    return rejectWithValue(error.message)
    
}
});
export const deletePost = createAsyncThunk("posts/deletePost", async(id,ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    console.log(id)
    try {
        await fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE',
            
            })
           return id
            }catch(error){
              return rejectWithValue(error.message);
            }
        })

export const insertPost = createAsyncThunk("posts/insertPost", async(item, ThunkAPI)=>{
    const {rejectWithValue}= ThunkAPI
    try {
        const res = await fetch("http://localhost:5000/posts", {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset= utf-8'},
            body: JSON.stringify(item),
            })
        const data = await res.json()
        return data;
        
    } catch (error) {
        return rejectWithValue(error.message)
        
    }

})




const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers:{},
  extraReducers:{
    //Fitch posts 
    [fetchPosts.pending]: (state)=>{
        state.loading = true;
        state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action)=>{
        state.loading = false;
        state.records = action.payload;
        
        
    },
    [fetchPosts.rejected]: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        
    },
    //Delete post
    [deletePost.pending]: (state)=>{
        state.loading = true;
        state.error = null;
    },
    [deletePost.fulfilled]: (state, action)=>{
        state.loading = false;
        state.records = state.records.filter(ele => ele.id !== action.payload);
       
        
    },
    [deletePost.rejected]: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        
    },
    //Insert post
    [insertPost.pending] : (state)=>{
        state.loading = true;
        state.error = null;
    },
    [insertPost.fulfilled] : (state, action)=>{
        state.loading = false;
        state.records.push(action.payload);
    },
    [insertPost.rejected] : (state, action)=>{
        state.loading = false;
        state.error = action.payload;
    }

  }
  
   
  
})


export default PostsSlice.reducer