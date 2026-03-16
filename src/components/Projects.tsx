const projects = [
    {
      name: "Restaurant Discovery Platform",
      tech: "React • Spring Boot • AWS"
    },
    {
      name: "AI Customer Support Bot",
      tech: "OpenAI • NodeJS • MongoDB"
    },
    {
      name: "Educational Platform",
      tech: "ReactJS • Spring boot • Stripe • MySQL"
    },
    {
        name: "Dataservices development and support",
        tech: "Elasticsearch • Kafka • Cassandra • Elasticache"
    },
    {
        name: "DevOps and Platform Support",
        tech: "Pipeline Design • Automation • Terraform • Kubernetes • AWS Migraition"
    },
    {
        name: "Mentoring and Training",
        tech: "Programming • Database • AI integration • Cloud architecture"
    }

  ]
  
  export default function Projects() {
    return (
      <section id="projects" className="bg-gray-100 py-20 px-10">
  
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>
  
        <div className="grid md:grid-cols-3 gap-8">
  
          {projects.map((p, i) => (
            <div key={i} className="bg-white p-6 shadow rounded-lg">
  
              <h3 className="text-xl font-semibold">
                {p.name}
              </h3>
  
              <p className="text-gray-600 mt-2">
                {p.tech}
              </p>
  
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }