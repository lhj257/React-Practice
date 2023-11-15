import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicPage from "./page/PublicPage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<PublicPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
