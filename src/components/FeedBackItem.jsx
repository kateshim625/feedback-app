// import { useState } from "react"
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

// function FeedBackItem({ item, handleDelete }) {
  function FeedBackItem({ item }) {
    // const {deleteFeedback} = useContext(FeedbackContext)
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item.')
    //     // setRating((prev) => {
    //     //     return prev + 1
    //     // })
    // }

    // const handleClick = (id) => {
    //   console.log(id)
    // }
  return (
    <Card > 
      {/* reverse={true} */}
        <div className="num-display">{item.rating}</div>
        {/* <button onClick={() => handleDelete(item.id)} className="close"> */}
        <button onClick={() => deleteFeedback(item.id)} className="close">

          <FaTimes color='purple' />
        </button> 
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="purple" />  
        </button>       
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired, 
}
export default FeedBackItem
