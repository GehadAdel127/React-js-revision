import Post from './Post'

const Posts = () => {
  return (
    <div style={{width :"50%"}}>
        <Post title = "20" body = "أكاديمية ترميز" paragraph = "أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها"/>
        <Post title = "Hello World"  paragraph = "This is the hello world article"/>
        <Post title = "Post 3"  paragraph = "This is the post 3 body"/>
    </div>
  )
}

export default Posts