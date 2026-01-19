import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ProviderOnboarding from './pages/ProviderOnboarding';
import ClientRegistration from './pages/ClientRegistration';
import ClientDashboard from './pages/ClientDashboard'; 
import ProfessionalProfile from './pages/ProfessionalProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:type" element={<Auth />} />
        <Route path="/onboarding" element={<ProviderOnboarding />} />
        <Route path="/register-client" element={<ClientRegistration />} />
        <Route path="/profile/:id" element={<ProfessionalProfile />} />
        {/* Nova Rota Principal do Cliente */}
        <Route path="/dashboard" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;