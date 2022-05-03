import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard/:city" element={<Dashboard/>}/>
     </Routes>
    </>
  );
}

export default App;
