
const Post = ({title , body , paragraph}) => {
  return (
    <div style={{border : "3px solid teal" , borderRadius : "20px" , textAlign : "center" , margin : "10px" , padding : "30px"}}>
        <h3 style={{padding : "10px"}}>{title}</h3>
        <h3 style={{padding : "7px"}}>{body}</h3>
        <hr  style={{width : " 98%"}}/>
        <p style={{padding : "15px"}}>{paragraph}</p>
    </div>
  )
}

export default Post