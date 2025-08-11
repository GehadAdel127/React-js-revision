import flowerImage from "../assets/flower.avif"
import Button from './Button'

const SideBar = () => {
    const imageSrc =  flowerImage
  return (
    <div style={{border : "3px solid teal" , borderRadius : "20px" , margin : "10px" , width : "25%" , display : "flex" , justifyContent : "center" , alignItems : "start" , flexWrap : "wrap"}}>
        <Button title = "جديد 💫💫💫" />
        <Button title = "الأكثر قراءة">
            <img src= {imageSrc} alt="flower" style={{width : "100px" , height : "100px"}}/>
        </Button>
        <Button title = " مقالات مميزة" >
            <h4>🌟🌟🌟</h4>
            <img src= {imageSrc} alt="flower" style={{width : "100px" , height : "100px"}}/>
        </Button>
    </div>
  )
}

export default SideBar