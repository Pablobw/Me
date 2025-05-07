import React from 'react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800 animated-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-4">
            ¿Tienes una idea o problema que resolver?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hablemos. Estoy aquí para ayudarte a convertir tu idea en realidad.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass rounded-xl shadow-xl overflow-hidden hover-lift">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 bg-gradient-to-br from-blue-600 to-teal-500 text-white">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <p className="mb-8 opacity-90">
                Trabajo de forma profesional, comprometida y transparente. Me adapto a lo que necesitas y te acompaño desde la idea hasta tener tu sistema funcionando.
              </p>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <a href="mailto:contacto@pablobarrera.dev" className="hover:underline">
                    contacto@pablobarrera.dev
                  </a>
                </div>
                <div className="flex items-center group">
                  <MessageCircle className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <span>Respondo en 24-48 horas</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white/80 dark:bg-gray-900/80">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6">
                Envíame un mensaje
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Enviar mensaje
                  <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;