import React from 'react';

interface WaveDividerProps {
  color?: string; // Tailwind の fill クラス名 (例: fill-gray-100)
  direction?: 'up' | 'down'; // 波の向き
}

const WaveDivider: React.FC<WaveDividerProps> = ({ color = 'fill-gray-100', direction = 'down' }) => {
  const pathData = direction === 'down'
    ? "M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z" // 下向きの波
    : "M0,0 C150,100 350,-100 500,0 L500,100 L0,100 Z"; // 上向きの波

  return (
    <div className="relative w-full h-16 md:h-24 lg:h-32 overflow-hidden -mb-px"> {/* 高さを調整 */}
      <svg
        className={`absolute bottom-0 left-0 w-full h-full ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100" // viewBox調整
        preserveAspectRatio="none"
      >
        <path d={pathData} style={{ stroke: 'none' }}></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
