import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

const todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            state.todos.push(action.payload) // mutates the object if not using redux
            // but redux works with immutable object so we can use this
            // state.todos = [...state,action.payload] this should be used normally to have
            // immutable objects.
        }
    }
})

export const {addtodos}= todoSlice.actions;

export default todoSlice.reducer;