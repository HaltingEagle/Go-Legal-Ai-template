import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Templates from './pages/Templates'
import Works from './pages/Works'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Templates/>}/>
        <Route path="/templates" element={<Templates/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App