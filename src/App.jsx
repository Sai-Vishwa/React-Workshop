import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Setup } from './pages/setup';
import { Home } from './pages/home';
import { FolderStructure } from './pages/folderStructure';
import { CleanUp } from './pages/CleanUp';
import { ComponentsOverview } from './pages/component';
import { UseStateOverview } from './pages/useStateOverview';
import { UseEffectOverview } from './pages/useEffectOverview';
import { HooksOverview } from './pages/hooksOverview';
import { UseStatePreviousState } from './pages/UseStatePreviousState';
import { UseMemo } from './pages/UseMemo';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/slide/1" element={<Setup />} />
          <Route path="/slide/2" element={<FolderStructure />} />
          <Route path="/slide/3" element={<CleanUp />} />
          <Route path="/slide/4" element={<ComponentsOverview />} />
          <Route path="/slide/5" element={<HooksOverview />} />
          <Route path="/slide/6" element={<UseStateOverview />} />
          <Route path="/slide/8" element={<UseEffectOverview />} />
          <Route path="/slide/9" element={<UseMemo />} />
          <Route path='/slide/7' element={<UseStatePreviousState />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

