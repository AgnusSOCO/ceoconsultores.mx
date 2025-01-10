import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5215518666046&text&type=phone_number&app_absent=0";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 rounded-2xl shadow-2xl 
                      transform transition-all duration-500 scale-100 origin-bottom-right
                      bg-gradient-to-br from-blue-900 to-blue-950 overflow-hidden">
          {/* Header */}
          <div className="p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">CEO Consultores</h3>
                <p className="text-xs text-blue-200">Normalmente responde en 1 hora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-6 bg-gradient-to-br from-blue-900/50 to-blue-950/50">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-white text-sm leading-relaxed">
                ¡Hola! Estamos aquí para ayudarte a mejorar la eficiencia de tu negocio. 
                ¿Cómo podemos asistirte hoy?
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-3 px-4 
                       bg-white text-blue-900 rounded-lg font-medium 
                       hover:bg-blue-50 transition-all duration-300
                       transform hover:-translate-y-0.5"
            >
              Iniciar conversación
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-center text-blue-200">
              Responderemos a tu mensaje lo antes posible
            </p>
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center
                   bg-gradient-to-r from-blue-900 to-blue-800
                   text-white p-4 rounded-full shadow-lg
                   hover:shadow-blue-900/20 hover:shadow-2xl
                   transition-all duration-300
                   ${isOpen ? 'scale-90' : 'scale-100 hover:scale-110'}
                   focus:outline-none focus:ring-4 focus:ring-blue-900/30`}
        aria-label="Chat on WhatsApp"
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-transparent
                      group-hover:opacity-50 transition-opacity duration-300" />
        
        <MessageCircle className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform" />
        
        {/* Ping animation */}
        <span className="absolute -top-1 -right-1 h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
        </span>
      </button>
    </div>
  );
}

export default WhatsAppWidget;