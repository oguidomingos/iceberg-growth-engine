import { Eye, Layers, Database, Bot, Cog, TrendingUp } from "lucide-react";

const MethodSection = () => {
  const visibleItems = [
    { icon: Eye, label: "Campanhas" },
    { icon: Layers, label: "Landing Pages" },
    { icon: TrendingUp, label: "Anúncios" }
  ];

  const hiddenItems = [
    { icon: Database, label: "Dados confiáveis", description: "CAC/LTV/ROI precisos" },
    { icon: Bot, label: "Automação inteligente", description: "Fluxos que convertem" },
    { icon: Cog, label: "IA/Agente SDR 24/7", description: "Atendimento instantâneo" },
    { icon: Layers, label: "Processos replicáveis", description: "Escalabilidade garantida" },
    { icon: TrendingUp, label: "Melhoria contínua", description: "Otimização baseada em dados" }
  ];

  return (
    <section id="metodo" className="py-12 lg:py-20 bg-gradient-ice relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 lg:w-96 h-48 lg:h-96 bg-ice-accent/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 lg:w-[500px] h-64 lg:h-[500px] bg-ice-mid/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 lg:w-[800px] h-48 lg:h-[400px] bg-ice-dark/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-5xl text-ice-dark mb-4 lg:mb-6">
            A diferença está nos{" "}
            <span className="text-transparent bg-gradient-deep bg-clip-text">
              90% invisíveis
            </span>
          </h2>
          <p className="font-montserrat text-sm lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Como um iceberg, o que realmente importa está abaixo da superfície
          </p>
        </div>

        {/* Iceberg Visual Container */}
        <div className="relative max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto">
          {/* Animated Water Surface */}
          <div className="absolute left-0 right-0 top-[30%] sm:top-[35%] transform -translate-y-1/2 z-30">
            {/* Main water line */}
            <div className="relative h-2 lg:h-3 bg-gradient-to-r from-transparent via-ice-accent/40 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              
              {/* Animated water ripples */}
              <div className="absolute -top-1 left-1/6 w-4 lg:w-6 h-1 lg:h-2 bg-ice-accent/30 rounded-full blur-sm animate-ping"></div>
              <div className="absolute top-1 right-1/5 w-3 lg:w-4 h-1 bg-ice-mid/40 rounded-full blur-sm animate-ping delay-500"></div>
              <div className="absolute -bottom-1 left-2/3 w-5 lg:w-8 h-2 lg:h-3 bg-ice-accent/20 rounded-full blur-sm animate-ping delay-1000"></div>
              
              {/* Water surface reflection */}
              <div className="absolute -top-4 lg:-top-6 left-0 right-0 h-4 lg:h-6 bg-gradient-to-b from-ice-accent/10 to-transparent blur-sm"></div>
            </div>
            
            {/* Water label */}
            <div className="absolute -right-8 sm:-right-16 lg:-right-20 top-1/2 transform -translate-y-1/2 hidden sm:block">
              <div className="flex items-center gap-2 bg-ice-accent/20 rounded-full px-2 lg:px-3 py-1 backdrop-blur-sm">
                <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-ice-accent rounded-full animate-pulse"></div>
                <span className="font-montserrat font-medium text-xs text-ice-accent">SUPERFÍCIE</span>
              </div>
            </div>
          </div>

          {/* Iceberg Structure */}
          <div className="relative">
            {/* Above Water - 10% Visible */}
            <div className="relative z-20 pb-2 lg:pb-4">
              <div className="relative mx-auto w-64 sm:w-72 lg:w-80 h-48 sm:h-56 lg:h-72">
                {/* Iceberg tip - realistic shape */}
                <div className="absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 top-0 bottom-4 sm:bottom-6 lg:bottom-8 bg-gradient-to-b from-white via-ice-light/90 to-ice-light/70 rounded-t-full border border-ice-light/50 shadow-glow-border-primary backdrop-blur-lg transform rotate-2"></div>
                <div className="absolute inset-x-3 sm:inset-x-4 lg:inset-x-6 top-1 sm:top-2 bottom-3 sm:bottom-4 lg:bottom-6 bg-gradient-to-b from-white/80 via-ice-light/60 to-transparent rounded-t-full"></div>
                
                {/* Ice texture effects */}
                <div className="absolute top-2 lg:top-4 left-8 lg:left-12 w-2 lg:w-4 h-2 lg:h-4 bg-white/60 rounded-full blur-sm"></div>
                <div className="absolute top-4 lg:top-8 right-12 lg:right-16 w-3 lg:w-6 h-3 lg:h-6 bg-ice-light/40 rounded-full blur-sm"></div>
                <div className="absolute top-6 lg:top-12 left-16 lg:left-20 w-2 lg:w-3 h-2 lg:h-3 bg-white/80 rounded-full blur-sm"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-3 sm:p-4 lg:p-6 flex flex-col justify-center z-10">
                  <div className="text-center mb-3 lg:mb-6">
                    <div className="inline-flex items-center gap-1 lg:gap-2 bg-ice-accent/25 rounded-full px-2 lg:px-4 py-1 lg:py-2 mb-2 lg:mb-4 backdrop-blur-sm border border-ice-accent/30">
                      <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-ice-accent rounded-full animate-pulse"></div>
                      <span className="font-montserrat font-bold text-xs text-ice-accent">10% VISÍVEIS</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-base lg:text-xl text-ice-dark mb-1 lg:mb-2">
                      O que todos veem
                    </h3>
                  </div>

                  <div className="space-y-2 lg:space-y-3">
                    {visibleItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div 
                          key={index}
                          className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-lg lg:rounded-xl bg-white/60 backdrop-blur-md border border-ice-light/40 shadow-glow-border-primary/50 hover:shadow-glow-border-primary transition-all duration-300 hover:scale-105"
                        >
                          <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-lg bg-ice-accent/20 flex items-center justify-center border border-ice-accent/30">
                            <IconComponent className="w-3 lg:w-4 h-3 lg:h-4 text-ice-accent" />
                          </div>
                          <span className="font-montserrat font-semibold text-xs lg:text-sm text-ice-dark">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Below Water - 90% Hidden */}
            <div className="relative z-10 pt-2 lg:pt-4">
              <div className="relative mx-auto w-80 sm:w-96 lg:w-[500px] h-80 sm:h-96 lg:h-[600px]">
                {/* Massive underwater iceberg - more realistic proportions */}
                <div className="absolute inset-0 bg-gradient-to-b from-ice-mid/60 via-ice-dark/70 to-ice-dark/90 rounded-b-full border border-ice-dark/50 shadow-glow-accent backdrop-blur-lg transform -rotate-1"></div>
                <div className="absolute inset-x-2 sm:inset-x-4 top-2 sm:top-4 bottom-0 bg-gradient-to-b from-ice-mid/40 via-ice-dark/50 to-ice-dark/70 rounded-b-full"></div>
                <div className="absolute inset-x-4 sm:inset-x-8 top-4 sm:top-8 bottom-2 sm:bottom-4 bg-gradient-to-b from-ice-dark/30 via-ice-dark/60 to-ice-dark/80 rounded-b-full"></div>
                
                {/* Underwater lighting effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-ice-accent/15 via-transparent to-ice-dark/30 rounded-b-full"></div>
                <div className="absolute top-1/4 left-1/4 w-16 lg:w-32 h-16 lg:h-32 bg-ice-accent/10 rounded-full blur-2xl"></div>
                <div className="absolute top-2/3 right-1/3 w-12 lg:w-24 h-12 lg:h-24 bg-ice-mid/15 rounded-full blur-xl"></div>
                
                {/* Deep water particles */}
                <div className="absolute top-1/3 left-8 lg:left-12 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-ice-accent/30 rounded-full blur-sm animate-pulse delay-200"></div>
                <div className="absolute top-1/2 right-12 lg:right-16 w-1 h-1 bg-white/40 rounded-full blur-sm animate-pulse delay-700"></div>
                <div className="absolute bottom-1/3 left-16 lg:left-24 w-2 lg:w-3 h-2 lg:h-3 bg-ice-mid/20 rounded-full blur-sm animate-pulse delay-1200"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 lg:p-10 flex flex-col justify-center z-10">
                  <div className="text-center mb-4 lg:mb-8">
                    <div className="inline-flex items-center gap-1 lg:gap-2 bg-ice-dark/40 rounded-full px-2 lg:px-4 py-1 lg:py-2 mb-3 lg:mb-6 backdrop-blur-md border border-white/20">
                      <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="font-montserrat font-bold text-xs text-white">90% SUBMERSOS</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-lg lg:text-2xl text-white mb-2 lg:mb-3">
                      Nossa diferença real
                    </h3>
                    <p className="font-montserrat text-xs lg:text-sm text-ice-light/90">
                      A verdadeira força está na profundidade
                    </p>
                  </div>

                  <div className="space-y-2 lg:space-y-4">
                    {hiddenItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div 
                          key={index}
                          className="p-2 lg:p-4 rounded-lg lg:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-ice-accent/60 transition-all duration-500 hover:shadow-glow-border-secondary group hover:bg-white/15 hover:scale-105"
                        >
                          <div className="flex items-start gap-2 lg:gap-4">
                            <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-lg lg:rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-ice-accent/30 transition-all duration-300 border border-white/30 group-hover:border-ice-accent/50">
                              <IconComponent className="w-4 lg:w-5 h-4 lg:h-5 text-white group-hover:text-ice-light transition-colors" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-montserrat font-bold text-white text-sm lg:text-base mb-1 lg:mb-2 group-hover:text-ice-light transition-colors">
                                {item.label}
                              </h4>
                              <p className="font-montserrat text-xs lg:text-sm text-ice-light/80 group-hover:text-ice-light/90 transition-colors">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Depth indicators - hidden on mobile */}
          <div className="absolute -left-16 lg:-left-24 top-1/4 hidden lg:flex flex-col items-center gap-2">
            <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-ice-light/20 border border-ice-light/40 flex items-center justify-center backdrop-blur-sm">
              <span className="text-xs lg:text-sm font-bold text-ice-accent">10%</span>
            </div>
            <div className="w-px h-24 lg:h-32 bg-gradient-to-b from-ice-light/60 to-ice-dark/60"></div>
            <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-ice-dark/30 border border-ice-dark/60 flex items-center justify-center backdrop-blur-sm">
              <span className="text-xs lg:text-sm font-bold text-white">90%</span>
            </div>
          </div>

          {/* Side environmental effects */}
          <div className="absolute -right-16 lg:-right-32 top-1/3 w-24 lg:w-48 h-24 lg:h-48 bg-ice-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute -left-16 lg:-left-32 bottom-1/3 w-28 lg:w-56 h-28 lg:h-56 bg-ice-dark/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        {/* Bottom legend */}
        <div className="mt-12 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm lg:text-base text-muted-foreground font-montserrat bg-white/50 backdrop-blur-sm rounded-2xl lg:rounded-full px-4 lg:px-8 py-3 lg:py-4 border border-ice-light/30">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-full bg-ice-light/40 border border-ice-accent/60 flex items-center justify-center">
                <span className="text-xs font-bold text-ice-accent">10%</span>
              </div>
              <span className="font-semibold">Superfície Visível</span>
            </div>
            <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-ice-light via-ice-accent to-ice-dark rounded-full"></div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="font-semibold">Profundidade Oculta</span>
              <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-full bg-ice-dark/40 border border-white/60 flex items-center justify-center">
                <span className="text-xs font-bold text-white">90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;