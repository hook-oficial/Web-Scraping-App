import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from "./components/navbar/Navbar";
import TemplateDefault from "./components/template/default/TemplateDefault";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/default-template" element={<TemplateDefault />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
