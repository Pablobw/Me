import React from 'react';
import { Code, Settings, ArrowRightLeft, Smartphone, Database, Server, BrainCircuit, MessageSquareText } from 'lucide-react';

const serviceItems = [
  {
    icon: <Settings size={28} />,
    title: 'Desarrollo de sistemas personalizados',
    description: 'CRM, ERP, dashboards y otras soluciones digitales a medida para tu empresa.',
  },
  {
    icon: <Code size={28} />,
    title: 'Automatización de procesos',
    description: 'Automatiza tareas repetitivas para ahorrar tiempo y reducir errores humanos.',
  },
  {
    icon: <ArrowRightLeft size={28} />,
    title: 'Integración de APIs externas',
    description: 'Pagos, SSO, logística y servicios externos para extender las capacidades de tu sistema.',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Aplicaciones móviles',
    description: 'Desarrollo de apps con Flutter para Android e iOS con diseño nativo y alta performance.',
  },
  {
    icon: <Server size={28} />,
    title: 'Sistemas backend robustos',
    description: 'Arquitecturas escalables y de alto rendimiento con Go o Node.js.',
  },
  {
    icon: <Database size={28} />,
    title: 'Diseño de bases de datos',
    description: 'Modelado de datos eficiente en sistemas relacionales y NoSQL.',
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'Consultoría técnica',
    description: 'Asesoramiento para transformar tu idea en una realidad digital.',
  },
  {
    icon: <MessageSquareText size={28} />,
    title: 'Acompañamiento profesional',
    description: 'Trabajo comprometido y transparente, adaptándome a tus necesidades.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-4">
            ¿Qué puedo hacer por ti?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Me especializo en el diseño e implementación de sistemas eficientes, integraciones, automatización y desarrollo de aplicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover-lift border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;