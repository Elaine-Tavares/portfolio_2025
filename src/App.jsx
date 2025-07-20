import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agradecimento from "./pages/Agradecimento"
import Performance from "./pages/Performance"
import ScrollToTop from "./components/ScrollToTop"
import Curriculo from "./pages/Curriculo"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/performance" element={<Performance/>}/>
        <Route path="/agradecimento" element={<Agradecimento/>}/>
        <Route path="/curriculo" element={<Curriculo/>}/>
      </Routes>   
    </BrowserRouter>   
  )
}

export default App
