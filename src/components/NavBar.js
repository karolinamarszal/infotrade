import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../context/themeContext";
import ReactSwitch from "react-switch"


export const NavBar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)
  

  const navigate = useNavigate()

  const home = () => {
    navigate("")
  }


  return <header className="d-flex justify-content-between align-items-center mb-4 px-2 shadow nav home">
    <button className="btn-nav home" onClick={home}>HOME</button>
    <div className="switch">
      <label style={{marginRight: "10px"}}> { theme === "light" ? "Light Mode" : "Dark Mode"} </label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
    </div>
  </header>

  
} 
