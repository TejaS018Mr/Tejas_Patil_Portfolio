import { RevealOnScroll } from "../RevealOnScroll";
import { TypeAnimation } from 'react-type-animation';
import { SocialLinks } from "../SocialLinks";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(#0000_1px,#000_1px)] bg-[size:20px_20px] opacity-50" />
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <img
                src="/Tejas_Patil_Portfolio/images/tejas-profile-image.jpg"
                alt="Tejas Patil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-black"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right hover:scale-105 transition-transform cursor-default">
            Hi, I'm Tejas Patil
          </h1>

          <TypeAnimation
            sequence={[
              'Full-Stack Java Developer',
              2000,
              'Web Application Developer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-3xl text-gray-300 mb-4"
            repeat={Infinity}
          />

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack java developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <SocialLinks />
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="#contact"
              className="group border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 relative overflow-hidden"
            >
              Contact Me
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Interactive Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <svg 
          className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
