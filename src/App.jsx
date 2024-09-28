import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Setup } from './pages/setup';
import { Home } from './pages/home';
import { FolderStructure } from './pages/folderStructure';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slide/1" element={<Setup />} />
          <Route path="/slide/2" element={<FolderStructure />} />
          <Route path="/slide/3" element={<Home />} />
          <Route path="/slide/4" element={<Home />} />
          <Route path="/slide/5" element={<Home />} />
          <Route path="/slide/6" element={<Home />} />
          <Route path="/slide/7" element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

