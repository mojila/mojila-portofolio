import React from 'react';

function App() {
  return (
    <div className="bg-black h-screen w-full max-h-screen max-w-full overflow-hidden relative">
      {/* Video Resume - Hidden on mobile, bottom-left on desktop */}
      <div className="hidden md:block absolute md:bottom-4 md:left-4 z-10">
        <video 
          className="w-32 h-24 sm:w-40 sm:h-30 md:w-48 md:h-36 rounded-lg shadow-lg"
          controls
          autoPlay
          loop
          preload="metadata"
        >
          <source src="/asset/video-resume.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Main Content */}
       <div className="h-full flex items-center justify-center">
        <div className="text-white text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Mojila Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
            Mobile-first responsive design
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;