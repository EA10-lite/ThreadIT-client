import './App.css';
import { Routes, Route } from 'react-router-dom';

// containers
import { AuthLayout, MainLayout } from './containers';

// routes
import Homepage from './routes/homepage';
import Login from './routes/login';
import Signup from './routes/signup';

function App() {
  return (
    <Routes>
      {/* ************Auth Routes*************** */}
      <Route path="" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* ************Logged in routes********** */}
      <Route path="" element={<MainLayout />}>
        <Route index path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
