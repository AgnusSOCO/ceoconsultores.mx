import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#' },
    { 
      name: 'Servicios', 
      href: '#services',
      submenu: [
        { name: 'Eficiencia Operacional', href: '#services' },
        { name: 'Cadena de Valor', href: '#services' },
        { name: 'Desarrollo de KPIs', href: '#services' },
      ]
    },
    { name: 'Resultados', href: '#results' },
    { name: 'Proceso', href: '#process' },
    { name: 'Contacto', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const sections = navigation.map(item => item.href.replace('#', '')).filter(Boolean);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="flex justify-center items-center py-2 px-4 overflow-hidden">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 animate-fade-in">
              <a
                href="mailto:empresa-rentable@ceoconsultores.com"
                className="group flex items-center hover:text-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                <span className="relative overflow-hidden">
                  <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                    empresa-rentable@ceoconsultores.com
                  </span>
                  <span className="absolute top-0 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    empresa-rentable@ceoconsultores.com
                  </span>
                </span>
              </a>
              <div className="flex items-center space-x-6">
                <a
                  href="tel:+525559111739"
                  className="group flex items-center hover:text-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="relative overflow-hidden">
                    <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                      (55) 5911 1739
                    </span>
                    <span className="absolute top-0 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      ¡Llámanos!
                    </span>
                  </span>
                </a>
                <a
                  href="tel:+525570288499"
                  className="group flex items-center hover:text-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="relative overflow-hidden">
                    <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">
                      (55) 7028 8499
                    </span>
                    <span className="absolute top-0 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      ¡Contáctanos!
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className={`text-3xl font-bold bg-gradient-to-r ${
              isScrolled ? 'from-blue-900 to-blue-700' : 'from-white to-blue-200'
            } bg-clip-text text-transparent transition-colors duration-300`}>
              CEO Consultores
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                            flex items-center ${
                              isScrolled
                                ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                                : 'text-white hover:bg-white/10'
                            } ${
                              activeSection === item.href.replace('#', '') 
                                ? isScrolled ? 'bg-blue-50 text-blue-900' : 'bg-white/20'
                                : ''
                            }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg 
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-300 transform origin-top-left 
                                group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 
                                   hover:text-blue-900 transition-colors"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className={`ml-4 px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                isScrolled
                  ? 'bg-blue-900 text-white hover:bg-blue-800'
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
            >
              Contáctenos
            </a>
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'hover:bg-blue-50 text-gray-900'
                : 'hover:bg-white/10 text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={`block px-4 py-2 text-base font-medium rounded-lg
                            transition-colors duration-300
                            ${activeSection === item.href.replace('#', '')
                              ? 'bg-blue-50 text-blue-900'
                              : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-600 rounded-lg
                                 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;