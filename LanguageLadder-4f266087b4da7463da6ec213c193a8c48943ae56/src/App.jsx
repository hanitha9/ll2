import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LanguageSelection from './components/LanguageSelection';
import LevelSelection from './components/LevelSelection';
import Lesson from './components/Lesson';
import Community from './components/Community';

// Main application component with routing
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
        <nav className="bg-blue-500 text-white p-4 shadow-lg sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">Languageladder</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-yellow-300 transition">Home</a>
              <a href="/login" className="hover:text-yellow-300 transition">Login</a>
              <a href="/register" className="hover:text-yellow-300 transition">Register</a>
              <a href="/lesson" className="hover:text-yellow-300 transition">Lessons</a>
              <a href="/community" className="hover:text-yellow-300 transition">Community</a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/language-selection" element={<LanguageSelection />} />
          <Route path="/level-selection" element={<LevelSelection />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
