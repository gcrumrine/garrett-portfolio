'use client';
import { useState } from 'react';
import certifications from '@/data/certifications';

export default function ResumePage() {
  const [activeImage, setActiveImage] = useState(null);
  const [activePDF, setActivePDF] = useState(null);

  const closeModal = () => {
    setActiveImage(null);
    setActivePDF(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Resume & Certifications</h1>

      {/* Resume Viewer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">My Resume</h2>
        <iframe
          src="/files/resume.pdf"
          className="w-full h-[800px] border border-gray-700 rounded-lg"
        ></iframe>
        <a
          href="/files/resume.pdf"
          download
          className="inline-block mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded"
        >
          Download Resume
        </a>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {certifications.map((cert, index) => (
            <li key={index}>
              {cert.name}{' '}
              {cert.type === 'digital' && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  [View Certificate]
                </a>
              )}
              {cert.type === 'image' && (
                <button
                  onClick={() => setActiveImage(cert.imagePath)}
                  className="text-blue-400 hover:underline"
                >
                  [View Certificate]
                </button>
              )}
              {cert.type === 'pdf' && (
                <button
                  onClick={() => setActivePDF(cert.pdfPath)}
                  className="text-blue-400 hover:underline"
                >
                  [View Certificate]
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 max-w-3xl w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-xl font-bold">
              &times;
            </button>
            <img
              src={activeImage}
              alt="Certificate"
              className="w-full h-auto max-h-[80vh] rounded"
            />
            <a
              href={activeImage}
              download
              className="block text-center mt-4 text-blue-400 hover:underline"
            >
              Download Image
            </a>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {activePDF && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 max-w-4xl w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-xl font-bold">
              &times;
            </button>
            <iframe
              src={activePDF}
              className="w-full h-[80vh] border rounded"
            ></iframe>
            <a
              href={activePDF}
              download
              className="block text-center mt-4 text-blue-400 hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
