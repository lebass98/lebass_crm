import React, { useState } from 'react';
import { ThemeProvider, useThemeSystem } from './context/ThemeContext';
import HeaderBar from './components/HeaderBar';
import GlassCardGrid from './components/GlassCardGrid';
import DataGridTable from './components/DataGridTable';
import MobileSwiper from './components/MobileSwiper';
import SearchModal from './components/SearchModal';
import DevicePreviewSimulator from './components/DevicePreviewSimulator';
import StatusBadge from './components/StatusBadge';
import { 
  LayoutGrid, 
  Table, 
  Filter, 
  Layers, 
  SlidersHorizontal, 
  RefreshCw, 
  Server, 
  CheckCircle2, 
  Sparkles,
  Activity,
  PlusCircle
} from 'lucide-react';

const MODULE_ITEMS = [
  {
    id: 'tomcat-was',
    title: 'Tomcat Servlet Health Engine',
    category: 'Backend',
    progress: 100,
    endpoint: '/api/status',
    module: 'Servlet Core',
    desc: 'Jakarta / Java EE 4.0 기반 Servlet 엔드포인트 및 Tomcat WAS 헬스체크 모듈'
  },
  {
    id: 'maven-plugin',
    title: 'Maven Pipeline Auto-Build',
    category: 'DevOps',
    progress: 100,
    endpoint: 'mvn clean package',
    module: 'Maven Plugin',
    desc: 'frontend-maven-plugin과 maven-war-plugin을 통한 원스톱 WAR 패키징 자동화'
  },
  {
    id: 'react-ui',
    title: 'React 19 & Glassmorphism Design System',
    category: 'Frontend',
    progress: 100,
    endpoint: '/src/App.jsx',
    module: 'React Core',
    desc: '선언적 컴포넌트 구조, 테마 Context 및 Glassmorphism 디자인 시스템'
  },
  {
    id: 'tailwind-v4',
    title: 'Tailwind CSS v4 Dynamic Engine',
    category: 'Styling',
    progress: 100,
    endpoint: '/src/index.css',
    module: 'Tailwind Engine',
    desc: '@tailwindcss/vite 플러그인 및 6가지 브랜드 컬러 프리셋 테마'
  },
  {
    id: 'admin-auth',
    title: 'Admin User Security & JWT Auth',
    category: 'Security',
    progress: 80,
    endpoint: '/api/auth/login',
    module: 'Security Guard',
    desc: '관리자 회원 인증, JWT 토큰 인가 및 Role 기반 접속 제어 패널'
  },
  {
    id: 'crm-board',
    title: 'CRM Multi-Board Management',
    category: 'Business',
    progress: 60,
    endpoint: '/api/admin/board',
    module: 'Content Manager',
    desc: '게시판 목록, 리치 텍스트 에디터 글 작성 및 카테고리 관리 기능'
  },
  {
    id: 'realtime-ws',
    title: 'Real-Time WebSocket Analytics',
    category: 'API',
    progress: 40,
    endpoint: 'ws://localhost:8080/ws',
    module: 'Stream Connector',
    desc: '어드민 접속자 수 및 실시간 서버 부하 모니터링 스트리밍'
  },
  {
    id: 'db-jpa',
    title: 'PostgreSQL / Spring Data JPA Layer',
    category: 'Database',
    progress: 20,
    endpoint: 'jdbc:postgresql://localhost:5432/crm',
    module: 'Persistence Layer',
    desc: '관계형 데이터베이스 영속성 계층 연동 및 ORM 엔티티 설계'
  },
  {
    id: 'ai-assistant',
    title: 'AI Automated CRM Assistant',
    category: 'AI Engine',
    progress: 0,
    endpoint: '/api/ai/recommend',
    module: 'LLM Agent',
    desc: '고객 데이터 분석 및 자동 답변 제안 AI 어시스턴트 모듈'
  }
];

function MainContent() {
  const {
    viewLayout,
    setViewLayout,
    gridColumns,
    setGridColumns,
    colorPreset,
    previewItem,
    setPreviewItem
  } = useThemeSystem();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProgress, setSelectedProgress] = useState('All');

  const categories = ['All', 'Backend', 'Frontend', 'Styling', 'DevOps', 'Security', 'Business', 'API', 'Database', 'AI Engine'];
  const progressFilters = [
    { label: '전체', value: 'All' },
    { label: '완료 (100%)', value: 100 },
    { label: '검수 중 (80%)', value: 80 },
    { label: '진행 중 (40-60%)', value: 'in_progress' },
    { label: '시작 단계 (0-20%)', value: 'planning' },
  ];

  const filteredItems = MODULE_ITEMS.filter(item => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (selectedProgress === 100 && item.progress !== 100) return false;
    if (selectedProgress === 80 && item.progress !== 80) return false;
    if (selectedProgress === 'in_progress' && (item.progress < 40 || item.progress > 60)) return false;
    if (selectedProgress === 'planning' && item.progress > 20) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-x-hidden font-sans">
      
      {/* Dynamic Background Glows */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: colorPreset.primary }}
      />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Navigation */}
      <HeaderBar />

      {/* Main Body Layout */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row gap-6 z-10">
        
        {/* Left Sidebar Filter Panel */}
        <aside className="w-full md:w-64 lg:w-72 shrink-0 space-y-6">
          
          {/* View Mode & Grid Controls */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5" style={{ color: colorPreset.primary }} />
              뷰 스타일 & 레이아웃
            </h3>

            {/* Layout Mode Selector (Grid vs Table) */}
            <div className="grid grid-cols-2 gap-2 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewLayout('grid')}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all ${
                  viewLayout === 'grid'
                    ? 'bg-slate-800 text-white shadow-md border border-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" style={{ color: viewLayout === 'grid' ? colorPreset.primary : 'currentColor' }} />
                그리드 카너
              </button>
              <button
                onClick={() => setViewLayout('table')}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all ${
                  viewLayout === 'table'
                    ? 'bg-slate-800 text-white shadow-md border border-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Table className="w-3.5 h-3.5" style={{ color: viewLayout === 'table' ? colorPreset.primary : 'currentColor' }} />
                DataGrid 표
              </button>
            </div>

            {/* Column Selector for Grid Layout (1 ~ 5) */}
            {viewLayout === 'grid' && (
              <div className="pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>그리드 열 수:</span>
                  <span className="font-mono text-white font-bold">{gridColumns} 열</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((col) => (
                    <button
                      key={col}
                      onClick={() => setGridColumns(col)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        gridColumns === col
                          ? 'bg-slate-800 text-white font-bold border border-slate-700 shadow-xs'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Category Filters */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" style={{ color: colorPreset.primary }} />
              카테고리 필터
            </h3>

            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-800 text-white font-semibold shadow-xs border border-slate-700'
                      : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-500 border border-slate-800">
                    {cat === 'All' ? MODULE_ITEMS.length : MODULE_ITEMS.filter(i => i.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Status Progress Filter */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" style={{ color: colorPreset.primary }} />
              진행 상태 필터
            </h3>

            <div className="space-y-1">
              {progressFilters.map((pf) => (
                <button
                  key={pf.value}
                  onClick={() => setSelectedProgress(pf.value)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all ${
                    selectedProgress === pf.value
                      ? 'bg-slate-800 text-white font-semibold border border-slate-700'
                      : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                  }`}
                >
                  {pf.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Main Workspace */}
        <main className="flex-1 space-y-6 min-w-0">
          
          {/* Top Status Header Banner */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active Workspace
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {filteredItems.length} 개 모듈 항목 표시 중
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight font-outfit">
                LEBASS CRM UI/UX Design System
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                글래스모피즘, 6가지 브랜드 프리셋, 디바이스 시뮬레이터 및 Cmd+K 전역 검색이 적용되었습니다.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <StatusBadge progress={100} />
            </div>
          </div>

          {/* Mobile Swiper (Mobile breakpoint <= 900px) */}
          <MobileSwiper items={filteredItems} />

          {/* Desktop Content Views (Hidden on mobile swiper breakpoint or responsive) */}
          <div className="hidden md:block">
            {viewLayout === 'grid' ? (
              <GlassCardGrid items={filteredItems} />
            ) : (
              <DataGridTable items={filteredItems} />
            )}
          </div>
        </main>
      </div>

      {/* Global Search Modal */}
      <SearchModal items={MODULE_ITEMS} />

      {/* Device Preview Simulator Modal */}
      {previewItem && (
        <DevicePreviewSimulator
          item={previewItem}
          onClose={() => setPreviewItem(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
