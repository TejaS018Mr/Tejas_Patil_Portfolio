export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/tejas-patil-portfolio/Tejas_Patil_Resume_Acqueon.pdf';
    link.download = 'Tejas_Patil_Resume_Acqueon.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/tejas-patil-portfolio/Tejas_Patil_Resume_Acqueon.pdf', '_blank');
  };

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Resume</h2>
        <div className="flex flex-col items-center space-y-6">
          <p className="text-gray-300 text-center max-w-2xl">
            View or download my resume to learn more about my professional experience,
            skills, and qualifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg 
                bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-white transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                Download Resume
                <svg 
                  className="h-5 w-5 transform group-hover:translate-y-0.5 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"/>
            </button>

            <button
              onClick={handleView}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg 
                bg-blue-500/10 px-8 py-3 text-blue-400 transition-all duration-300
                hover:bg-blue-500/20 hover:text-blue-300 hover:-translate-y-0.5
                hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                View Resume
                <svg 
                  className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 
                transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};