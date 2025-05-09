import React from 'react';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const emailAddress = 'pablobarreraw@gmail.com';
  const subject = 'Contacto desde Portfolio';
  const body = 'Hola Pablo,\n\nMe gustaría contactarte para...';

  const handleEmailClick = (service: 'default' | 'gmail' | 'outlook' | 'yahoo') => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    switch (service) {
      case 'gmail':
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        break;
      case 'outlook':
        window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        break;
      case 'yahoo':
        window.open(`https://compose.mail.yahoo.com/?to=${emailAddress}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        break;
      default:
        window.location.href = mailtoLink;
    }
  };

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
                  <a href={`mailto:${emailAddress}`} className="hover:underline">
                    {emailAddress}
                  </a>
                </div>
                <div className="flex items-center group">
                  <MessageCircle className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                  <span>Respondo en 24-48 horas</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white/80 dark:bg-gray-900/80 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6 text-center">
                Envíame un correo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
                Elige tu servicio de correo preferido
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <button
                  onClick={() => handleEmailClick('gmail')}
                  className="group inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Gmail
                  <ExternalLink className="ml-2 transform transition-transform group-hover:translate-x-1" size={16} />
                </button>
                <button
                  onClick={() => handleEmailClick('outlook')}
                  className="group inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Outlook
                  <ExternalLink className="ml-2 transform transition-transform group-hover:translate-x-1" size={16} />
                </button>
                <button
                  onClick={() => handleEmailClick('yahoo')}
                  className="group inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Yahoo
                  <ExternalLink className="ml-2 transform transition-transform group-hover:translate-x-1" size={16} />
                </button>
                <button
                  onClick={() => handleEmailClick('default')}
                  className="group inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Otro
                  <Mail className="ml-2 transform transition-transform group-hover:translate-x-1" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;