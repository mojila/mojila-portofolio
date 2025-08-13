import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import BapakKos from './components/BapakKos';

// SEO Head component for dynamic meta tags
const SEOHead = ({ title, description, keywords, canonicalUrl }) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl]);
  
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <SEOHead 
              title="Mojila Portfolio - Full-Stack Developer & Technical Leader Resume"
              description="Mojila (Moch. Aji Laksono) - Experienced Technical Leader and Full-Stack Developer with 6+ years in building scalable web applications, backend systems, and developer infrastructure. View portfolio, download resume, and ask questions."
              keywords="Mojila, portfolio, resume, ask, Moch Aji Laksono, Full-Stack Developer, Technical Leader, Backend Developer, Go, Node.js, React, GCP, DevOps, Software Engineer"
              canonicalUrl="https://mojila.my.id"
            />
            <HomePage />
          </>
        } />
        <Route path="/about" element={
          <>
            <SEOHead 
              title="About Mojila Portfolio - Technical Leader & Full-Stack Developer Resume"
              description="Learn more about Mojila's professional journey, technical expertise, and leadership experience in software development and team management. View portfolio, download resume, and ask questions about experience."
              keywords="About Mojila, portfolio, resume, ask, Technical Leader, Full-Stack Developer, Software Engineer, Backend Specialist, Team Leadership, DevOps"
              canonicalUrl="https://mojila.my.id/about"
            />
            <About />
          </>
        } />
        <Route path="/bapak-kos" element={
          <>
            <SEOHead 
              title="Bapak Kos App - Home Rent Management Android App by Mojila"
              description="Download Bapak Kos Android app for home rent management and accounting. Features bill creation, earnings summary, and thermal printing for landlords and property managers."
              keywords="Bapak Kos, Android app, home rent management, property management, bill creation, thermal printing, landlord app, rental management"
              canonicalUrl="https://mojila.my.id/bapak-kos"
            />
            <BapakKos />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;