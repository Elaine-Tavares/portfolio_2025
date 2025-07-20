import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agradecimento from "./pages/Agradecimento"
import Performance from "./pages/Performance"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/performance" element={<Performance/>}/>
        <Route path="/agradecimento" element={<Agradecimento/>}/>
      </Routes>   
    </BrowserRouter>   
  )
}

export default App
