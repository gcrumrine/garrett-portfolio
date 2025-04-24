'use client';
import { useState, useEffect } from 'react';

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const correctPassword = 'gcrumrine2024'; // 🔐 CHANGE THIS TO YOUR OWN SECRET

  useEffect(() => {
    const stored = localStorage.getItem('portfolioAccess');
    if (stored === 'unlocked') {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      localStorage.setItem('portfolioAccess', 'unlocked');
      setUnlocked(true);
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  if (unlocked) return children;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">🚧 Coming Soon</h1>
        <p className="text-gray-400">This portfolio is currently private. Enter the password to preview:</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-700 bg-gray-900 text-white focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
