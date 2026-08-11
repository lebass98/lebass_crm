import React from 'react';
import { useThemeSystem } from '../context/ThemeContext';
import { 
  BarChart3, 
  Server, 
  Layers, 
  Bot, 
  CheckCircle2, 
  ArrowUpRight, 
  Zap, 
  Shield, 
  Sliders
} from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function BentoGridFeatures({ onSelectModule }) {
  const { colorPreset } = useThemeSystem();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
          BENTO SYSTEM ARCHITECTURE
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit">
          지능형 CRM을 위한 핵심 모듈
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
          Tomcat 백엔드부터 React Vite 프론트엔드까지 유기적으로 통합된 벤토 그리드 기능군
        </p>
      </div>

      {/* Bento Grid Layout (2-Column & 1-Column mix) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 (2-Column Large): Real-time Revenue & Analytics */}
        <div 
          onClick={() => onSelectModule && onSelectModule('analytics')}
          className="md:col-span-2 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <BarChart3 className="w-6 h-6" />
              </div>
              <StatusBadge progress={100} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-outfit group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
              실시간 매출 & 고객 분석 대시보드
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              고객 행동 데이터 분석, 일별/월별 매출 트렌드 및 전환율(Conversion Rate)을 실시간 차트로 시각화합니다.
            </p>
          </div>

          {/* Interactive Bento Visual */}
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex items-center justify-between text-xs text-slate-300 font-mono">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Conversion Growth</div>
              <div className="text-lg font-bold text-emerald-400">+34.2% ↑</div>
            </div>
            <div className="flex items-center gap-1 font-semibold text-white group-hover:translate-x-1 transition-transform" style={{ color: colorPreset.primary }}>
              <span>모듈 상세보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card 2 (1-Column): Tomcat & Maven Engine */}
        <div 
          onClick={() => onSelectModule && onSelectModule('backend')}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Server className="w-6 h-6" />
              </div>
              <StatusBadge progress={100} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-outfit">
              Tomcat & Maven Engine
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Java Servlet 4.0 기반의 Tomcat WAS와 원스톱 WAR 패키징 파이프라인
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Status: 200 OK</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
        </div>

        {/* Card 3 (1-Column): Multi-Board CRM CMS */}
        <div 
          onClick={() => onSelectModule && onSelectModule('board')}
          className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <StatusBadge progress={60} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-outfit">
              CRM 멀티 게시판 CMS
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              고객 문의, 파이프라인 관리, 공지사항 및 리치 텍스트 포스팅 모듈
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Progress: 60%</span>
            <span className="text-indigo-500 font-semibold">In Development</span>
          </div>
        </div>

        {/* Card 4 (2-Column Large): AI Automated Workflow Agent */}
        <div 
          onClick={() => onSelectModule && onSelectModule('ai')}
          className="md:col-span-2 glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <StatusBadge progress={40} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-outfit group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
              AI 응답 제안 & 자동화 에이전트
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              고객 문의 자동 인지 및 맞춤형 답변 추천 노드를 제공하여 상담원의 응답 시간을 80% 이상 단축합니다.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex items-center justify-between text-xs text-slate-300 font-mono">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">AI Automation Nodes</div>
              <div className="text-sm font-bold text-indigo-400">LLM Stream Connected</div>
            </div>
            <div className="flex items-center gap-1 font-semibold text-white group-hover:translate-x-1 transition-transform" style={{ color: colorPreset.primary }}>
              <span>노드 보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
