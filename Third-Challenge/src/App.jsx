import './App.css'
import Header from './Challenge/Header'
import Posts from './Challenge/Posts'
import SideBar from './Challenge/SideBar'

function App() {
  return (
    <div style={{display : "flex" , flexDirection : "column" , overflow : "hidden"}}>
      <Header />
      <div style={{display : "flex" , width : "100%" , justifyContent : "center" , alignItems : "start" ,}}>
        <Posts />
        <SideBar />
      </div>
    </div>
  )
}

export default App
