import Navbar from "./Components/Navbar"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Service from "./Pages/Service"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Layout from "./Components/Layout"





function App() {

  return (
    <div>
     
      <BrowserRouter>
   

        <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="service" element={<Service />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>

      </Routes>
      </BrowserRouter>


   </div>
  )
}

export default App
