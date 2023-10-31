// import { v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
// import { useState } from "react"
import React from "react"
import Card from './components/shared/Card'
import Header from "./components/Header"
// import FeedBackItem from "./components/FeedBackItem"
import FeedBackList from "./components/FeedBackList"
import FeedbackStats from "./components/FeedbackStats"
// import Card from "./components/shared/Card"
import FeedbackForm   from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
// import FeedBackData from "./data/FeedBackData"
import AboutIconLink from './components/AboutIconLink'
// import Post from './components/Post'
function App() {

    // const title = 'Blog Post'
    // const body = 'This is my blog post'
    // const comments = [
    //     {id: 1, text: 'Comment one'},
    //     {id: 2, text: 'Comment two'},
    //     {id: 3, text: 'Comment three'},
    // ]

    // const loading = false
    // const showComments = true

    // if(loading) return <h1>Loading ... </h1>

    // const commentBlock = (
    // <div className="comments">
    //     <h3>Comments ({comments.length}) </h3>
    //     <ul>
    //         {comments.map((comment, index)=> (
    //             <li key={index}> {comment.text} </li>
    //         ))}
    //     </ul>
    // </div> )
    // const [feedback, setFeedback] = useState(FeedBackData)
    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4()
    //     // console.log(newFeedback)
    //     setFeedback([newFeedback, ...feedback])
    // }
    // const deleteFeedback = (id) => {
    //     // console.log('App', id)
    //     if(window.confirm('Are you sure you want to delete?')) {
    //         setFeedback(feedback.filter((item) => item.id !== id))
    //     }
    // }
    return (
    <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={
                        <>
                            {/* <FeedbackForm handleAdd={addFeedback} /> */}
                            <FeedbackForm />

                            {/* <FeedbackStats feedback={feedback}/> */}
                            <FeedbackStats />
                            {/* <FeedBackList feedback={feedback} */}
                            {/* <FeedBackList handleDelete={deleteFeedback} /> */}
                            <FeedBackList />

                        </>
                    }> This is the about route
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                    {/* <Route                   path='/post/:id/:name' element={<Post />} /> */}

                    {/* <Route path='/post/*' element={<Post />} /> */}

                            {/* <Route exact path='/' element={
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedBackList />
                            </Route>
                            <Route path='/about' component={AboutPage} /> */}

                    </Routes>

            {/* <Card>
                <NavLink to='/' activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to='/about' activeClassName='active'>
                    About
                </NavLink>
            </Card> */}

                {/* <Card>Hello World</Card> */}
                {/* <h1>{ title.toUpperCase() }</h1>
                <p>{ body }</p> */}

                {/* {showComments && commentBlock} 방법 3 */}
                {/* {showComments && ( <div className="comments">
                    <h3>Comments ({comments.length}) </h3>
                    <ul>
                        {comments.map((comment, index)=> (
                            <li key={index}> {comment.text} </li>
                        ))}
                    </ul>
                </div>
                )} 방법1 */}

                {/* {showComments ? ( <div className="comments">
                    <h3>Comments ({comments.length}) </h3>
                    <ul>
                        {comments.map((comment, index)=> (
                            <li key={index}> {comment.text} </li>
                        ))}
                    </ul>
                </div>
                ) : null} 방법2 */}

                
                {/* { Math.random() * (5 + 5)} */}
                <AboutIconLink />
            </div>
        </Router>
    </FeedbackProvider>

    )

    // JavaScript style 
    // return React.createElement(
    //     'div', 
    //     { className: 'container' }, 
    //     React.createElement('h1', {  }, 'My App')
    // )
}

export default App