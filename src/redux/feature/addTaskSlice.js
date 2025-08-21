import { createSlice } from '@reduxjs/toolkit'

const addTaskSlice = createSlice({
    name: 'addTask',
    initialState: [],
    reducers: {
        addNewTask: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload
            })
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        }
    }
})

export const { addNewTask, deleteTask } = addTaskSlice.actions;
export default addTaskSlice.reducer;