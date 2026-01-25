/*import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import News from './components/News';
import FAQ from './components/FAQ';
import Career from './components/Career';
import Support from './components/Support';
import Footer from './components/Footer';
import AuthPage from "./auth/AuthPage";
<Route path="/login" element={<AuthPage />} />

function App() {
  return (
    <div className="font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <News />
        <FAQ />
        <Career />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;*/

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Career from "./components/Career";
import Support from "./components/Support";
import Footer from "./components/Footer";
import AuthPage from "./auth/AuthPage";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <News />
        <FAQ />
        <Career />
        <Support />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
