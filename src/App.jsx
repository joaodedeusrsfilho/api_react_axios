import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App