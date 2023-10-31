// import { useParams } from "react-router-dom"
import { Navigate, useNavigate, Routes, Route } from "react-router-dom"

function Post() {
    // const params = useParams()
    const status = 200
    const navigate = useNavigate()
    const onClick = () => {
        console.log('hello')
        navigate('/about')
    }
    if(status === 404) {
        return <Navigate to='/notfond' />
    }
  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
            <Route path='/show' element={<h1>Hello World</h1>}/>
        </Routes>
      {/* <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p> */}
    </div>
  )
}

export default Post
