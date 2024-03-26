import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingUp from './pages/SingUp'
import Projects from './pages/Projects'
import Dashbord from './pages/Dashbord'
import Singin from './pages/Singin'

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='sing-in' element={<Singin />} />
        <Route path='/sing-up' element={<SingUp />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/Projects' element={<Projects />} />
       </Route>
     </Routes>
    </BrowserRouter>
  )
}
