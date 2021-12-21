import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import SingleCoctale from "./pages/SingleCoctale";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCoctale />} />
      </Routes>
    </div>
  );
}

export default App;
