import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-black/90 z-10" />
      
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105 bg-grid-pattern"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
          animation: 'subtle-zoom 20s infinite alternate',
        }}
      />

      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full 
                      blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-700/20 rounded-full 
                      blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-900/20 rounded-full 
                      blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-20 px-4 pt-16 pb-32 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with gradient and animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8
                       leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent
                           inline-block">
              Potenciamos su Negocio
            </span>
            <br className="hidden sm:block" />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90 
                           inline-block font-medium mt-2 sm:mt-4">
              Con Operaciones Eficientes
            </span>
          </h1>

          {/* Animated subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 
                      mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300 
                      leading-relaxed px-4 sm:px-0">
            Transformamos ineficiencias en rentabilidad para impulsar el crecimiento de su empresa.
          </p>

          {/* CTA buttons with hover effects */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center 
                        gap-4 sm:gap-6 animate-fade-in-up animation-delay-600 px-4 sm:px-0">
            <a
              href="#contact"
              className="group px-6 sm:px-8 py-4 bg-white text-blue-900 rounded-lg 
                       font-bold hover:bg-blue-50 transform hover:-translate-y-1 transition-all
                       duration-300 flex items-center justify-center gap-2 shadow-lg 
                       hover:shadow-xl active:scale-95"
            >
              Contáctenos Hoy
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-6 sm:px-8 py-4 bg-transparent text-white border-2 
                       border-white/30 rounded-lg font-bold hover:bg-white/10 transform 
                       hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20
                 group flex flex-col items-center gap-2 animate-bounce hover:animate-none"
        aria-label="Scroll to services"
      >
        <span className="text-white/80 text-sm font-medium group-hover:text-white
                      transition-colors">
          Descubra Más
        </span>
        <ChevronDown className="h-8 w-8 text-white/80 group-hover:text-white
                             transition-colors" />
      </button>
    </div>
  );
}

export default Hero;
