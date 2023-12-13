import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
// import PropTypes from 'prop-types'
import FeedBackItem from "../components/FeedBackItem"
import Spinner from './shared/Spinner'
import FeedbackContext from '../context/FeedbackContext'

// function FeedBackList({feedback, handleDelete}) {
//   const {} = useContext(FeedbackContext)

  // function FeedBackList({ handleDelete}) {
    function FeedBackList() {
  
    const {feedback, isLoading } = useContext(FeedbackContext)
    console.log("feedback: ", feedback)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feeback Yet</p>
    }

    return isLoading ? (
      // <h3>Loading...</h3>
      <Spinner />
    ) : (
      <div className="feedback-list">
          <AnimatePresence>
          {feedback.map((item) => (
              <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
              >
                <FeedBackItem 
                key={item.id} 
                item={item}
                // handleDelete={handleDelete}
                />
              </motion.div>
          ))}
          </AnimatePresence>
      </div>
    )
    // return (
    //   <div className="feedback-list">
    //       <AnimatePresence>
    //       {feedback.map((item) => (
    //           <motion.div 
    //             key={item.id}
    //             initial={{opacity: 0}}
    //             animate={{opacity: 1}}
    //             exit={{opacity: 0}}
    //           >
    //             <FeedBackItem 
    //             key={item.id} 
    //             item={item}
    //             // handleDelete={handleDelete}
    //             />
    //           </motion.div>
    //       ))}
    //       </AnimatePresence>
    //   </div>
    // )
    // return (
  //   <div className="feedback-list">
  //       {feedback.map((item) => (
  //           <FeedBackItem 
  //           key={item.id} 
  //           item={item}
  //           handleDelete={handleDelete}
  //           />
  //       ))}
  //   </div>
  // )
}

// FeedBackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//     //  id: PropTypes.number.isRequired,
//      id: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
//      text: PropTypes.string.isRequired,
//     //  rating: PropTypes.number.isRequired,
//      rating: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),

//     })
//   ),
// }

export default FeedBackList
