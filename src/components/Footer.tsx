import { Mail, Linkedin, Github, Dribbble, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200/50 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          <h3 className="text-2xl">Let's work together</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          
          <div className="flex flex-col items-center space-y-2">
            <a href="mailto:kevarickdesign@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={20} />
              <span>kevarickdesign@gmail.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Phone size={20} />
              <span>+94 760519027</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Dribbble size={24} />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2025 Kevarick UX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}