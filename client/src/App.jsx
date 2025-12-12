import './App.css'
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App() {
    return (
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/Login" element={<LoginPage/>} />
      </Routes>
  
  )
}

export default App
