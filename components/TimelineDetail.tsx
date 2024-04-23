import React from 'react';

interface TimePeriodDetails {
  [key: string]: {
    description: string;
    keyDates: string;
  };
}

interface Props {
  periodName: string | null;
}

const TimelineDetail: React.FC<Props> = ({ periodName }) => {
  const timePeriodDetails: TimePeriodDetails = {
    Cambrian: {
      description: 'Details about the Cambrian period...',
      keyDates: '541 - 485 million years ago',
    },
    Ordovician: {
      description: 'Details about the Ordovician period...',
      keyDates: '485 - 443 million years ago',
    },
    // Add more time period details as needed
  };

  if (!periodName) {
    return (
      <div className="p-4 text-gray-600 text-center">
        Click on a time period to view details.
      </div>
    );
  }

  const { description, keyDates } = timePeriodDetails[periodName as keyof TimePeriodDetails] || {};

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mt-4 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">{periodName}</h2>
      {description && <p className="text-gray-700 mb-2">{description}</p>}
      {keyDates && <p className="text-gray-700">Key Dates: {keyDates}</p>}
    </div>
  );
};

export default TimelineDetail;
