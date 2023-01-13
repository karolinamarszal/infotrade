import {BrowserRouter, Routes, Route} from "react-router-dom"
import {InfoPageMain} from "./pages/InfoPageMain"
import {InfoPageDetails} from "./pages/InfoPageDetails"
import { NavBar } from "./components/NavBar"
import "./App.css";
import { SearchListContextProvider } from "./context/searchListContext";


function App() {
  return (
    <div className="background-img">
      <NavBar />
      <main className="container">
        <SearchListContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<InfoPageMain />} />
              <Route path="/detail/:symbol" element={<InfoPageDetails />} />
            </Routes>
          </BrowserRouter>
        </SearchListContextProvider>
      </main>
    </div>
    );
}

export default App;
