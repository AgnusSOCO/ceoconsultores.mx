import React, { useEffect, useRef } from 'react';
import { BarChart3, Building2, FileSpreadsheet, Settings2, Users2, LineChart } from 'lucide-react';

const services = [
  {
    title: 'Mejora de Eficiencia Operacional',
    description: 'Mejoramos su rentabilidad a través de operaciones más eficientes.',
    icon: BarChart3,
  },
  {
    title: 'Optimización de Cadena de Valor',
    description: 'Optimizamos su cadena de valor y suministro para aumentar la eficiencia.',
    icon: LineChart,
  },
  {
    title: 'Desarrollo de KPIs',
    description: 'Creamos KPIs y tableros de control para una mejor toma de decisiones.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Modernización Estructural',
    description: 'Modernizamos su estructura organizacional para satisfacer las demandas actuales del mercado.',
    icon: Building2,
  },
  {
    title: 'Implementación de Sistemas Certificados',
    description: 'Implementamos sistemas certificables para asegurar la calidad y el cumplimiento.',
    icon: Settings2,
  },
  {
    title: 'Rediseño de Políticas',
    description: 'Rediseñamos políticas para alinearlas con sus objetivos empresariales.',
    icon: Users2,
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => observer.observe(card));

    if (sectionRef.current) {
      sectionRef.current.classList.add('section-fade-in');
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600">
            Soluciones integrales para optimizar su negocio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card section-fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <service.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;