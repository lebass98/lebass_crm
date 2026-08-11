import React from 'react';

export const STATUS_CONFIG = {
  0: { label: '시작 전 (0%)', color: '#919EAB', bg: 'bg-[#919EAB]/15', text: 'text-[#919EAB]', border: 'border-[#919EAB]/30' },
  20: { label: '기획/설계 (20%)', color: '#FF4842', bg: 'bg-[#FF4842]/15', text: 'text-[#FF4842]', border: 'border-[#FF4842]/30' },
  40: { label: '초기 구현 (40%)', color: '#FFC107', bg: 'bg-[#FFC107]/15', text: 'text-[#FFC107]', border: 'border-[#FFC107]/30' },
  60: { label: '주요 구현 (60%)', color: '#1890FF', bg: 'bg-[#1890FF]/15', text: 'text-[#1890FF]', border: 'border-[#1890FF]/30' },
  80: { label: '검수/테스트 (80%)', color: '#7635DC', bg: 'bg-[#7635DC]/15', text: 'text-[#7635DC]', border: 'border-[#7635DC]/30' },
  100: { label: '완료 (100%)', color: '#5BE584', bg: 'bg-[#5BE584]/15', text: 'text-[#5BE584]', border: 'border-[#5BE584]/30' },
};

export default function StatusBadge({ progress = 0, showDot = true }) {
  // Match closest status
  const matchedProgress = [0, 20, 40, 60, 80, 100].reduce((prev, curr) => 
    Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
  );

  const status = STATUS_CONFIG[matchedProgress] || STATUS_CONFIG[0];

  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${status.bg} ${status.text} ${status.border} backdrop-blur-sm shadow-xs transition-all`}
    >
      {showDot && (
        <span 
          className="w-1.5 h-1.5 rounded-full animate-pulse" 
          style={{ backgroundColor: status.color }} 
        />
      )}
      {status.label}
    </span>
  );
}
