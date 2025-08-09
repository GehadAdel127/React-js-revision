import Post from './Post'

const Posts = () => {
  const postsInfo = [
    {
      id : 1,
      title : "20",
      body : "أكاديمية ترميز",
      paragraph : "أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها"
    },
    {
      id : 2,
      title : "Hello World",
      body : null,
      paragraph : "This is the hello world article"
    },
    {
      id : 3,
      title : "Post 3",
      body : null,
      paragraph : "This is the post 3 body"
    }
  ]
  const postsList = postsInfo.map((post) => {
    return (
      <Post title = {post.title} body = {post.body} paragraph = {post.paragraph} key={post.id}/>
    )
  })
  return (
    <div style={{width :"50%"}}>
      {postsList}
    </div>
  )
}

export default Posts