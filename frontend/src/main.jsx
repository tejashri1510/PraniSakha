import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import DailyTips from './components/DailyTips/DailyTips.jsx'
import NotFound from './components/NotFound/NotFound.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import '@fontsource/outfit'
import '@fontsource/roboto'
import Healthcare from './components/Healthcare/Healthcare.jsx';
import SymptomChecker from './components/Healthcare/SymptomChecker.jsx';
import AskAVet from './components/Healthcare/AskAVet.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
  <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dailytips" element={<DailyTips />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/symptomchecker" element={<SymptomChecker />} />
        <Route path="/askavet" element={<AskAVet />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        <Route path="*" element={<NotFound />} />

      </Routes>
      </BrowserRouter>
   
  </StrictMode>,
)
