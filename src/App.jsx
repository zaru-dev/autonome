import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ProviderOnboarding from './pages/ProviderOnboarding'; 
import ClientRegistration from './pages/ClientRegistration'; // <--- Importe aqui

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:type" element={<Auth />} />
        
        {/* Rota do Autônomo (Passo a passo) */}
        <Route path="/onboarding" element={<ProviderOnboarding />} />
        
        {/* Rota do Cliente (Pagina Única) */}
        <Route path="/register-client" element={<ClientRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;