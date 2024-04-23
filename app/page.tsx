'use client'

import { useState, useRef, useEffect } from 'react';

const Home: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const timePeriodDetails: Record<string, { description: string; keyDates: string }> = {
    Hadean: {
      description: 'Details about the Hadean eon...',
      keyDates: '4.6 - 4 billion years ago',
    },
    Archean: {
      description: 'Details about the Archean eon...',
      keyDates: '4 - 2.5 billion years ago',
    },
    Proterozoic: {
      description: 'Details about the Proterozoic eon...',
      keyDates: '2.5 billion - 541 million years ago',
    },
    Phanerozoic: {
      description: 'Details about the Phanerozoic eon...',
      keyDates: '541 million years ago - present',
    },
    Paleozoic: {
      description: 'Details about the Paleozoic era...',
      keyDates: '541 - 252 million years ago',
    },
    Mesozoic: {
      description: 'Details about the Mesozoic era...',
      keyDates: '252 - 66 million years ago',
    },
    Cenozoic: {
      description: 'Details about the Cenozoic era...',
      keyDates: '66 million years ago - present',
    },
    Cambrian: {
      description: 'Details about the Cambrian period...',
      keyDates: '541 - 485 million years ago',
    },
    Ordovician: {
      description: 'Details about the Ordovician period...',
      keyDates: '485 - 443 million years ago',
    },
    Silurian: {
      description: 'Details about the Silurian period...',
      keyDates: '443 - 419 million years ago',
    },
    Devonian: {
      description: 'Details about the Devonian period...',
      keyDates: '419 - 358 million years ago',
    },
    Carboniferous: {
      description: 'Details about the Carboniferous period...',
      keyDates: '358 - 298 million years ago',
    },
    Permian: {
      description: 'Details about the Permian period...',
      keyDates: '298 - 252 million years ago',
    },
    Triassic: {
      description: 'Details about the Triassic period...',
      keyDates: '252 - 201 million years ago',
    },
    Jurassic: {
      description: 'Details about the Jurassic period...',
      keyDates: '201 - 145 million years ago',
    },
    Cretaceous: {
      description: 'Details about the Cretaceous period...',
      keyDates: '145 - 66 million years ago',
    },
    Paleogene: {
      description: 'Details about the Paleogene period...',
      keyDates: '66 - 23 million years ago',
    },
    Neogene: {
      description: 'Details about the Neogene period...',
      keyDates: '23 - 2.6 million years ago',
    },
    Quaternary: {
      description: 'Details about the Quaternary period...',
      keyDates: '2.6 million years ago - present',
    },
  };
  const handlePeriodSelect = (periodName: string) => {
    setSelectedPeriod(periodName);
  };

  const handleCloseDetail = () => {
    setSelectedPeriod(null);
  };

  const handleBackdropClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseDetail();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleBackdropClick);
    return () => {
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center">Geological Time Scale</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg">
        {Object.keys(timePeriodDetails).map((periodName) => (
          <button
            key={periodName}
            className={`p-4 bg-white rounded-lg shadow-lg text-center hover:bg-gray-200 focus:outline-none`}
            style={{ backgroundColor: `var(--${periodName.toLowerCase()}-color)` }}
            onClick={() => handlePeriodSelect(periodName)}
          >
            {periodName}
          </button>
        ))}
      </div>

      {selectedPeriod && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">{selectedPeriod}</h2>
            <p className="text-gray-700 mb-4">{timePeriodDetails[selectedPeriod].description}</p>
            <p className="text-gray-700">Key Dates: {timePeriodDetails[selectedPeriod].keyDates}</p>
            <button className="block mt-4 mx-auto bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-lg" onClick={handleCloseDetail}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
