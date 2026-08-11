import React, { useState, useEffect } from 'react';
import AdminDashboard from './components/AdminDashboard';
import { 
  Server, 
  Box, 
  Atom, 
  Zap, 
  Palette, 
  CheckCircle2, 
  RefreshCw, 
  Terminal, 
  Cpu, 
  ExternalLink,
  Layers,
  ArrowRight,
  Activity,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [apiStatus, setApiStatus] = useState({
    loading: false,
    connected: false,
    message: '톰캣 API 상태 미확인 (테스트 버튼을 눌러주세요)',
    timestamp: null,
    details: null
  });

  const [activeTab, setActiveTab] = useState('overview');

  const fetchApiStatus = async () => {
    setApiStatus(prev => ({ ...prev, loading: true }));
    try {
      const response = await fetch('/api/status');
      if (response.ok) {
        const data = await response.json();
        setApiStatus({
          loading: false,
          connected: true,
          message: data.message || 'Tomcat Servlet과 정상적으로 연결되었습니다.',
          timestamp: data.timestamp || new Date().toISOString(),
          details: data
        });
      } else {
        throw new Error(`HTTP Error ${response.status}`);
      }
    } catch (err) {
      setApiStatus({
        loading: false,
        connected: false,
        message: `API 연결 대기 중: Vite dev 모드에서는 Tomcat 서버(port 8080)가 실행 중이어야 합니다. (빌드 후 WAR 배포 시 자동 연결)`,
        timestamp: new Date().toLocaleTimeString(),
        details: { error: err.message }
      });
    }
  };

  useEffect(() => {
    // Initial fetch attempt
    fetchApiStatus();
  }, []);

  const techStack = [
    {
      name: 'Apache Tomcat',
      role: 'Web Application Server (WAS)',
      icon: Server,
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      desc: 'Jakarta Servlet기반 WAR 패키징을 수용하는 정통 WAS',
      status: apiStatus.connected ? 'Active (API Linked)' : 'Ready for Deployment'
    },
    {
      name: 'Apache Maven',
      role: 'Build & Lifecycle Manager',
      icon: Box,
      color: 'from-rose-500 to-red-600',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      desc: 'frontend-maven-plugin을 통한 자동화 통합 빌드 파이프라인',
      status: 'Configured (pom.xml)'
    },
    {
      name: 'React 19',
      role: 'Frontend UI Framework',
      icon: Atom,
      color: 'from-cyan-400 to-blue-600',
      badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      desc: '선언적 컴포넌트 기반 인터페이스 및 최신 React 기능',
      status: 'Running'
    },
    {
      name: 'Vite 6',
      role: 'Next-Gen Frontend Tooling',
      icon: Zap,
      color: 'from-violet-500 to-purple-600',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      desc: '초고속 HMR 및 최적화된 Rollup 번들링 빌드 엔진',
      status: 'Active (Port 5173)'
    },
    {
      name: 'Tailwind CSS v4',
      role: 'Utility-First Styling Engine',
      icon: Palette,
      color: 'from-sky-400 to-teal-500',
      badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      desc: '@tailwindcss/vite 플러그인 기반 다이나믹 디자이너 체계',
      status: 'Compiled'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <header className="glass-panel sticky top-0 z-50 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Layers className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                T-M-R Architecture Dashboard
              </h1>
              <p className="text-xs text-slate-400">Tomcat + Maven + React + Vite + Tailwind CSS</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Environment Ready
            </div>
            <button
              onClick={fetchApiStatus}
              disabled={apiStatus.loading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-medium transition-all shadow-lg shadow-indigo-600/25 disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${apiStatus.loading ? 'animate-spin' : ''}`} />
              <span>Tomcat API 연결 테스트</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 flex flex-col gap-8 z-10">
        {/* Hero Integration Banner */}
        <section className="glass-card rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Cpu className="w-64 h-64 text-indigo-400" />
          </div>

          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
              Full-Stack Modern Boilerplate
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
              Tomcat, Maven & React Vite Stack
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Java 엔터프라이즈 표준 WAS(Tomcat)와 Maven의 자동화 라이프사이클에,
              React 19와 Vite 6, Tailwind CSS v4의 고성능 프론트엔드 파이프라인이 완벽히 연동되었습니다.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setActiveTab('overview')} 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-white text-slate-900 shadow-md' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'}`}
              >
                기술 스택 개요
              </button>
              <button 
                onClick={() => setActiveTab('workflow')} 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'workflow' ? 'bg-white text-slate-900 shadow-md' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'}`}
              >
                빌드 & 배포 워크플로우
              </button>
              <button 
                onClick={() => setActiveTab('admin')} 
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${activeTab === 'admin' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border border-indigo-500/30'}`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>어드민 통제 센터 (Admin)</span>
              </button>
            </div>
          </div>
        </section>

        {activeTab === 'admin' ? (
          <AdminDashboard />
        ) : (
          <>
            {/* Tomcat API Integration Card */}
            <section className="glass-card rounded-2xl p-6 border-l-4 border-l-indigo-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${apiStatus.connected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Tomcat Backend Endpoint Status (`/api/status`)</h3>
                <p className="text-xs text-slate-400">Vite Proxy ➔ Tomcat Servlet HTTP Response Check</p>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Last Checked: {apiStatus.timestamp || 'N/A'}
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
              <span>Status: <strong className={apiStatus.connected ? 'text-emerald-400' : 'text-amber-400'}>{apiStatus.connected ? '200 OK (CONNECTED)' : 'STANDBY / PENDING'}</strong></span>
              <span>Proxy Target: http://localhost:8080</span>
            </div>
            <p className="text-slate-200 leading-relaxed pt-1">{apiStatus.message}</p>
            {apiStatus.details && (
              <pre className="text-slate-400 text-[11px] bg-slate-950 p-3 rounded-lg overflow-x-auto border border-slate-800 mt-2">
                {JSON.stringify(apiStatus.details, null, 2)}
              </pre>
            )}
          </div>
        </section>

        {/* Tech Stack Cards Grid */}
        {activeTab === 'overview' && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map((tech, idx) => {
              const IconComponent = tech.icon;
              return (
                <div key={idx} className="glass-card rounded-xl p-5 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-2.5 text-white shadow-md flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${tech.badgeBg}`}>
                        {tech.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 mb-2">{tech.role}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Integration Verified</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* Workflow Guide */}
        {activeTab === 'workflow' && (
          <section className="glass-card rounded-2xl p-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              개발 및 빌드 라이프사이클 가이드
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dev Mode */}
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-indigo-400 font-semibold text-sm">
                  <Zap className="w-4 h-4" />
                  1. 프론트엔드 독립 개발 모드 (Vite HMR)
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  `frontend/` 디렉터리에서 Vite 서버를 독립 실행하여 초고속 HMR 및 실시간 UI 작업을 진행합니다.
                </p>
                <div className="bg-slate-950 p-3 rounded-lg font-mono text-xs text-emerald-400 border border-slate-800">
                  cd frontend<br />
                  npm run dev
                </div>
              </div>

              {/* Build Mode */}
              <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-amber-400 font-semibold text-sm">
                  <Box className="w-4 h-4" />
                  2. Maven 원스톱 통합 빌드 & Tomcat WAR 생성
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  루트에서 Maven 패키지 명령을 실행하면 Vite 빌드가 자동 수행되며 `target/*.war`로 패키징됩니다.
                </p>
                <div className="bg-slate-950 p-3 rounded-lg font-mono text-xs text-amber-400 border border-slate-800">
                  mvn clean package
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-slate-300">
              <strong className="text-indigo-300 block mb-1">💡 Tomcat 배포 팁:</strong>
              생성된 `target/T-M-R_01-1.0.0.war` 파일을 Tomcat 서버의 `webapps/` 폴더에 복사하거나, IDE(Eclipse, IntelliJ, VSCode Tomcat extension)에 프로젝트를 등록하여 즉시 서비스할 수 있습니다.
            </div>
          </section>
        )}
      </>
    )}
  </main>

      {/* Footer */}
      <footer className="glass-panel border-t border-slate-800/80 py-4 px-6 mt-auto text-center text-xs text-slate-500">
        <p>Tomcat + Maven + React + Vite + Tailwind CSS Full Architecture Setup</p>
      </footer>
    </div>
  );
}
