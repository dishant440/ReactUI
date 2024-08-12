import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatusCard from './component/StatusCard';
import Home from './pages/Home';
import Main from './pages/Main';
import DisplayStatus from "./pages/DisplayStatus";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CZAR" element={<Home />} />
        <Route path="/PRICE_GET" element={<Main />} />
        <Route path="/DU_STATUS" element={<DisplayStatus/>}/>
      </Routes>
    </BrowserRouter>
 
  )
}