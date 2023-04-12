import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './Profile';
import MotoCrossPage from './shared/MotoCrossPage';
import DualSportAdventurePage from './shared/DualSportAdventurePage';
import SXSPage from './shared/SXSPage';
import RoadPage from './shared/RoadPage';
import ATVPage from './shared/ATVPage';
import SnowPage from './shared/SnowPage';
import OverlandPage from './shared/OverlandPage';
import TechTipPage from './shared/TechTipPage';
import Privateer from './shared/Privateer';
import TrailPage from './shared/TrailPage';
import EmailSignup from './Components/EmailSignup'; // Import the EmailSignup component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/motocross" element={<MotoCrossPage />} />
            <Route path="/dualsport-adventure" element={<DualSportAdventurePage />} />
            <Route path="/sxs" element={<SXSPage />} />
            <Route path="/road" element={<RoadPage />} />
            <Route path="/atv" element={<ATVPage />} />
            <Route path="/snow" element={<SnowPage />} />
            <Route path="/overland" element={<OverlandPage />} />
            <Route path="/techtip" element={<TechTipPage />} />
            <Route path="/privateer" element={<Privateer />} />
            <Route path="/trail" element={<TrailPage />} />
            <Route path="/email-signup" element={<EmailSignup />} /> {/* Add the new route for EmailSignup */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

