import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './app/components/Navbar';
import HomeScreen from './app/Screens/HomeScreen';
import HrScreen from './app/Screens/HrScreen';
import LoginScreen from './app/Screens/LoginScreen';

function App() {

  return (
    <div>
      
      <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
        <Routes>
          <Route path='/login' element={<LoginScreen />}></Route>
          <Route path='/home' element={<HomeScreen />}></Route>
          <Route path='/home/hr' element={<HrScreen />}></Route>
          <Route path='*' element={<h1>Error found</h1>} ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
