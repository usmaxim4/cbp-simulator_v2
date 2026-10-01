import { StageData } from '../data/stages';

interface IsoStageProps {
  stage: StageData;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function IsoStage({ stage, index, isActive, onClick }: IsoStageProps) {
  return (
    <button
      onClick={onClick}
      className={`iso-stage group relative cursor-pointer focus:outline-none w-full`}
    >
      {/* Card container */}
      <div
        className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-500 ${
          isActive
            ? 'scale-105 z-20'
            : 'group-hover:scale-[1.03] group-hover:z-10'
        }`}
        style={{
          borderColor: isActive ? stage.color : 'rgba(51, 65, 85, 0.5)',
          boxShadow: isActive
            ? `0 0 40px ${stage.color}25, 0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${stage.color}15`
            : '0 8px 24px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
          background: `linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.9))`
        }}
      >
        {/* Image section */}
        <div className="relative aspect-square overflow-hidden">
          {/* Background image */}
          <img
            src={stage.image}
            alt={stage.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: isActive ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.95) saturate(1)',
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(180deg, transparent 30%, ${stage.bgColor} 70%, rgba(15,23,42,0.98) 100%)`
            }}
          />

          {/* Stage number */}
          <div
            className="absolute top-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white border backdrop-blur-md"
            style={{
              backgroundColor: `${stage.color}dd`,
              borderColor: 'rgba(255,255,255,0.2)',
              boxShadow: `0 4px 12px ${stage.color}40`
            }}
          >
            {index + 1}
          </div>

          {/* Icon badge */}
          <div
            className="absolute top-3 right-3 w-8 h-8 rounded-xl flex items-center justify-center text-lg backdrop-blur-md border"
            style={{
              backgroundColor: 'rgba(15,23,42,0.7)',
              borderColor: 'rgba(100,116,139,0.3)'
            }}
          >
            {stage.icon}
          </div>

          {/* Bottom content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-sm font-bold text-white leading-tight mb-1 drop-shadow-lg">
              {stage.shortName}
            </h3>
            <div className="flex items-center gap-2">
              {stage.temperature && (
                <span className="text-[10px] text-slate-300 bg-black/40 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
                  🌡️ {stage.temperature}
                </span>
              )}
              {stage.duration && (
                <span className="text-[10px] text-slate-300 bg-black/40 px-1.5 py-0.5 rounded-md backdrop-blur-sm">
                  ⏱️ {stage.duration}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar with color accent */}
        <div className="h-1 w-full" style={{ backgroundColor: stage.color }} />

        {/* Active indicator */}
        {isActive && (
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div
              className="absolute inset-0 rounded-2xl glow-pulse"
              style={{ boxShadow: `inset 0 0 30px ${stage.color}20` }}
            />
          </div>
        )}
      </div>

      {/* Shadow beneath card (2.5D depth) */}
      <div
        className="absolute -bottom-2 left-3 right-3 h-4 rounded-full blur-md opacity-30 transition-opacity"
        style={{
          backgroundColor: stage.color,
          opacity: isActive ? 0.4 : 0.15
        }}
      />
    </button>
  );
}
