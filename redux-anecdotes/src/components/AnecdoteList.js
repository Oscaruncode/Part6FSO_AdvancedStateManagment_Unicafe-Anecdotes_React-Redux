import { useSelector, useDispatch } from 'react-redux'
import { VotaAnec } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'



const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes,filter}) => {if(!filter){return anecdotes}
    return anecdotes.filter(e=>e.content.toLowerCase().includes(filter))
    
    })  //sort  deleted because happened a bug that i cant repair 
    const dispatch = useDispatch()


    const vote = (anecdote) => {

        dispatch(VotaAnec(anecdote))

        dispatch(setNotification(`you voted to ${anecdote.content}`,5))
      }

    return (<> {anecdotes.map(anecdote =>
        <div key={anecdote.id} style={{margin:10, borderTop:"thick double #F0FFFF"}}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}</>)
    }


      export default AnecdoteList