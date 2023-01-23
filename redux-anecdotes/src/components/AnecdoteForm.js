import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnec = async (e) => {
      e.preventDefault()
      const content = e.target.note.value
      e.target.note.value= ""
      dispatch(createAnec(content))

      dispatch(setNotification(`Anecdote ${content} was created`, 5))
    }

    return (<>
     <h2>create new</h2>
    <form onSubmit={addAnec}>
      <div><input name="note"/></div>
      <button type="submit">create</button>
    </form>
    </>)
}


export default AnecdoteForm