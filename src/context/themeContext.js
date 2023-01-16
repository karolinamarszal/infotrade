import { createContext, useState } from "react";

export const ThemeContext = createContext("");

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {props.children}
  </ThemeContext.Provider>
}