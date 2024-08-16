import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Page1 />} />
        <Route  path="/works" element={<Page2 />} />
        <Route  path="/framework" element={<Page3 />} />
        <Route  path="/cherry-picks" element={<Page4 />} />
        <Route  path="/get-in-touch" element={<Page5 />} />
        <Route  path="/blog" element={<Page6 />} />
        <Route  path="/transforms" element={<Page7 />} />
        <Route  path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
