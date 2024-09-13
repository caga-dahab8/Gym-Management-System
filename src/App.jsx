// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import ViewStudents from './pages/ViewStudents';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import { MemberProvider } from './context/MemberContext';

const App = () => {
  return (
    <MemberProvider>
      <Router>
        <Header />
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view-students" element={<ViewStudents />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </MemberProvider>
  );
};

export default App;
