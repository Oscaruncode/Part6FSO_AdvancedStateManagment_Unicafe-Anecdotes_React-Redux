import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const Filter = () => {

    const dispatch = useDispatch()

    const changeFilter = (e) => {
        const value = e.target.value;
        dispatch(setFilter(value))
    }

    const style = {
        margin: 10
      }

    return (<div style={style}>
        Filter <input type="text" onChange={changeFilter}/>
    </div>)


}

export default Filter