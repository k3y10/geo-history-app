'use client';

import React, { useState } from 'react';
import Slider from 'react-slider';

const Home: React.FC = () => {
  interface GeologicalPeriod {
    name: string;
    type: string;
    details: string;
    highlights: string[];
  }

  const geologicalTimeScale: GeologicalPeriod[] = [
    // Eons
    {
      name: 'Hadean',
      type: 'Eon',
      details: 'This eon spans from 4600 to 4000 million years ago. It is the oldest eon of Earth\'s existence.',
      highlights: [
        'Very volcanic tectonic activity',
        'Late Heavy Bombardment Theory',
        'Possibly the time of water formation on Earth'
      ]
    },
    {
      name: 'Archean',
      type: 'Eon',
      details: 'The Archean eon spans from 4000 to 2500 million years ago.',
      highlights: [
        'Continental crust formation',
        'Origin of Life Theories',
        'First appearance of rocks, minerals, and fossils'
      ]
    },
    {
      name: 'Proterozoic',
      type: 'Eon',
      details: 'The Proterozoic eon spans from 2500 to 541 million years ago.',
      highlights: [
        'Rise of atmospheric oxygen',
        'Development of photosynthesis',
        'Includes Paleoproterozoic, Mesoproterozoic, Neoproterozoic eras'
      ]
    },
    {
      name: 'Phanerozoic',
      type: 'Eon',
      details: 'The Phanerozoic eon spans from 541 million years ago to present.',
      highlights: [
        'Diversification of life forms',
        'Advent of complex multicellular organisms',
        'Includes Paleozoic, Mesozoic, Cenozoic eras'
      ]
    },
    // Eras
    {
      name: 'Paleoproterozoic',
      type: 'Era',
      details: 'The Paleoproterozoic era spans from 2500 to 1600 million years ago.',
      highlights: [
        'Great Oxygenation Event',
        'Assembly of supercontinent',
        'Rise of photosynthetic life forms'
      ]
    },
    {
      name: 'Mesoproterozoic',
      type: 'Era',
      details: 'The Mesoproterozoic era spans from 1600 to 1000 million years ago.',
      highlights: [
        'Rodinia supercontinent',
        'Peak of stromatolites',
        'Evolution of multicellular organisms'
      ]
    },
    {
      name: 'Neoproterozoic',
      type: 'Era',
      details: 'The Neoproterozoic era spans from 1000 to 541 million years ago.',
      highlights: [
        'Snowball Earth or Slushball Earth',
        'Cambrian Explosion',
        'Appearance of complex multicellular organisms'
      ]
    },
    {
      name: 'Paleozoic',
      type: 'Era',
      details: 'The Paleozoic era spans from 541 to 251 million years ago.',
      highlights: [
        'Great Ordovician Biodiversification Event',
        'Carboniferous rainforests',
        'Formation of extensive coal deposits'
      ]
    },
    {
      name: 'Mesozoic',
      type: 'Era',
      details: 'The Mesozoic era spans from 251 to 66 million years ago.',
      highlights: [
        'Rise of dinosaurs',
        'Cretaceous-Paleogene extinction event',
        'Dominance of reptiles and emergence of mammals'
      ]
    },
    {
      name: 'Cenozoic',
      type: 'Era',
      details: 'The Cenozoic era spans from 66 million years ago to present.',
      highlights: [
        'Rapid diversification of mammals and birds',
        'Ice age cycles',
        'Emergence and evolution of Homo sapiens'
      ]
    },
    // Periods
    {
      name: 'Cambrian',
      type: 'Period',
      details: 'The Cambrian period spans from 541 to 485 million years ago.',
      highlights: [
        'Explosion of marine biodiversity',
        'First appearance of many animal phyla'
      ]
    },
    {
      name: 'Ordovician',
      type: 'Period',
      details: 'The Ordovician period spans from 485 to 443 million years ago.',
      highlights: [
        'Great Ordovician Biodiversification Event',
        'Diversification of marine life'
      ]
    },
    {
      name: 'Silurian',
      type: 'Period',
      details: 'The Silurian period spans from 443 to 419 million years ago.',
      highlights: [
        'Diversification of jawed fish',
        'First land plants and terrestrial arthropods'
      ]
    },
    // Add more periods here...
    // Epochs
    {
      name: 'Pleistocene',
      type: 'Epoch',
      details: 'The Pleistocene epoch spans from 2.6 million years ago to 11,700 years ago.',
      highlights: [
        'Extensive glaciations',
        'Megafaunal extinction'
      ]
    },
    {
      name: 'Holocene',
      type: 'Epoch',
      details: 'The Holocene epoch spans from 11,700 years ago to present.',
      highlights: [
        'Rise of human civilization',
        'Impact of anthropogenic activities'
      ]
    }
  ];

  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const handleSliderChange = (value: number) => {
    const selectedPeriodName = geologicalTimeScale[value].name;
    setSelectedPeriod(selectedPeriodName);
  };

  return (
    <div className="time-scale-container">
      <h1 className="text-4xl font-bold mb-4 text-center">Geological Time Scale</h1>

      {/* Slider Component */}
      <Slider
        className="custom-slider"
        thumbClassName="custom-thumb"
        trackClassName="custom-track"
        min={0}
        max={geologicalTimeScale.length - 1}
        onChange={handleSliderChange}
      />

      {/* Timeline Buttons */}
      <div className="geological-periods">
        {geologicalTimeScale.map((period, index) => (
          <div
            key={index}
            className={`timeline-button ${period.type}`}
            onClick={() => setSelectedPeriod(period.name)}
          >
            {period.name}
          </div>
        ))}
      </div>

      {/* Period Details Popup */}
      {selectedPeriod && (
        <div className="period-details">
          <h2 className="text-xl font-semibold mb-2">{selectedPeriod}</h2>
          <p className="text-gray-700 mb-4">
            {geologicalTimeScale.find((p) => p.name === selectedPeriod)?.details}
          </p>
          <ul className="list-disc list-inside text-gray-700">
            {geologicalTimeScale.find((p) => p.name === selectedPeriod)?.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}     
      <div className="watermark">
        <p>Ericka Downs</p>
        <p>SLCC 04/30/2023</p>
        <p>Geological Timescale Project</p>
      </div>
    </div>
  );
};

export default Home;

