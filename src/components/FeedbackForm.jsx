import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./Button"
import FeedbackContext from "../context/FeedbackContext"

// function FeedbackForm({ handleAdd }) {
    function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState('10')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    
    useEffect(() => {
        // console.log('hello')
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        // console.log(e.target.value)
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            // console.log(newFeedback)
            // handleAdd(newFeedback)
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            addFeedback(newFeedback)

            setText('')
        }
        
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component  */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
            <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder="Write a review"
                value={text} 
            />
            {/* version="secondary" if you put version on Button the button color will be pink */}
            <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className="message"> {message}  </div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
