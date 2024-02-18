

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CsignIn from './pages/CsignIn';
import Home from './pages/Home';
function App() {
  

  return (
    
    <>
      <div className='body'>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/csignin' element={<CsignIn></CsignIn>}></Route>
          </Routes>
        </Router>

        

      </div>
    </>
  )
}

export default App
