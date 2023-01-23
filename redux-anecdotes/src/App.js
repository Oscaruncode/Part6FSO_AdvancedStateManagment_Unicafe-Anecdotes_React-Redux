import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteForm/>
      <Filter/>
      <h2>Anecdote´s List</h2>
      <AnecdoteList/>
    </div>
  )
}

export default App