import React from 'react';

interface Subclass {
  name: string;
  keyDates: string;
}

interface Period {
  id: number;
  name: string;
  description: string;
  subclasses: Subclass[];
}

interface Props {
  periods: Period[];
  selectedPeriod: number | null;
  onPeriodSelect: (periodId: number) => void;
}

const Timeline: React.FC<Props> = ({ periods, selectedPeriod, onPeriodSelect }) => {
  const handlePeriodSelect = (periodName: string) => {
    // Find the period with matching name and get its ID
    const selectedPeriod = periods.find((period) => period.name === periodName);
    if (selectedPeriod) {
      onPeriodSelect(selectedPeriod.id); // Pass the period ID to the parent component
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {periods.map((period) => (
        <div key={period.id} className="border rounded-lg p-4 bg-white shadow-lg">
          <button
            className={`w-full text-left font-semibold py-2 px-4 rounded-lg focus:outline-none ${
              selectedPeriod === period.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } timeline-button`}
            onClick={() => handlePeriodSelect(period.name)}
          >
            {period.name}
          </button>
          {selectedPeriod === period.id && (
            <ul className="mt-2 ml-4">
              {period.subclasses.map((subclass) => (
                <li key={subclass.name} className="text-sm text-gray-600">
                  <span className="font-semibold">{subclass.name}</span> - {subclass.keyDates}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
