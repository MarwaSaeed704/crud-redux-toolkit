import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        items:[]
    },
    reducers: {
        addPost: (state, actions) => {
            state.items.push(actions.payload);   
        },
        deletePost: (state, actions) => {
            state.items = state.items.filter(item => item.id != actions.payload.id);
        },
        updatePost: (state, actions) => {
            state.items.map((item) => {
                if (item.id == actions.payload.id) {
                     item.title = actions.payload.title;
                     item.description = actions.payload.description;
                }
            })
           
        },
        
    },
});

export const { addPost,deletePost,updatePost} = postSlice.actions;
export default postSlice.reducer;