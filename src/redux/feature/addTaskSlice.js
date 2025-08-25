import { createSlice } from '@reduxjs/toolkit'
import fetchData from '../fetchData';

const initialState = {
    tasks: [],
    loading: false,
    error: null,
}
const addTaskSlice = createSlice({
    name: 'addTask',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload
            })
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const { addNewTask, deleteTask } = addTaskSlice.actions;
export default addTaskSlice.reducer;