import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BapakKos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const appImages = [
    '/asset/bapak-kos/bapak-kos-1.jpg',
    '/asset/bapak-kos/bapak-kos-2.jpg',
    '/asset/bapak-kos/bapak-kos-3.jpg',
    '/asset/bapak-kos/bapak-kos-4.jpg',
    '/asset/bapak-kos/bapak-kos-5.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % appImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + appImages.length) % appImages.length);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/asset/bapak-kos/bapak-kos.apk';
    link.download = 'bapak-kos.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* SEO-friendly header */}
        <section>
          <header className="text-center mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                Bapak Kos App
              </h1>
              <div className="flex-1 flex justify-end">
                <Link 
                  to="/" 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Home Rent Management & Accounting Helper for Android
            </p>
          </header>
        </section>

        {/* Main content */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* App logo and download */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <img 
                  src="/asset/bapak-kos/bapak-kos-logo.png"
                  alt="Bapak Kos App Logo"
                  className="w-48 h-48 rounded-3xl object-cover border-4 border-green-500 shadow-2xl mx-auto lg:mx-0"
                  loading="lazy"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-black flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Bapak Kos</h2>
                <h3 className="text-green-400 font-medium">Home Rent Management App</h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">📱 Android App</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">🏠 Rent Management</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">🖨️ Thermal Printing</span>
                </div>
                
                {/* Download Button */}
                <div className="mt-6">
                  <button 
                    onClick={handleDownload}
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 mx-auto lg:mx-0"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download APK
                  </button>
                  <p className="text-sm text-gray-400 mt-2">Compatible with Android 5.0+</p>
                </div>
              </div>
            </div>

            {/* App description and features */}
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-400">About Bapak Kos</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bapak Kos is a comprehensive home rent management application designed specifically for 
                  landlords and property managers in Indonesia. This Android app simplifies the complex 
                  task of managing rental properties, tenant billing, and financial tracking.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're managing a single boarding house or multiple rental properties, 
                  Bapak Kos provides all the tools you need to streamline your rental business operations 
                  and keep accurate financial records.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Key Features</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <span>📋</span> Bill Management
                    </h3>
                    <p className="text-sm text-gray-300">
                      Create and manage bills for renters including room rent, electricity, water, and other utilities. 
                      Automatically calculate totals and track payment status.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      <span>📊</span> Earnings Summary
                    </h3>
                    <p className="text-sm text-gray-300">
                      Get comprehensive summaries of your rental income with detailed breakdowns by property, 
                      tenant, and time period. Track your business performance effortlessly.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <span>🖨️</span> Thermal Printing
                    </h3>
                    <p className="text-sm text-gray-300">
                      Print receipts and bills directly to any thermal printer. Perfect for providing 
                      professional receipts to tenants and maintaining physical records.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                      <span>🏠</span> Property Management
                    </h3>
                    <p className="text-sm text-gray-300">
                      Manage multiple properties and rooms with ease. Keep track of occupancy, 
                      tenant information, and property-specific settings all in one place.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* App Screenshots */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            App Screenshots
          </h2>
          <div className="relative max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={appImages[currentImageIndex]}
                alt={`Bapak Kos App Screenshot ${currentImageIndex + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Navigation buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Previous screenshot"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Next screenshot"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Image indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {appImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">System Requirements</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Android 5.0 (API level 21) or higher</li>
                  <li>• Minimum 2GB RAM recommended</li>
                  <li>• 50MB free storage space</li>
                  <li>• Internet connection for updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3">Development Info</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Built with modern Android development practices</li>
                  <li>• Optimized for Indonesian rental market</li>
                  <li>• Regular updates and bug fixes</li>
                  <li>• Local data storage for privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Simplify Your Rental Management?</h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Download Bapak Kos now and experience the easiest way to manage your rental properties. 
                Join hundreds of landlords who have already streamlined their rental business with our app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleDownload}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download APK Now
                </button>
                <Link 
                  to="/"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
                >
                  🏠 Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BapakKos;