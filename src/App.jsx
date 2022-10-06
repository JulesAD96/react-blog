import React from "react"
import { Route , Routes, BrowserRouter} from "react-router-dom"

import Index from "./home/Index"
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
