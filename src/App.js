import React, { useState, useEffect } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showChatResponse, setShowChatResponse] = useState(false);
  const [chatContent, setChatContent] = useState(null);

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
      {/* Download Resume Button - Top-left */}
      <div className="absolute top-4 left-4 z-10">
        <a 
          href="/asset/resume.pdf" 
          download="Mojila_Resume.pdf"
          className="inline-flex items-center px-3 py-2 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>
      </div>
      
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
                <button 
                  onClick={() => {
                    setChatContent({
                      type: 'about',
                      photo: '/asset/photo.jpeg',
                      text: "I'm Mojila alias Moch. Aji Laksono, a passionate Technical Leader and Full-Stack Developer with over 6 years of experience in building scalable web applications, backend systems, and developer infrastructure. I've led engineering teams in both startup and enterprise environments, with a strong focus on clean architecture, DevOps automation, and system reliability. My expertise includes Go, Node.js, GCP, CI/CD, and microservices.\n\nI've delivered critical solutions in fintech, real estate, and industrial automation—ranging from payroll systems for 10,000+ users to automated bank payment verification using SMS banking. I thrive on mentoring developers, solving complex problems, and continuously learning new technologies."
                    });
                    setShowChatResponse(true);
                  }}
                  className="px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full text-black text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  About Me
                </button>
                <button 
                  onClick={() => {
                    setChatContent({
                      type: 'skills',
                      text: "I have a strong technical foundation in backend and full-stack development, with hands-on experience in programming languages like Go, Node.js, Rust, Dart (Flutter), and JavaScript (React). I'm proficient in working with modern databases such as PostgreSQL, MongoDB, MySQL, and Redis, and I regularly use tools like Docker, Git, CI/CD pipelines, SonarQube, and GitHub Copilot to ensure high-quality, maintainable code. My cloud and infrastructure experience spans Google Cloud Platform (GCP), AWS, dedicated servers, and VPN setups. Beyond coding, I bring valuable soft skills in technical leadership, mentorship, agile collaboration, and problem-solving, which I've applied across both team environments and independent freelance projects."
                    });
                    setShowChatResponse(true);
                  }}
                  className="px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full text-black text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
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
        
        {/* Chat Response Interface */}
        {showChatResponse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-fade-in-up">
              {/* Chat Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-white text-lg font-semibold">Chat Response</h3>
                <button 
                  onClick={() => setShowChatResponse(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Chat Content */}
               <div className="p-6">
                 {chatContent && chatContent.type === 'about' && (
                   <div className="flex flex-col md:flex-row gap-6 items-start">
                     {/* Photo */}
                     <div className="flex-shrink-0">
                       <img 
                         src={chatContent.photo}
                         alt="Mojila Photo"
                         className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg animate-fade-in"
                       />
                     </div>
                     
                     {/* Text Content */}
                     <div className="flex-1">
                       <div className="bg-gray-800 rounded-lg p-4 text-white animate-slide-in-right">
                         <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                           {chatContent.text}
                         </p>
                       </div>
                     </div>
                   </div>
                 )}
                 
                 {chatContent && chatContent.type === 'skills' && (
                   <div className="animate-fade-in">
                     {/* Skills Text */}
                     <div className="bg-gray-800 rounded-lg p-4 text-white mb-6 animate-slide-in-right">
                       <p className="text-sm md:text-base leading-relaxed">
                         {chatContent.text}
                       </p>
                     </div>
                     
                     {/* Technology Icons Grid */}
                     <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 animate-fade-in">
                       {/* Programming Languages */}
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🐹</div>
                         <span className="text-xs text-gray-300">Go</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🟢</div>
                         <span className="text-xs text-gray-300">Node.js</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🦀</div>
                         <span className="text-xs text-gray-300">Rust</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🎯</div>
                         <span className="text-xs text-gray-300">Dart</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">⚛️</div>
                         <span className="text-xs text-gray-300">React</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">📱</div>
                         <span className="text-xs text-gray-300">Flutter</span>
                       </div>
                       
                       {/* Databases */}
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🐘</div>
                         <span className="text-xs text-gray-300">PostgreSQL</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🍃</div>
                         <span className="text-xs text-gray-300">MongoDB</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🐬</div>
                         <span className="text-xs text-gray-300">MySQL</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🔴</div>
                         <span className="text-xs text-gray-300">Redis</span>
                       </div>
                       
                       {/* Tools & Cloud */}
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🐳</div>
                         <span className="text-xs text-gray-300">Docker</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🌐</div>
                         <span className="text-xs text-gray-300">Git</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">☁️</div>
                         <span className="text-xs text-gray-300">GCP</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🟠</div>
                         <span className="text-xs text-gray-300">AWS</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🔄</div>
                         <span className="text-xs text-gray-300">CI/CD</span>
                       </div>
                       <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                         <div className="text-2xl mb-2">🤖</div>
                         <span className="text-xs text-gray-300">Copilot</span>
                       </div>
                     </div>
                   </div>
                 )}
               </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default App;