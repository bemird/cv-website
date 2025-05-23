import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      <main className="backdrop-blur-sm bg-white/80 dark:bg-black/60 p-6 max-w-3xl mx-auto space-y-8 rounded-xl shadow-lg mt-10">
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
          <p>📍 Ankara, Turkey</p>
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
            <li>Held NATO security clearance</li>
            <li>Health and Safety training</li>
          </ul>
          <p className="font-semibold mt-2">METU KOVAN Lab — Research Intern (2019)</p>
          <ul className="list-disc list-inside ml-4">
            <li>Worked on drone swarm path planning using ROS</li>
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
            <li>Nokia IP Fundamentals (4A0-100), OSPF Routing (4A0-113)</li>
            <li>Nokia OSPF Routing Protocol Exam 4A0-113</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Linux, Red Hat, Networking (Routing, Switching, Subnetting)</li>
            <li>VMware, KVM, Nagios</li>
            <li>Python, SQL, Docker, Kubernetes</li>
            <li>AWS Lambda, RDS (Cloud-native experience)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
