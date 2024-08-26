import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Framework from './pages/Framework';
import CherryPicks from './pages/CherryPicks';
import GetInTouch from './pages/GetInTouch';
import Blog from './pages/Blog';
import Transforms from './pages/Transforms';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/works" element={<Works />} />
        <Route  path="/framework" element={<Framework />} />
        <Route  path="/cherry-picks" element={<CherryPicks />} />
        <Route  path="/get-in-touch" element={<GetInTouch />} />
        <Route  path="/blog" element={<Blog />} />
        <Route  path="/transforms" element={<Transforms />} />
        <Route  path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
