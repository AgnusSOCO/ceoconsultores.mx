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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      {/* Contact info bar - hidden on mobile */}
      <div className="hidden sm:block bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end space-x-6 text-sm">
          <a href="mailto:empresa-rentable@ceoconsultores.com" 
             className="flex items-center hover:text-blue-200 transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            empresa-rentable@ceoconsultores.com
          </a>
          <div className="flex items-center space-x-4">
            <a href="tel:+525559111739" 
               className="flex items-center hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              (55) 5911 1739
            </a>
            <a href="tel:+525570288499" 
               className="flex items-center hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              (55) 7028 8499
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${
              isScrolled ? 'from-blue-900 to-blue-700' : 'from-white to-blue-200'
            } bg-clip-text text-transparent transition-colors duration-300`}>
              CEO Consultores
            </span>
          </div>

          {/* Desktop Navigation */}
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
              className={`ml-4 px-6 py-2 rounded-lg font-bold transition-all duration-300
                        transform hover:-translate-y-0.5 active:translate-y-0 ${
                isScrolled
                  ? 'bg-blue-900 text-white hover:bg-blue-800'
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
            >
              Contáctenos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'hover:bg-blue-50 text-gray-900'
                : 'hover:bg-white/10 text-white'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg transform 
                   transition-transform duration-300 ease-in-out md:hidden ${
                     isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                   }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="bg-blue-900 text-white p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold">CEO Consultores</span>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-white/10 rounded-full transition-colors
                         transform hover:rotate-90 duration-300"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <a href="mailto:empresa-rentable@ceoconsultores.com" 
                 className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                 onClick={closeMenu}>
                <Mail className="h-5 w-5" />
                <span>empresa-rentable@ceoconsultores.com</span>
              </a>
              <div className="space-y-2">
                <a href="tel:+525559111739" 
                   className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                   onClick={closeMenu}>
                  <Phone className="h-5 w-5" />
                  <span>(55) 5911 1739</span>
                </a>
                <a href="tel:+525570288499" 
                   className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                   onClick={closeMenu}>
                  <Phone className="h-5 w-5" />
                  <span>(55) 7028 8499</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="p-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-lg font-medium rounded-lg
                            transition-colors duration-300
                            ${activeSection === item.href.replace('#', '')
                              ? 'bg-blue-50 text-blue-900'
                              : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        onClick={closeMenu}
                        className="block px-4 py-2 text-gray-600 rounded-lg
                                 hover:bg-gray-50 transition-colors"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-4 py-3 mt-4 text-center text-white bg-blue-900
                       rounded-lg font-bold hover:bg-blue-800 transition-colors
                       active:scale-95"
            >
              Contáctenos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
