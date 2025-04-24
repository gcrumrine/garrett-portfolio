export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-6 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-4xl font-bold">Garrett Crumrine</h1>
        <p className="text-lg mt-1">HPC Researcher | AI Developer | Computer Scientist</p>
      </header>

      <main className="p-8 space-y-12">
        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I'm an HPC-focused researcher and AI developer with experience in cluster design, scientific
            containerization, and applied machine learning. I’ve published undergraduate research,
            contributed to computational biology projects, and developed AI tools for the oil & gas industry.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ORCA containerization for SLURM-based HPC clusters</li>
            <li>ML-driven oil well drilling assistant using geological data</li>
            <li>Alzheimer’s detection from MRI using ResNet architectures</li>
          </ul>
        </section>

        {/* Publications Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Publications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Crumrine, G. (2024). Deep Learning for Alzheimer’s Classification using MRI Data. arXiv preprint
              arXiv:2405.12345.
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: garrett.crumrine@email.com</p>
          <p>GitHub: github.com/garrettcrumrine</p>
          <p>LinkedIn: linkedin.com/in/garrettcrumrine</p>
        </section>
      </main>

      <footer className="p-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Garrett Crumrine. All rights reserved.
      </footer>
    </div>
  );
}
