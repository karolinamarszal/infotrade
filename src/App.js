import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {InfoPageMain} from "./pages/InfoPageMain"
import {InfoPageDetails} from "./pages/InfoPageDetails"

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfoPageMain />} />
          <Route path="/details/:symbol" element={<InfoPageDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
