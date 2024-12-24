import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  defaultValue: [number, number];
}

export const Slider: React.FC<SliderProps> = ({ min, max, step, defaultValue }) => {
  return (
    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
      <div
        className="absolute h-full bg-blue-500 rounded-full"
        style={{
          left: `${(defaultValue[0] / max) * 100}%`,
          right: `${100 - (defaultValue[1] / max) * 100}%`
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue[0]}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};