import Image from "next/image";
import TopNav from "../components/TopNav";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      <TopNav />

      <main className="backdrop-blur-sm bg-white/80 dark:bg-black/60 p-4 max-w-3xl mx-auto space-y-6 rounded-xl shadow-lg mt-10 mb-6 text-left items-start text-start">
        <div className="flex items-center gap-6">
          <Image
            src="/boran.jpg"
            alt="Boran Demir"
            width={120}
            height={120}
            className="rounded-full border"
          />
          <div>
            <h1 className="text-4xl font-bold">Boran Demir</h1>
            <p className="text-lg">IT Professional | Systems Engineer | DevOps Enthusiast</p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>📍 Ankara, Turkiye</p>
          <p>📧 boran.demir@hotmail.com</p>
          <p>📞 +90 543 815 4377</p>
          <p>🔗 <a href="https://www.linkedin.com/in/boran-demir" className="text-blue-600">LinkedIn</a></p>
          <p>🔗 <a href="https://github.com/bemird" className="text-blue-600">GitHub</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>
            With over 5 years of experience in diverse multinational, multicultural, and multilingual environments,
            I specialize in Red Hat system administration, virtualization (VMware/KVM), and IP networking. Formerly at Nokia,
            I supported enterprise infrastructure and have experience in Docker, Kubernetes, and DevOps tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="font-semibold">Nokia — Systems Engineer (2020–2024)</p>
          <ul className="list-disc list-inside ml-4">
            <li>Managed Red Hat systems for EMEA clients</li>
            <li>Administered VMware and KVM virtualization</li>
            <li>Monitored servers with Nagios</li>
            <li>Gained skills in Docker & Kubernetes</li>
            <li>Applied solid networking knowledge including IP addressing, routing, and subnetting</li>
            <li>Held NATO security clearance</li>
            <li>Health and Safety training</li>
          </ul>
          <p className="font-semibold mt-2">METU KOVAN Lab — Research Intern (2019)</p>
          <ul className="list-disc list-inside ml-4">
            <li>Worked on swarm drone project shortest distance path planning using ROS</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>DevOps CV Website Project:</strong>  
              Built a personal CV site using Next.js, FastAPI, and Tailwind CSS, containerized with Docker, deployed on AWS EC2.  
              Implemented CI/CD via GitHub Actions with SSH deploy, and explored Kubernetes (Minikube, K9s, Dashboard) for orchestration and monitoring.  
              🔗 <a href="https://borandemir.com" className="text-blue-600">borandemir.com</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Education</h2>
          <ul className="list-disc list-inside ml-4">
            <li>MSc in Software Engineering — Middle East Technical University, Turkiye (GPA: 3.5/4)</li>
            <li>HDip in Computing — TUS Athlone, Ireland (1.1-First Class Honours Distinction)</li>
            <li>Bachelor of Engineering in Civil Engineering — TUS Athlone, Ireland</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Nokia Network Routing Specialist I (NRS I)</li>
            <li>Nokia IP Networks and Services Fundamentals (4A0-100)</li>
            <li>Nokia OSPF Routing Protocol Exam (4A0-113)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Linux, Red Hat, Networking (Routing, Switching, Subnetting)</li>
            <li>VMware, KVM, Nagios</li>
            <li>Python, SQL, OracleDB, Docker, Kubernetes</li>
            <li>Amazon Web Services (AWS)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
