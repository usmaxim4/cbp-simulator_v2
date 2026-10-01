import { StageData } from '../data/stages';

interface InfoPanelProps {
  stage: StageData | null;
  onClose: () => void;
}

export default function InfoPanel({ stage, onClose }: InfoPanelProps) {
  if (!stage) return null;

  const stageNames = ['Лесозаготовка', 'Сырьё', 'Варка', 'Промывка', 'Отбелка', 'Размол', 'Формование', 'Сушка', 'Накатка', 'Пачки А4', 'Склад', 'Лесовосстановление'];
  const stageIndex = ['logging', 'raw-material', 'cooking', 'washing', 'bleaching', 'beating', 'forming', 'pressing', 'finishing', 'a4-packaging', 'warehouse', 'reforestation'].indexOf(stage.id);

  const getRoleDescription = () => {
    const roles: Record<string, string> = {
      'logging': 'Начальный этап полного технологического цикла — обеспечение комбината древесным сырьём. Современные харвестеры и форвардеры позволяют эффективно заготавливать древесину с минимальным воздействием на экосистему леса. Качество заготовки определяет эффективность всех последующих переделов.',
      'raw-material': 'Обеспечивает производство качественной щепы — основного сырья для целлюлозного производства. От качества подготовки щепы зависит эффективность всех последующих этапов. Размер и чистота щепы напрямую влияют на скорость варки и выход целлюлозы.',
      'cooking': 'Ключевой этап разделения древесины на целлюлозу и лигнин. Определяет выход и качество целлюлозы. Чёрный щёлок регенерируется в содорегенерационном котле, обеспечивая возврат до 95% химикатов. Это сердце целлюлозного завода.',
      'washing': 'Обеспечивает извлечение целлюлозы из варочного раствора и возврат химикатов. Качество промывки влияет на эффективность отбелки и экологичность процесса. Противоточная схема минимизирует расход свежей воды.',
      'bleaching': 'Определяет товарную белизну целлюлозы. Современные ECF-технологии (бесхлорная отбелка диоксидом хлора) минимизируют образование диоксинов. TCF-технологии полностью исключают хлорсодержащие реагенты.',
      'beating': 'Формирует свойства будущей бумаги — прочность, непрозрачность, гладкость, впитываемость. Правильный размол критически важен: недоизмол даёт хрупкую бумагу, перемол снижает производительность машины.',
      'forming': 'Определяет структуру и равномерность бумажного полотна. От качества формования зависит равномерность свойств по ширине и длине листа. Скорость сетки — ключевой фактор производительности БДМ.',
      'pressing': 'Удаляет основную часть воды из полотна механическим и термическим способами. Энергоэффективность сушки напрямую влияет на себестоимость — на сушку расходуется до 60% всей тепловой энергии.',
      'finishing': 'Финальная стадия, определяющая товарный вид продукции. Качество каландрирования влияет на печатные свойства бумаги. От точности накатки зависит эффективность последующей переработки у потребителя.',
      'a4-packaging': 'Товарный выпуск готовой продукции — резка на формат А4 и упаковка в фирменные пачки с характерным дизайном комбината. Этот этап связывает производство с конечным потребителем. Узнаваемая упаковка — классика на рынке офисной бумаги.',
      'warehouse': 'Логистический хаб между производством и рынком. Обеспечивает бесперебойное снабжение торговых сетей и офисов продукцией комбината. От эффективности склада зависят сроки доставки, уровень сервиса и удовлетворённость клиентов. Современная WMS-система управляет движением 5000 тонн бумаги по всей России.',
      'reforestation': 'Замыкающий этап полного цикла — восстановление лесных ресурсов на вырубленных делянках. Обеспечивает возобновляемость производства и экологическую устойчивость. Принцип "от леса до леса" — основа ответственного лесопользования и сертификации FSC/PEFC.'
    };
    return roles[stage.id] || '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg h-full bg-slate-950/98 backdrop-blur-xl border-l border-slate-800/50 pointer-events-auto panel-enter overflow-y-auto scrollbar-hide"
      >
        {/* Hero image section */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={stage.image}
            alt={stage.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.9) saturate(1.1)' }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${stage.bgColor} 0%, transparent 60%)` }} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:rotate-90 backdrop-blur-sm"
          >
            ✕
          </button>

          {/* Stage badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white backdrop-blur-md border"
            style={{
              backgroundColor: `${stage.color}dd`,
              borderColor: 'rgba(255,255,255,0.2)',
              boxShadow: `0 4px 12px ${stage.color}40`
            }}
          >
            Этап {stageIndex + 1} из 12
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl border-2 backdrop-blur-md"
                style={{
                  backgroundColor: `${stage.color}20`,
                  borderColor: stage.borderColor
                }}
              >
                {stage.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">{stage.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  {stage.temperature && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 border border-slate-700/50 text-slate-300 backdrop-blur-sm">
                      🌡️ {stage.temperature}
                    </span>
                  )}
                  {stage.duration && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 border border-slate-700/50 text-slate-300 backdrop-blur-sm">
                      ⏱️ {stage.duration}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-6 pt-4">
          <div className="flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: i <= stageIndex ? stage.color : 'rgba(51, 65, 85, 0.5)',
                  opacity: i === stageIndex ? 1 : i < stageIndex ? 0.5 : 0.3
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <section>
            <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-6 h-px rounded" style={{ backgroundColor: stage.color }} />
              Описание процесса
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">{stage.description}</p>
          </section>

          {/* Process Steps */}
          <section>
            <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-6 h-px rounded" style={{ backgroundColor: stage.color }} />
              Основные операции
            </h3>
            <div className="space-y-2">
              {stage.details.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-2.5 rounded-lg transition-colors hover:bg-slate-800/30"
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold"
                    style={{
                      backgroundColor: stage.bgColor,
                      color: stage.color,
                      border: `1px solid ${stage.borderColor}`
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-slate-300 text-sm leading-snug pt-1">{detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Parameters */}
          <section>
            <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-6 h-px rounded" style={{ backgroundColor: stage.color }} />
              Технические параметры
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {stage.parameters.map((param, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    backgroundColor: stage.bgColor,
                    borderColor: stage.borderColor
                  }}
                >
                  <p className="text-[10px] text-slate-500 mb-1.5 uppercase tracking-wide font-medium">{param.label}</p>
                  <p className="text-sm font-bold" style={{ color: stage.color }}>{param.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Role in chain */}
          <section className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/50">
            <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              🔗 Роль в технологической цепи
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{getRoleDescription()}</p>
          </section>

          {/* Navigation */}
          <section className="flex gap-3">
            {stageIndex > 0 && (
              <div className="flex-1 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700/50 transition-colors">
                <p className="text-[10px] text-slate-600 uppercase tracking-wide">← Предыдущий</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">{stageNames[stageIndex - 1]}</p>
              </div>
            )}
            {stageIndex < 11 && (
              <div className="flex-1 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700/50 transition-colors text-right">
                <p className="text-[10px] text-slate-600 uppercase tracking-wide">Следующий →</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">{stageNames[stageIndex + 1]}</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
