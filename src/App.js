import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';

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
              title="Mojila - Full-Stack Developer & Technical Leader"
              description="Mojila (Moch. Aji Laksono) - Experienced Technical Leader and Full-Stack Developer with 6+ years in building scalable web applications, backend systems, and developer infrastructure."
              keywords="Mojila, Moch Aji Laksono, Full-Stack Developer, Technical Leader, Backend Developer, Go, Node.js, React, GCP, DevOps, Software Engineer"
              canonicalUrl="https://mojila.my.id"
            />
            <HomePage />
          </>
        } />
        <Route path="/about" element={
          <>
            <SEOHead 
              title="About Mojila - Technical Leader & Full-Stack Developer"
              description="Learn more about Mojila's professional journey, technical expertise, and leadership experience in software development and team management."
              keywords="About Mojila, Technical Leader, Full-Stack Developer, Software Engineer, Backend Specialist, Team Leadership, DevOps"
              canonicalUrl="https://mojila.my.id/about"
            />
            <About />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;