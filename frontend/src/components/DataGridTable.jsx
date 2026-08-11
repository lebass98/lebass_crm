import React, { useState } from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import StatusBadge from './StatusBadge';
import { ArrowUpDown, ExternalLink, Layers, ArrowRight } from 'lucide-react';

export default function DataGridTable({ items = [] }) {
  const { setPreviewItem, colorPreset } = useThemeSystem();
  const [sortField, setSortField] = useState('title');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedItems = [...items].sort((a, b) => {
    let valA = a[sortField];
    let valB = b[sortField];
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();
    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900/90 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
            <tr>
              <th className="p-4 cursor-pointer hover:text-white" onClick={() => handleSort('title')}>
                <div className="flex items-center gap-1.5">
                  서비스 / 기능명 <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-4 cursor-pointer hover:text-white" onClick={() => handleSort('category')}>
                <div className="flex items-center gap-1.5">
                  분류 <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-4">엔드포인트</th>
              <th className="p-4 cursor-pointer hover:text-white" onClick={() => handleSort('progress')}>
                <div className="flex items-center gap-1.5">
                  진행 상태 <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="p-4 text-right">미리보기</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {sortedItems.map((item) => (
              <tr
                key={item.id}
                onClick={() => setPreviewItem(item)}
                className="hover:bg-slate-800/50 cursor-pointer transition-colors group"
              >
                <td className="p-4 font-semibold text-white group-hover:text-indigo-300">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-500" style={{ color: colorPreset.primary }} />
                    <span>{item.title}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                    {item.category}
                  </span>
                </td>
                <td className="p-4 font-mono text-slate-400 text-[11px]">
                  {item.endpoint || '/api/service'}
                </td>
                <td className="p-4">
                  <StatusBadge progress={item.progress} />
                </td>
                <td className="p-4 text-right">
                  <button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs transition-all font-medium">
                    <span>열기</span>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: colorPreset.primary }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
