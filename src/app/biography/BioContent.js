export default function BiographyPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Biography</h1>

      {/* Professional Bio */}
      <section className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
        <img
          src="/images/professional.jpg"
          alt="Professional portrait"
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Professional</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm Garrett Crumrine — an HPC researcher and AI developer with a strong background in containerized computing,
            large-scale model training, and scientific research. I’ve published undergraduate research in Alzheimer’s detection,
            contributed to the design of high-performance cluster environments, and developed AI tools for industries like oil & gas and healthcare.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-6 border-t border-gray-600" />

      {/* Personal Bio */}
      <section className="flex flex-col md:flex-row-reverse gap-8 items-start bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg">
        <img
          src="/images/personal.jpg"
          alt="Family or casual photo"
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Personal</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a husband and father of two, deeply passionate about faith, family, and helping others grow. I love meaningful conversations
            about love, life, and success, and I'm inspired by the idea that God is love. Outside of research and coding, I enjoy gaming,
            sharing walkthroughs, and encouraging others to pursue their potential.
          </p>
        </div>
      </section>
    </div>
  );
}
