import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/auth/login'
import { Provider } from './context/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
