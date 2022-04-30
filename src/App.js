import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;