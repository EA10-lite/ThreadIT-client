import './App.css';
import { Routes, Route } from 'react-router-dom';

// containers
import { AuthLayout, MainLayout, ProfileLayout } from './containers';

// routes
import { AccountVerify, Homepage, Login, Profile, ResetPassword, SetPassword, Signup } from './routes';

function App() {
  return (
    <Routes>
      {/* ************Auth Routes*************** */}
      <Route path="" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/set-password:/token" element={<SetPassword />} />
        <Route path="/account-verify/:token" element={<AccountVerify />} />
      </Route>

      {/* ************Logged in routes********** */}
      <Route path="" element={<MainLayout />}>
        <Route index path="/" element={<Homepage />} />
        <Route path="" element={<ProfileLayout />} >
          <Route path="profile/:id" element={<Profile />} />
          <Route path="profile/:id/posts" element={<h1> HELLO WORLD </h1>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
