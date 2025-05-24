import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <p className="text-gray-400">
              <a href="https:gmail.com" className="hover:text-blue-500 transition-colors">
                tejaspatilt18@gmail.com
              </a>
            </p>
            {/* <p className="text-gray-400">
              <a href="tel:+1234567890" className="hover:text-blue-500 transition-colors">
                
              </a>
            </p> */}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <SocialLinks className="md:justify-end" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Tejas Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};