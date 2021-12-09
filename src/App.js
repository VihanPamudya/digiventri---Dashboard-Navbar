import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
