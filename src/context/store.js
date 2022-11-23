import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import modalReducer from './modalSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        modal: modalReducer,
    }
});

export default store;