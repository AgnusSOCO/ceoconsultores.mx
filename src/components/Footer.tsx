import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Resultados', href: '#results' },
    { name: 'Proceso', href: '#process' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CEO Consultores</h3>
            <p className="text-gray-400">
              Mejorando la rentabilidad de su negocio a través de operaciones más eficientes.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contáctenos</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-blue-400" />
                <p>
                  Insurgentes Sur 2104,<br />
                  Col. San Ángel-Chimalistac,<br />
                  Álvaro Obregón, Ciudad de México,<br />
                  C.P. 01070 México
                </p>
              </div>
              <div className="space-y-2">
                <a href="tel:+525559111739" className="flex items-center hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-2 text-blue-400" />
                  (55) 5911 1739
                </a>
                <a href="tel:+525570288499" className="flex items-center hover:text-white transition-colors">
                  <Phone className="h-5 w-5 mr-2 text-blue-400" />
                  (55) 7028 8499
                </a>
              </div>
              <a href="mailto:empresa-rentable@ceoconsultores.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                empresa-rentable@ceoconsultores.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CEO Consultores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;