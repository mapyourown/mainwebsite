import reactLogo from "../assets/tech/React.png"
import nodeLogo from "../assets/tech/Nodejs.png"
import awsLogo from "../assets/tech/AWS.png"
import dockerLogo from "../assets/tech/Docker.png"
import kubernetesLogo from "../assets/tech/Kubernetes.png"
import postgresLogo from "../assets/tech//PostgresSQL.png"
import mysqlLogo from "../assets/tech/MySQL.png"
import springboot from "../assets/tech/Spring.png"


export default function TechStack() {
    const stack = [
        { name: "React", logo: reactLogo },
        { name: "Node.js", logo: nodeLogo },
        { name: "AWS", logo: awsLogo },
        { name: "Spring Boot", logo: springboot },
        { name: "Docker", logo: dockerLogo },
        { name: "Kubernetes", logo: kubernetesLogo },
        { name: "PostgreSQL", logo: postgresLogo },
        { name: "MySQL", logo: mysqlLogo }
      ];
  
    return (
      <section className="py-20 text-center  bg-gray-50">
  
        <h2 className="text-3xl font-bold mb-10">
          Tech Stack
        </h2>
  
        <div className="flex justify-center flex-wrap gap-6">
  
        {stack.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center m-4 hover:scale-110 transition"
          >

            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />

            <p className="mt-3 text-gray-600">
              {tech.name}
            </p>

          </div>
        ))}

  
        </div>
  
      </section>
    );
  }