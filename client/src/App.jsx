import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingUp from './pages/SingUp'
import Projects from './pages/Projects'
import Dashbord from './pages/Dashbord'
import SingIn from './pages/SingIn'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sing-in' element={<SingIn />} />
        <Route path='/sing-up' element={<SingUp />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/Projects' element={<Projects />} />
     </Routes>
    </BrowserRouter>
  )
}
