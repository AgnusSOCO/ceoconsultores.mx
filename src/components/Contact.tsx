import React, { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import Map, { Marker, NavigationControl, FullscreenControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic29jb3B3YSIsImEiOiJjbTVyNTl4a3cwNzhyMmlvdG90bmp1OHUxIn0.L18aImtC1DuXyeoWTHZXDg';
const LOCATION = {
  latitude: 19.3476,
  longitude: -99.1895,
  zoom: 15.5,
  pitch: 60,
  bearing: 30
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const [viewState, setViewState] = useState(LOCATION);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        position: '',
        email: '',
        whatsapp: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onMapLoad = useCallback(() => {
    const map = document.querySelector('.mapboxgl-map')?.__mbx;
    if (map) {
      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 14,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      });
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctenos</h2>
          <p className="text-lg text-gray-600">
            Estamos listos para ayudar a transformar su negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    onChange={handleChange}
                    value={formData.company}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    onChange={handleChange}
                    value={formData.position}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico Profesional *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                             focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                  WhatsApp (opcional)
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  id="whatsapp"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                           focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  onChange={handleChange}
                  value={formData.whatsapp}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                           focus:ring-2 focus:ring-blue-200 focus:border-blue-400
                           resize-none"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>

              <div className="flex items-center text-sm text-gray-600 mt-2">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>Los campos marcados con * son obligatorios</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-900 text-white px-8 py-4 rounded-lg font-bold
                          flex items-center justify-center space-x-2 transform transition-all
                          duration-300 hover:bg-blue-800 focus:outline-none focus:ring-4
                          focus:ring-blue-200 ${
                            isSubmitting
                              ? 'opacity-75 cursor-not-allowed'
                              : 'hover:-translate-y-0.5 active:scale-95'
                          }`}
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent
                                rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-800 rounded-lg p-4 flex items-center
                              animate-fade-in">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-800 rounded-lg p-4 flex items-center
                              animate-fade-in">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      Error al enviar el mensaje. Por favor, intente nuevamente.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <Mail className="h-6 w-6 text-blue-900 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:empresa-rentable@ceoconsultores.com" 
                       className="text-gray-600 hover:text-blue-900 transition-colors">
                      empresa-rentable@ceoconsultores.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Phone className="h-6 w-6 text-blue-900 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Teléfonos</p>
                    <div className="space-y-1">
                      <a href="tel:+525559111739" 
                         className="block text-gray-600 hover:text-blue-900 transition-colors">
                        (55) 5911 1739
                      </a>
                      <a href="tel:+525570288499" 
                         className="block text-gray-600 hover:text-blue-900 transition-colors">
                        (55) 7028 8499
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start group">
                  <MapPin className="h-6 w-6 text-blue-900 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">
                      Insurgentes Sur 2104,<br />
                      Col. San Ángel-Chimalistac,<br />
                      Álvaro Obregón, Ciudad de México,<br />
                      C.P. 01070 México
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="h-[400px] rounded-lg shadow-lg overflow-hidden relative">
              <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapboxAccessToken={MAPBOX_TOKEN}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/dark-v11"
                onLoad={onMapLoad}
                terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
              >
                <Marker
                  longitude={LOCATION.longitude}
                  latitude={LOCATION.latitude}
                  anchor="bottom"
                >
                  <div className="relative group">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full 
                                  bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg 
                                  opacity-0 group-hover:opacity-100 transition-all duration-300 
                                  whitespace-nowrap z-10">
                      <div className="text-sm space-y-1">
                        <p className="font-semibold text-blue-900">CEO Consultores</p>
                        <p className="text-gray-600">Insurgentes Sur 2104</p>
                        <p className="text-gray-600">Col. San Ángel-Chimalistac</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center
                                  transform group-hover:scale-110 transition-transform duration-300
                                  shadow-lg border-2 border-white">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </Marker>
                <NavigationControl position="bottom-right" />
                <FullscreenControl position="top-right" />
                
                {/* Custom map controls */}
                <div className="absolute top-4 left-4 space-y-2">
                  <button
                    onClick={() => setViewState({ ...LOCATION, zoom: 18 })}
                    className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg
                             text-sm font-medium text-blue-900 hover:bg-white
                             transition-all duration-300 hover:scale-105"
                  >
                    Acercar a la Oficina
                  </button>
                  <button
                    onClick={() => setViewState(LOCATION)}
                    className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg
                             text-sm font-medium text-blue-900 hover:bg-white
                             transition-all duration-300 hover:scale-105"
                  >
                    Vista General
                  </button>
                </div>
              </Map>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;