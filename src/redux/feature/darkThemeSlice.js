import { createSlice } from '@reduxjs/toolkit'

const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState: { isDarkMode: false },
    reducers: {
        toggleDarkMode: (state, action) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export const { toggleDarkMode } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;