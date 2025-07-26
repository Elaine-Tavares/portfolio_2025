import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import ScrollToTop from "./components/ScrollToTop"

// Páginas carregadas sob demanda
const Home = lazy(() => import ('./pages/Home'))
const Agradecimento = lazy(() => import ('./pages/Agradecimento'))
const Performance = lazy(() => import ('./pages/Performance'))
const Curriculo = lazy(() => import ('./pages/Curriculo'))


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
       <Suspense 
        fallback={
          <div style={{padding: "2rem", textAlign: "center"}}>
            <p>Carregando...</p>
          </div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/performance" element={<Performance/>}/>
          <Route path="/agradecimento" element={<Agradecimento/>}/>
          <Route path="/curriculo" element={<Curriculo/>}/>
        </Routes>  
      </Suspense> 
    </BrowserRouter>   
  )
}

export default App
