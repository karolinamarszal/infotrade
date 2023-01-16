import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";


const MainLayout = ({ children }) => {

  const { theme } = useContext(ThemeContext)


return <div className="background-img" style={{height: "100vh"}} data-theme={theme}>
    {children}
    </div>
}

export default MainLayout