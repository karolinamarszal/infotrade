import {BrowserRouter, Routes, Route} from "react-router-dom"
import {InfoPageMain} from "./pages/InfoPageMain"
import {InfoPageDetails} from "./pages/InfoPageDetails"
import { NavBar } from "./components/NavBar"
import "./App.css";
import { SearchListContextProvider } from "./context/searchListContext";
import { ThemeContextProvider } from "./context/themeContext";
import MainLayout from "./components/MainLayout";



function App() {







  
  return (
    <ThemeContextProvider>
      <MainLayout>
        <BrowserRouter>
          <NavBar />
          <main className="container">
            <SearchListContextProvider>
                <Routes>
                  <Route path="/" element={<InfoPageMain />} />
                  <Route path="/detail/:symbol" element={<InfoPageDetails />} />
                </Routes>
            </SearchListContextProvider>
          </main>
        </BrowserRouter>
      </MainLayout>
    </ThemeContextProvider>
    );
}

export default App;
