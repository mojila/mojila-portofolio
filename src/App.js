import React, { useState, useEffect } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black h-screen w-full max-h-screen max-w-full overflow-hidden relative">
      {/* Mouse Following Background Effects */}
      <div 
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div 
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0.04) 50%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div 
        className="absolute pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.03) 50%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      {/* Logo - Top center on mobile, top-right on desktop */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:left-auto md:right-4 md:transform-none z-10">
        <img 
          src="/asset/logo.jpg" 
          alt="Mojila Logo" 
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-2 border-white"
        />
      </div>
      
      {/* Video Resume - Hidden on mobile, bottom-left on desktop */}
      <div className="hidden md:block absolute md:bottom-4 md:left-4 z-10">
        <video 
          className="w-32 h-24 sm:w-40 sm:h-30 md:w-48 md:h-36 rounded-lg shadow-lg"
          controls
          preload="metadata"
        >
          <source src="/asset/video-resume.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Main Content */}
       <div className="h-full flex items-center justify-center">
         <div className="text-white text-center px-4 sm:px-6 md:px-8 max-w-2xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
               Mojila
             </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8">
              Mojila Professional Portofolio
            </p>
            
            {/* Chat Input */}
             <div className="mb-6 relative">
               <input
                 type="text"
                 placeholder="Ask me anything about my portfolio..."
                 className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               />
               <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors duration-200">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                 </svg>
               </button>
             </div>
            
            {/* Preset Chat Options */}
              <div className="flex flex-wrap justify-center gap-2">
                <button className="px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full text-black text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                  About Me
                </button>
                <button className="px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full text-black text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Skills
                </button>
                <button className="px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full text-black text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Work Experiences
                </button>
                <button className="px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full text-black text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Projects
                </button>
                <button className="px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full text-black text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Contacts
                </button>
              </div>
         </div>
        </div>
    </div>
  );
}

export default App;