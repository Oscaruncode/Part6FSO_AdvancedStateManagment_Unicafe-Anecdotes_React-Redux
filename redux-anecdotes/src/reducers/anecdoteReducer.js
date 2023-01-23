import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name:"anecdote",
    initialState:[],
    reducers: {
      voteAnecdote(state,action){
        const newState = state.filter(el=>el.id!==action.payload.id)
        newState.push(action.payload)
        return newState
      },
      appendAnecdote(state,action){
        state.push(action.payload)
      },
      setAnecdotes(state,action){
        return action.payload
      }
    },
      
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnec = content => {
  return async dispatch => {
    const newAnec = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnec))
  }
}

export const VotaAnec = anec => {
  return async dispatch => {
    const payload = {...anec, votes: anec.votes + 1}
    const updatedAnec = await anecdoteService.update(payload)
    dispatch(voteAnecdote(updatedAnec))
  }
}


export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions 
export default anecdoteSlice.reducer