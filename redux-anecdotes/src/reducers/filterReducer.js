import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
name:"filter",
initialState:"",
reducers:{
    setFilter(state,action){
        const content = action.payload
        return content.toLowerCase() }}

})




export const { setFilter } = filterSlice.actions 
export default filterSlice.reducer