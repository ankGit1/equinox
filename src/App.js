// import Topbar from './components/navbar/Topbar';
import Home from './components/home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/home/subFolder/login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
