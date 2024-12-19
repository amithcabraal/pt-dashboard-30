import React from 'react';

interface ExecutionBarProps {
  achievedTps: number;
  targetTps: number;
  isCompact?: boolean;
  targetAchievedNotes?: string;
  targetAchievedSentiment?: 'positive' | 'neutral' | 'negative';
}

const sentimentColors = {
  positive: 'bg-green-100 text-green-800',
  neutral: 'bg-gray-100 text-gray-800',
  negative: 'bg-red-100 text-red-800',
};

export function ExecutionBar({
  achievedTps,
  targetTps,
  isCompact,
  targetAchievedNotes,
  targetAchievedSentiment
}: ExecutionBarProps) {
  const achievedPercentage = (achievedTps / targetTps) * 100;

  return (
    <div className="space-y-1">
      <div className="border border-gray-300 rounded overflow-hidden" style={{ height: isCompact ? '24px' : '32px' }}>
        <div className="relative h-full flex items-center">
          <div 
            className="absolute top-0 left-0 h-full execution-bar transition-all duration-300"
            style={{ width: `${achievedPercentage}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <span className={`${isCompact ? 'text-xs' : 'text-sm'} whitespace-nowrap flex items-center h-full`}>
              Achieved: {achievedTps} TPS
            </span>
            <span className={`${isCompact ? 'text-xs' : 'text-sm'} whitespace-nowrap flex items-center h-full`}>
              Target: {targetTps} TPS
            </span>
          </div>
        </div>
      </div>
      {targetAchievedNotes && (
        <div className={`px-2 py-0.5 rounded text-xs ${sentimentColors[targetAchievedSentiment || 'neutral']}`}>
          {targetAchievedNotes}
        </div>
      )}
    </div>
  );
}