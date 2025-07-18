import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agradecimento from "./pages/Agradecimento"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agradecimento" element={<Agradecimento/>}/>
        </Routes>   
    </BrowserRouter>
      
    
  )
}

export default App
