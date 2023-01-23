import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message:"",
    timeout:null,
}


const notinSlice = createSlice({
    name:"notification",
    initialState,
    reducers: {
        setNoti(state,action){
            if(state.timeout){clearTimeout(state.timeout)}
            return action.payload
        }
    }
})

export const setNotification =  (message,time) => {
    return async (dispatch) => {
        const timeout = setTimeout(()=> dispatch(notinSlice.actions.setNoti(initialState)), 1000 * time); 
        dispatch(notinSlice.actions.setNoti({ message,timeout}))
    }
}

export default notinSlice.reducer