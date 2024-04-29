'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';

interface GeologicalPeriod {
  name: string;
  type: string;
  details: string;
  highlights: string[];
  startYear: number;
  endYear: number;
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
      ],
      startYear: 4600,
      endYear: 4000
    },
    {
      name: 'Archean',
      type: 'Eon',
      details: 'The Archean eon spans from 4000 to 2500 million years ago.',
      highlights: [
        'Continental crust formation',
        'Origin of Life Theories',
        'First appearance of rocks, minerals, and fossils'
      ],
      startYear: 4000,
      endYear: 2500
    },
    {
      name: 'Proterozoic',
      type: 'Eon',
      details: 'The Proterozoic eon spans from 2500 to 541 million years ago.',
      highlights: [
        'Rise of atmospheric oxygen',
        'Development of photosynthesis',
        'Includes Paleoproterozoic, Mesoproterozoic, Neoproterozoic eras'
      ],
      startYear: 2500,
      endYear: 541
    },
    {
      name: 'Phanerozoic',
      type: 'Eon',
      details: 'The Phanerozoic eon spans from 541 million years ago to present.',
      highlights: [
        'Diversification of life forms',
        'Advent of complex multicellular organisms',
        'Includes Paleozoic, Mesozoic, Cenozoic eras'
      ],
      startYear: 541,
      endYear: 0 // The present
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
      ],
      startYear: 2500,
      endYear: 1600
    },
    {
      name: 'Mesoproterozoic',
      type: 'Era',
      details: 'The Mesoproterozoic era spans from 1600 to 1000 million years ago.',
      highlights: [
        'Rodinia supercontinent',
        'Peak of stromatolites',
        'Evolution of multicellular organisms'
      ],
      startYear: 1600,
      endYear: 1000
    },
    {
      name: 'Neoproterozoic',
      type: 'Era',
      details: 'The Neoproterozoic era spans from 1000 to 541 million years ago.',
      highlights: [
        'Snowball Earth or Slushball Earth',
        'Cambrian Explosion',
        'Appearance of complex multicellular organisms'
      ],
      startYear: 1000,
      endYear: 541
    },
    {
      name: 'Paleozoic',
      type: 'Era',
      details: 'The Paleozoic era spans from 541 to 251 million years ago.',
      highlights: [
        'Great Ordovician Biodiversification Event',
        'Carboniferous rainforests',
        'Formation of extensive coal deposits'
      ],
      startYear: 541,
      endYear: 251
    },
    {
      name: 'Mesozoic',
      type: 'Era',
      details: 'The Mesozoic era spans from 251 to 66 million years ago.',
      highlights: [
        'Rise of dinosaurs',
        'Cretaceous-Paleogene extinction event',
        'Dominance of reptiles and emergence of mammals'
      ],
      startYear: 251,
      endYear: 66
    },
    {
      name: 'Cenozoic',
      type: 'Era',
      details: 'The Cenozoic era spans from 66 million years ago to present.',
      highlights: [
        'Rapid diversification of mammals and birds',
        'Ice age cycles',
        'Emergence and evolution of Homo sapiens'
      ],
      startYear: 66,
      endYear: 0 // The present
    },
    // Periods
    {
      name: 'Cambrian',
      type: 'Period',
      details: 'The Cambrian period spans from 541 to 485 million years ago.',
      highlights: [
        'Explosion of marine biodiversity',
        'First appearance of many animal phyla'
      ],
      startYear: 541,
      endYear: 485
    },
    {
      name: 'Ordovician',
      type: 'Period',
      details: 'The Ordovician period spans from 485 to 443 million years ago.',
      highlights: [
        'Great Ordovician Biodiversification Event',
        'Diversification of marine life'
      ],
      startYear: 485,
      endYear: 443
    },
    {
      name: 'Silurian',
      type: 'Period',
      details: 'The Silurian period spans from 443 to 419 million years ago.',
      highlights: [
        'Diversification of jawed fish',
        'First land plants and terrestrial arthropods'
      ],
      startYear: 443,
      endYear: 419
    },
    // Epochs
    {
      name: 'Pleistocene',
      type: 'Epoch',
      details: 'The Pleistocene epoch spans from 2.6 million years ago to 11,700 years ago.',
      highlights: [
        'Extensive glaciations',
        'Megafaunal extinction'
      ],
      startYear: 2.6,
      endYear: 0 // Present for Holocene
    },
    {
      name: 'Holocene',
      type: 'Epoch',
      details: 'The Holocene epoch spans from 11,700 years ago to present.',
      highlights: [
        'Rise of human civilization',
        'Impact of anthropogenic activities'
      ],
      startYear: 11.7,
      endYear: 0 // The present
    }
  ];

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="title">Geological Timeline Scale</h1>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>By: Ericka Downs 04/30/2024 Geo Project</p>
    </footer>
  );
};

const Home: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [sliderHeight, setSliderHeight] = useState<number>(0);

  // Calculate the dynamic slider height based on viewport height minus header and footer heights
  useEffect(() => {
    const headerHeight = document.querySelector('.header')?.clientHeight || 0;
    const footerHeight = document.querySelector('.footer')?.clientHeight || 0;
    const availableHeight = window.innerHeight - headerHeight - footerHeight - 40; // Adjust for padding and margin

    setSliderHeight(availableHeight);
  }, []);

  const handleTimeScaleButtonClick = (timeScaleName: string) => {
    const index = geologicalTimeScale.findIndex((period) => period.name === timeScaleName);
    if (index !== -1) {
      setSelectedPeriod(timeScaleName);
      setSliderValue(index); // Update slider value based on selected index
    }
  };

  const handleSliderChange = (value: number) => {
    const selectedPeriodName = geologicalTimeScale[value].name;
    setSelectedPeriod(selectedPeriodName);
    setSliderValue(value);
  };

  return (
    <div className="page-container">
      <Header />

      <div className="container">
        {/* Left container for time scale buttons */}
        <div className="left-container">
          {geologicalTimeScale.map((period, index) => (
            <button
              key={index}
              className={`time-scale-button ${period.type}`}
              onClick={() => handleTimeScaleButtonClick(period.name)}
            >
              {period.name}
            </button>
          ))}
        </div>

        {/* Middle container with vertical slider */}
        <div className="middle-container">
          {/* Horizontal line to indicate selected period */}
          <div
            className="line"
            style={{ top: `${(sliderValue / (geologicalTimeScale.length - 1)) * sliderHeight}px` }}
          />
          {/* Vertical Slider */}
          <Slider
            className="custom-slider vertical-slider"
            thumbClassName="custom-thumb"
            trackClassName="custom-track"
            min={0}
            max={geologicalTimeScale.length - 1}
            orientation="vertical"
            onChange={handleSliderChange}
            value={sliderValue}
          />
        </div>

        {/* Right container for period details */}
        <div className="right-container">
          {selectedPeriod && (
            <div className="period-details">
              <h2 className="text-l font-semibold mb-2">{selectedPeriod}</h2>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;