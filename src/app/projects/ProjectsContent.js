'use client';
import { useState } from 'react';

const allProjects = [
  {
    title: 'ORCA Container for HPC',
    description: 'Singularity-based deployment of ORCA with SLURM.',
    status: 'Past',
    tags: ['HPC', 'Singularity', 'ORCA', 'SLURM'],
    link: '#',
    image: '/images/orca-project.jpg',
    date: '2023-12-01',
  },
  {
    title: 'AI Oil Well Predictor',
    description: 'ML model for geological prediction.',
    status: 'Present',
    tags: ['ML', 'Geophysics', 'Oil & Gas'],
    link: '#',
    image: '/images/oil-ai.jpg',
    date: '2024-04-10',
  },
  {
    title: 'ResNet + Calibration',
    description: 'Calibrated deep models for long-tailed datasets.',
    status: 'Future',
    tags: ['ResNet', 'ECE', 'TinyImageNet'],
    link: '#',
    image: '/images/resnet-calibration.jpg',
    date: '2024-08-01',
  },
];

const allTags = [...new Set(allProjects.flatMap((p) => p.tags))];
const allStatuses = [...new Set(allProjects.map((p) => p.status))];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Relevance');
  const [resultsPerPage, setResultsPerPage] = useState(9);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleStatus = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const applyFilters = () => {
    setFiltersApplied(true);
  };

  const filteredProjects = allProjects
    .filter((project) => {
      if (!filtersApplied) return true;
      const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));
      const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(project.status);
      return tagMatch && statusMatch;
    })
    .filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'Newest first') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'Oldest first') return new Date(a.date) - new Date(b.date);
      return 0; // Relevance = default
    })
    .slice(0, resultsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="lg:w-1/4 w-full space-y-6">
        <h2 className="text-2xl font-semibold">Filters</h2>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Tags</h3>
          {allTags.map((tag) => (
            <label key={tag} className="block text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedTags.includes(tag)}
                onChange={() => toggleTag(tag)}
              />
              {tag}
            </label>
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Status</h3>
          {allStatuses.map((status) => (
            <label key={status} className="block text-sm">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedStatuses.includes(status)}
                onChange={() => toggleStatus(status)}
              />
              {status}
            </label>
          ))}
        </div>

        <button
          onClick={applyFilters}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </aside>

      {/* Project Grid */}
      <section className="flex-1">
        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-white"
          />

          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
            >
              <option>Relevance</option>
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>

            <select
              value={resultsPerPage}
              onChange={(e) => setResultsPerPage(parseInt(e.target.value))}
              className="px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
            >
              <option value={3}>3 per page</option>
              <option value={6}>6 per page</option>
              <option value={9}>9 per page</option>
            </select>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-sm px-2 py-1 rounded text-gray-100">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

