import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import AdminPanel from './pages/AdminPanle';
import Home from './components/Home';

function App() {

  return (
        
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminLogin />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminpanel" element={<AdminPanel />} />

       </Routes>


  );
}

export default App;
