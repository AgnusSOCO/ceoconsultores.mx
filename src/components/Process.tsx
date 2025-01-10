import React from 'react';
import { Search, PenTool, Wrench, LineChart } from 'lucide-react';

const steps = [
  {
    title: 'Evaluación',
    description: 'Realizamos un análisis exhaustivo de sus operaciones actuales.',
    icon: Search,
  },
  {
    title: 'Desarrollo de Estrategia',
    description: 'Desarrollamos estrategias personalizadas para abordar las ineficiencias identificadas.',
    icon: PenTool,
  },
  {
    title: 'Implementación',
    description: 'Implementamos las soluciones propuestas en colaboración con su equipo.',
    icon: Wrench,
  },
  {
    title: 'Monitoreo',
    description: 'Monitoreamos el progreso y realizamos los ajustes necesarios para asegurar el éxito.',
    icon: LineChart,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-gray-600">
            Un enfoque sistemático para transformar su negocio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="mx-auto w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-blue-200"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;