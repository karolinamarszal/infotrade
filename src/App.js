import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {InfoPageMain} from "./pages/InfoPageMain"

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfoPageMain />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
