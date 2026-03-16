export default function Hero() {
    return (
      <section className="text-center py-24 bg-gray-100">
  
        <h1 className="text-5xl font-bold mb-6">
          Build Scalable Software for Your Business
        </h1>
  
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Full-stack development, cloud architecture, and AI integration
          to help startups and companies grow faster.
        </p>
  
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          <a
            href="#projects"
            className="bg-blue-600 text-white rounded-lg"
            >
            View Projects
            </a>
          </button>
  
          <button className="bg-blue-600  px-6 py-3 rounded-lg">
          <a
            href="#contact"
            className="bg-blue-600 text-white rounded-lg"
            >
                Book Consultation
          </a>
          </button>
        </div>
  
      </section>
    );
  }