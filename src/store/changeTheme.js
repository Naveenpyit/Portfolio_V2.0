import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: 'blue',
}

const themeSlice = createSlice({
    initialState,
    name: 'themeSlice',
    reducers: {
        changeTheme(state, action) {
            state.theme = state.theme == 'blue' ? 'red' : 'blue';
        }
    }
})

export const getTheme = (state) => state.themeSlice.theme;

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;