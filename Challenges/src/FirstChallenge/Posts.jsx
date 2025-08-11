import Post from './Post'
import "./Posts.css"
const Posts = () => {
    const postsArray = Array.from({length : 10})
  return (
    <div className={'posts'}>
        {postsArray.map((_,index) => (
            <Post key={index}/>
        ))}
    </div>
  )
}

export default Posts