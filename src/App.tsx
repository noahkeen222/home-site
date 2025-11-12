import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/home-site/" element={<Home />} />
            <Route path="/home-site/about" element={<About />} />
            <Route path="/home-site/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
