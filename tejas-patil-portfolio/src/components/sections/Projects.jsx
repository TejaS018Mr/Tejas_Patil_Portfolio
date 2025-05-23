import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "Designed and implemented a full-stack solution for an e-commerce platform, featuring product management, user authentication, and order processing. Utilized Spring Boot for backend services and JavaScript for responsive front-end development.",
      technologies: ["Java", "Spring-Boot", "Hibernate", "MySQl"],
      githubLink: "https://github.com/TejaS018Mr/Interactive-Translation-Web-Application"
    },
    {
      title: "Interactive Captioning and Translation Web Application",
      description: "Built a multi-language application to enhance accessibility and user engagement through captioning and translation features.",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      githubLink: "https://github.com/TejaS018Mr/Interactive-Translation-Web-Application"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                        hover:-translate-y-0.5 transform transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg 
                      bg-blue-500/10 px-4 py-2 text-blue-400 transition-all duration-300
                      hover:bg-blue-500/20 hover:text-blue-300 hover:-translate-y-0.5
                      hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View Project
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 
                      transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
