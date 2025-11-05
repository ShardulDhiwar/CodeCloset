import { Routes, Route } from 'react-router-dom'
import ProjectLayout from './pages/ProjectLayout.jsx'
import Closet from './pages/Closet.jsx'
import ProjectInfo from './pages/ProjectInfo.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/closet" element={<Closet />} />
        <Route path="/project/:id" element={<ProjectLayout />} />
        <Route path="/project/:id/info" element={<ProjectInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
