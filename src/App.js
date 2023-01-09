import {BrowserRouter, Routes, Route} from "react-router-dom"
import {InfoPageMain} from "./pages/InfoPageMain"
import {InfoPageDetails} from "./pages/InfoPageDetails"
import "./App.css";
import { SearchListContextProvider } from "./context/searchListContext";

function App() {
  return (
    <main className="container">
      <SearchListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfoPageMain />} />
          <Route path="/details/:symbol" element={<InfoPageDetails />} />
        </Routes>
      </BrowserRouter>
      </SearchListContextProvider>
    </main>
  );
}

export default App;
