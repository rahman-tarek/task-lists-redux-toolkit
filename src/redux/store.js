import { configureStore } from '@reduxjs/toolkit'
import addaddTaskReducer from './feature/addTaskSlice'

const store = configureStore({
    reducer: {
        addTask: addaddTaskReducer
    }
})

export default store;