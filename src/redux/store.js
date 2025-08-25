import { configureStore } from '@reduxjs/toolkit'
import addaddTaskReducer from './feature/addTaskSlice'
import darkThemeReducer from './feature/darkThemeSlice'
import logger from 'redux-logger';


const store = configureStore({
    reducer: {
        addTask: addaddTaskReducer,
        darkTheme: darkThemeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;