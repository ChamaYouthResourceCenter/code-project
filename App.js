import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Apply from './pages/Apply';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

import CarpentryFees from './pages/fees/CarpentryFees';
import TailoringFees from './pages/fees/TailoringFees';
import BricklayingFees from './pages/fees/BricklayingFees';
import ComputerFees from './pages/fees/ComputerFees';

import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SetupManager from './components/SetupManager';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/fees/carpentry" element={<CarpentryFees />} />
        <Route path="/fees/tailoring" element={<TailoringFees />} />
        <Route path="/fees/bricklaying" element={<BricklayingFees />} />
        <Route path="/fees/computer" element={<ComputerFees />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/setup-manager" element={<SetupManager />} />

        <Route path="/admindashboard" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
