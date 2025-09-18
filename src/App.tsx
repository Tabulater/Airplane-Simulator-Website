import React, { useState, useEffect } from 'react';
import { Download, Plane, Globe, Cloud, Star, Settings, Monitor, Gamepad2, ChevronDown, Github, Menu, X } from 'lucide-react';

// Base URL for public images (empty string for root-relative paths)

const aircraftData = [
  {
    name: 'AW101',
    type: 'Medium Helicopter',
    description: 'Advanced military and civilian helicopter with sophisticated avionics',
    image: 'AW101.jpg'
  },
  {
    name: 'C-130 Hercules',
    type: 'Turboprop Transport',
    description: 'Military transport aircraft with exceptional cargo capacity',
    image: 'C-130 Hercules.jpg'
  },
  {
    name: 'Cessna 172',
    type: 'General Aviation',
    description: 'World\'s most popular training and recreational aircraft',
    image: 'Cessna 172.jpg'
  },
  {
    name: 'F-16 Fighting Falcon',
    type: '4th Generation Fighter',
    description: 'Multi-role fighter with exceptional maneuverability',
    image: 'F-16 Fighting Falcon.jpg'
  },
  {
    name: 'F-35A Lightning II',
    type: '5th Generation Fighter',
    description: 'Stealth multi-role fighter with advanced sensors',
    image: 'F-35A Lightning II.jpg'
  },
  {
    name: 'P-51 Mustang Mk III',
    type: 'WWII Fighter',
    description: 'Legendary World War II era long-range fighter',
    image: 'P-51 Mustang Mk III.jpg'
  },
  {
    name: 'PW-5 World Class',
    type: 'Glider',
    description: 'High-performance competition sailplane',
    image: 'PW-5 World Class.jpg'
  },
  {
    name: 'Robinson R44',
    type: 'Light Helicopter',
    description: 'Popular four-seat light helicopter',
    image: 'Robinson R44.jpg'
  },
  {
    name: 'UH-60 Black Hawk',
    type: 'Medium Helicopter',
    description: 'Multi-mission military helicopter',
    image: 'UH-60 Black Hawk.jpg'
  }
];

const features = [
  {
    icon: Settings,
    title: 'High Fidelity Flight Dynamics',
    description: 'Based on wind tunnel data and CFD simulations using OpenFOAM and OpenVSP'
  },
  {
    icon: Monitor,
    title: 'Electronic Flight Instruments',
    description: 'Professional EFIS and HUD systems common across all aircraft'
  },
  {
    icon: Globe,
    title: 'Photorealistic Scenery',
    description: 'High-resolution aerial imagery of Oahu and worldwide satellite scenery'
  },
  {
    icon: Star,
    title: 'Accurate Celestial Bodies',
    description: 'Nearly 1000 visible stars with precise astronomical positioning'
  },
  {
    icon: Cloud,
    title: 'Weather Phenomena',
    description: 'Dynamic weather including clouds, fog, and atmospheric effects'
  },
  {
    icon: Gamepad2,
    title: 'Professional Controls',
    description: 'Full HOTAS support with customizable control mapping'
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Airplane Simulator</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#aircraft" className="hover:text-blue-400 transition-colors">Aircraft</a>
              <a href="#download" className="hover:text-blue-400 transition-colors">Download</a>
              <a 
                href="https://github.com/Tabulater/Airplane-Simulator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Tabulater/Airplane-Simulator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-6 w-6" />
              </a>
              <button 
                className="md:hidden text-white hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
                <a href="#aircraft" className="hover:text-blue-400 transition-colors">Aircraft</a>
                <a href="#download" className="hover:text-blue-400 transition-colors">Download</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Airplane Simulator
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate flight simulation with high-fidelity physics, stunning visuals, and professional-grade aircraft systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Tabulater/Airplane-Simulator/releases/download/v1.0.0/Airplane.Simulator.exe.zip"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="h-5 w-5" />
              <span>Download Now</span>
            </a>
            <a href="#features" className="border border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge technology and professional-grade simulation accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/70 transition-all duration-300 group">
                <feature.icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aircraft Section */}
      <section id="aircraft" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Aircraft Fleet</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fly a diverse range of meticulously modeled aircraft from different eras and categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aircraftData.map((aircraft, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`/${aircraft.image}`} 
                    alt={aircraft.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      console.error(`Failed to load image: ${aircraft.image}`);
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-400 font-medium mb-1">{aircraft.type}</div>
                  <h3 className="text-xl font-bold mb-3">{aircraft.name}</h3>
                  <p className="text-gray-400">{aircraft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Fly?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download Airplane Simulator and experience the most advanced flight simulation available
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-gray-400">Linux</h3>
              <p className="text-gray-400 mb-6">
                Coming soon
              </p>
              <button disabled className="w-full bg-gray-600 cursor-not-allowed px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Coming Soon</span>
              </button>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-600">
              <h3 className="text-2xl font-bold mb-4">Windows</h3>
              <p className="text-gray-400 mb-6">
                Download the latest version for Windows
              </p>
              <a 
                href="https://github.com/Tabulater/Airplane-Simulator/releases/download/v1.0.0/Airplane.Simulator.exe.zip" 
                className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download for Windows</span>
              </a>
              <div className="mt-4 text-sm text-gray-500">
                <p>Build from source available</p>
                <p className="mt-1">See documentation for details</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Minimum Requirements</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• OpenGL 3.0 compatible graphics card</li>
                  <li>• 4 GB RAM</li>
                  <li>• 2 GB available disk space</li>
                  <li>• Sound card (OpenAL compatible)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Dependencies</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Qt5</li>
                  <li>• OpenSceneGraph</li>
                  <li>• OpenAL & ALUT</li>
                  <li>• libxml2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Airplane Simulator</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <div className="text-gray-400 text-sm">
                Built with OpenSceneGraph & Qt
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Airplane Simulator. High-fidelity flight simulation for enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;