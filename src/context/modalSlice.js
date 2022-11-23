import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    data: false,
}

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.data = action.payload?.data 
            state.open = true
        },        
        closeModal: (state) => {
            state.data = false
            state.open = false
        }
    }
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer