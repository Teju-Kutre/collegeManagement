import './App.css';
import Login from "./components/Login";
import Staff from "./components/Staff";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/staff' element={<Staff />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
