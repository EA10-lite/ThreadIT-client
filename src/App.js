import './App.css';
import { Routes, Route } from 'react-router-dom';

// routes
import Homepage from './routes/homepage';
import Login from './routes/login';
import Signup from './routes/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      {/* ************Auth Routes*************** */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
