import { useState } from 'react';
import { productionStages, StageData } from './data/stages';
import IsoStage from './components/IsoStage';
import InfoPanel from './components/InfoPanel';

function App() {
  const [activeStage, setActiveStage] = useState<StageData | null>(null);

  const handleStageClick = (stage: StageData) => {
    setActiveStage(stage);
  };

  const handleClose = () => {
    setActiveStage(null);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 md:px-8 pt-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
                🏭
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Симулятор производства <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ЦБП</span>
                </h1>
                <p className="text-slate-500 text-xs md:text-sm mt-0.5">
                  Полный цикл целлюлозно-бумажного комбината • Светогорск
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-slate-400">Система активна</span>
              </div>
              <div className="text-xs text-slate-600">
                12 этапов • Замкнутый цикл
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto">
          {/* Flow indicator */}
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/30" />
              <span className="text-xs text-slate-500 font-medium">ЛЕС</span>
            </div>
            <div className="flex-1 mx-4 relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-blue-500/30 via-50% to-emerald-500/30" />
              <div className="absolute inset-0 pipe-flow" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 12px)',
                backgroundSize: '20px 100%',
                height: '100%'
              }} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">БУМАГА А4</span>
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30" />
            </div>
            <div className="flex-1 mx-4 relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-emerald-500/30 to-green-500/30" />
              <div className="absolute inset-0 pipe-flow" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 12px)',
                backgroundSize: '20px 100%',
                height: '100%'
              }} />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30" />
              <span className="text-xs text-slate-500 font-medium">ВОССТАНОВЛЕНИЕ</span>
            </div>
          </div>

          {/* Production stages grid - 12 stages */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
            {productionStages.map((stage, index) => (
              <IsoStage
                key={stage.id}
                stage={stage}
                index={index}
                isActive={activeStage?.id === stage.id}
                onClick={() => handleStageClick(stage)}
              />
            ))}
          </div>

          {/* Cycle indicator */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800/50">
              <span className="text-emerald-400">♻️</span>
              <span className="text-xs text-slate-400">Замкнутый производственный цикл</span>
              <span className="text-xs text-slate-600">•</span>
              <span className="text-xs text-slate-500">от леса до леса</span>
            </div>
          </div>

          {/* Bottom info strip */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <span className="text-lg">💡</span>
                </div>
                <div>
                  <p className="text-sm text-slate-300 font-medium">Полный технологический цикл</p>
                  <p className="text-xs text-slate-500">12 этапов: от заготовки древесины до восстановления лесов • Нажмите на любой этап для детальной информации</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <span>Заготовка</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <span>Варка</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
                  <span>Бумага</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                  <span>Продукция</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                  <span>Экология</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Info Panel */}
      <InfoPanel stage={activeStage} onClose={handleClose} />
    </div>
  );
}

export default App;
