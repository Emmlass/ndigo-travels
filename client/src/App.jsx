import './App.css'
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';

function App() {
    return (
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/Login" element={<LoginPage/>} />
        </Route>
      </Routes>
      
  
  )
}

export default App
