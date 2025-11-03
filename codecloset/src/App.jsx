import { Routes, Route } from 'react-router-dom'
import ProjectLayout from './pages/ProjectLayout.jsx'
import Closet from './pages/Closet.jsx'
import ProjectInfo from './pages/ProjectInfo.jsx'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Closet />} />
      <Route path="/project/:id" element={<ProjectLayout />} />
      <Route path="/project/:id/info" element={<ProjectInfo />} />
    </Routes>
  );
}

export default App
