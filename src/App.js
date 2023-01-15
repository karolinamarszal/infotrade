import {BrowserRouter, Routes, Route} from "react-router-dom"
import {InfoPageMain} from "./pages/InfoPageMain"
import {InfoPageDetails} from "./pages/InfoPageDetails"
import { NavBar } from "./components/NavBar"
import "./App.css";
import { SearchListContextProvider } from "./context/searchListContext";


function App() {
  return (
    <div className="background-img" style={{height: "100vh"}}>
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
    </div>
    );
}

export default App;
