export default function Footer() {
    return (
      <footer className="bg-gray-500 text-gray-300 py-12 px-10">
  
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
  
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

                <img
                    src="/images/maplogo.png"
                    alt="mapyourown Logo"
                    className="w-50 h-11"
                />
            </div>
        
  
            <p className="text-sm">
              Building scalable web applications, cloud solutions,
              and AI-powered software for modern businesses.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
  
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#tech" className="hover:text-white">Tech Stack</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-white">Term and Conditions</a></li>

            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Services
            </h3>
  
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Cloud Architecture</li>
              <li>AI Integration</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
  
          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Connect
            </h3>
  
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
  
              <li>
                <a href="#" className="hover:text-white">
                  GitHub
                </a>
              </li>
  
              <li>
                <a href="https://x.com/mapyourown" className="hover:text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom */}
  
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Mapyourown. All rights reserved.
        </div>
  
      </footer>
    );
  }