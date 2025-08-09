import flowerImage from "../assets/flower.avif"
import Button from './Button'

const SideBar = () => {
    const imageSrc =  flowerImage
    const buttonInfo = [{
      id : 1,
      title :  "جديد 💫💫💫",
      imageSrc : null,
      icon : null
    },
    {
      id : 2,
      title : "الأكثر قراءة",
      imageSrc,
      icon : null
    },
    {
      id : 3,
      title : " مقالات مميزة",
      imageSrc,
      icon : "🌟🌟🌟"
    }
  ]
  const buttonList = buttonInfo.map((button) => {
    return(<Button title = {button.title} key={button.id}>
      <h4>{button.icon}</h4>
      {button.imageSrc && (<img src= {button.imageSrc} alt="flower" style={{width : "100px" , height : "100px"}}/> )}
    </Button>)
  })
  return (
    <div style={{border : "3px solid teal" , borderRadius : "20px" , margin : "10px" , width : "25%" , display : "flex" , justifyContent : "center" , alignItems : "start" , flexWrap : "wrap"}}>
      {buttonList}
    </div>
  )
}

export default SideBar