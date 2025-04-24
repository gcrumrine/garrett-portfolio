'use client';
import publications from '@/data/publications';

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Publications</h1>

      <div className="space-y-12">
        {publications.map((pub, index) => (
          <div key={index} className="bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white">{pub.title}</h2>
            <p className="text-sm text-gray-400 mb-2 italic">
              {pub.venue}, {pub.year}
            </p>
            <p className="text-gray-300 mb-4">{pub.summary}</p>

            {pub.type === 'pdf' && (
              <>
                <iframe
                  src={pub.url}
                  className="w-full h-[600px] border border-gray-700 rounded mb-4"
                ></iframe>
                <a
                  href={pub.url}
                  download
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded"
                >
                  Download PDF
                </a>
              </>
            )}

            {pub.type === 'link' && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Online →
              </a>
            )}

            <p className="mt-4 text-xs text-gray-500">Citation: {pub.citation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
