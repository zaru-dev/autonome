import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ProviderOnboarding from './pages/ProviderOnboarding'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:type" element={<Auth />} />
        <Route path="/onboarding" element={<ProviderOnboarding />} />
      </Routes>
    </Router>
  );
}

export default App;