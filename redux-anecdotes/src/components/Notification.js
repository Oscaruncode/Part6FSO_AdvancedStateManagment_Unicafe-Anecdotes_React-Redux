import { useSelector } from "react-redux"

const Notification = () => {
  const noti = useSelector(({noti}) => {return noti.message}) 

  const style = {
    display:"block",
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={noti===""? {"display":"none"}: style}>
      {noti}
    </div>
  )
}

export default Notification