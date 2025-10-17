import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeSlice from './changeTheme'

const appReducer = combineReducers({
    themeSlice,
})

export const store = configureStore({
    reducer: appReducer,
});