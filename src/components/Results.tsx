import React from 'react';

const testimonials = [
  {
    quote: "CEO Consultores transformó nuestras operaciones, resultando en un incremento del 15% en ventas.",
    author: "Director General",
    company: "Empresa Manufacturera",
  },
  {
    quote: "Obtuvimos la certificación ISO 9001/2008 gracias a su guía experta y metodología probada.",
    author: "Gerente de Calidad",
    company: "Empresa de Servicios",
  },
  {
    quote: "La optimización de nuestra cadena de suministro redujo costos operativos en un 20%.",
    author: "Director de Operaciones",
    company: "Empresa Logística",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros Resultados</h2>
          <p className="text-lg opacity-90">
            Historias de éxito que demuestran nuestro impacto
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 p-8 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;