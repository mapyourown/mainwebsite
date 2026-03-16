const services = [
    {
      title: "Web Development",
      desc: "Modern React and scalable backend APIs."
    },
    {
      title: "Cloud Architecture",
      desc: "AWS infrastructure and Migration."
    },
    
    {
      title: "AI Integration",
      desc: "Automation and AI-powered applications."
    },
    {
      title: "CRM Integration",
      desc: "Integrate with Salesforce, Twilio, HubSpot, and more."
    }
  ]
  
  export default function Services() {
    return (
      <section id="services" className="py-20 px-10  bg-gray-50">
  
        <h2 className="text-3xl font-bold text-center mb-12">
          Services
        </h2>
  
        <div className="grid md:grid-cols-4 gap-8">
  
          {services.map((s, i) => (
            <div key={i} className="p-6 border rounded-lg">
  
              <h3 className="text-xl font-semibold mb-3">
                {s.title}
              </h3>
  
              <p className="text-gray-600">
                {s.desc}
              </p>
  
            </div>
          ))}
  
        </div>
      </section>
    );
  }