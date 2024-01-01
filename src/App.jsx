import Home from './pages/Home';
import About from './pages/About';
import Politique from './pages/Politique';
import CGU from './pages/CGU';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
