import React from 'react';

interface TechStackItem {
  category: string;
  items: string[];
  color: string;
  gradient: string;
}

const techStacks: TechStackItem[] = [
  {
    category: 'Frontend',
    items: ['React', 'Flutter'],
    color: 'from-blue-500 to-blue-700',
    gradient: 'from-blue-500/10 to-blue-700/10',
  },
  {
    category: 'Backend',
    items: ['Go', 'Node.js', 'Express'],
    color: 'from-emerald-500 to-emerald-700',
    gradient: 'from-emerald-500/10 to-emerald-700/10',
  },
  {
    category: 'Bases de datos',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    color: 'from-amber-500 to-amber-700',
    gradient: 'from-amber-500/10 to-amber-700/10',
  },
  {
    category: 'Infraestructura',
    items: ['Docker', 'AWS', 'Render', 'GitHub'],
    color: 'from-purple-500 to-purple-700',
    gradient: 'from-purple-500/10 to-purple-700/10',
  },
];

const otherTechnologies = [
  'JWT', 'OAuth', 'Email automation', 'Error handling', 'Clean architecture', 'SOAP/REST'
];

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-4">
            Tecnologías que manejo
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un conjunto completo de herramientas para crear soluciones robustas y escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techStacks.map((stack, index) => (
            <div 
              key={index} 
              className="group hover-lift bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${stack.color}`}></div>
              <div className={`p-6 bg-gradient-to-br ${stack.gradient} dark:bg-opacity-10`}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500 transition-all">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover-lift">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6 text-center">
            Otras tecnologías y habilidades
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;