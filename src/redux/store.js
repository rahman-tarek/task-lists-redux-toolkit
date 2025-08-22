import { configureStore } from '@reduxjs/toolkit'
import addaddTaskReducer from './feature/addTaskSlice'
import darkThemeReducer from './feature/darkThemeSlice'

const store = configureStore({
    reducer: {
        addTask: addaddTaskReducer,
        darkTheme: darkThemeReducer
    }
})

export default store;