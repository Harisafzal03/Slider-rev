import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import LandingPage from './LandingPage';

const App = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className='min-h-screen flex flex-col'>
      {/* {!isAboutPage && <Navbar />} */}
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* {!isAboutPage && <Footer />} */}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
