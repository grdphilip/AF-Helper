import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/Login/LoginPage';
import Overview from './pages/Overview/Overview';
import Schedule from './pages/Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path='/schedule' element={<Schedule />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
