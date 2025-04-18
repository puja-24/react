import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1,text:"Hello world"}]
}

export const todoSlide = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id: Date.now(),
                text: action.payload
            },
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
        state.todos = state.todos.filter((todo)=>todo.id,
        id!== action.payload)
        },

    }
})

export const {addTodo , removeTodo}= todoSlice.actions 

export dafault todoSlice.reducer