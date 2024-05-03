import React from 'react';

interface ColorLegendItem {
  color: string;
  label: string;
  description: string;
}

const colorLegend: ColorLegendItem[] = [
  { color: '#8e44ad', label: 'Eon (Purple)', description: 'Represents Eon units' },
  { color: '#f39c12', label: 'Era (Orange)', description: 'Represents Era units' },
  { color: '#27ae60', label: 'Period (Green)', description: 'Represents Period units' },
  { color: '#e74c3c', label: 'Epoch (Red)', description: 'Represents Epoch units' }
];

const ColorLegend: React.FC = () => {
  return (
    <div className="color-legend">
      <h3>Geological Time Units</h3>
      {colorLegend.map((item, index) => (
        <div key={index} className="legend-item">
          <div className="legend-color" style={{ backgroundColor: item.color }} />
          <div className="legend-text">
            <strong>{item.label}</strong>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorLegend;
