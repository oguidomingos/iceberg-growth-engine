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
    <section id="metodo" className="py-20 bg-gradient-ice relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-ice-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-ice-mid/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-ice-dark mb-6">
            A diferença está nos{" "}
            <span className="text-transparent bg-gradient-deep bg-clip-text">
              90% invisíveis
            </span>
          </h2>
        </div>

        {/* Iceberg Visual Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Water Line Effect */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-20">
            <div className="h-1 bg-gradient-to-r from-transparent via-ice-accent/60 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
            {/* Water ripples */}
            <div className="absolute -top-2 left-1/4 w-8 h-4 bg-ice-accent/20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -top-1 right-1/3 w-6 h-3 bg-ice-accent/30 rounded-full blur-sm animate-pulse delay-300"></div>
            <div className="absolute -bottom-2 left-1/3 w-10 h-5 bg-ice-accent/15 rounded-full blur-sm animate-pulse delay-700"></div>
          </div>

          {/* Iceberg Structure */}
          <div className="relative">
            {/* Above Water - 10% Visible */}
            <div className="relative z-10 pb-8">
              {/* Iceberg Top Part */}
              <div className="relative mx-auto w-80 h-64">
                {/* Main iceberg shape - top */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-ice-light/80 to-ice-light/60 rounded-t-full border border-ice-light/40 shadow-glow-border-primary backdrop-blur-md"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-ice-accent/20 rounded-full px-3 py-1 mb-3">
                      <div className="w-2 h-2 bg-ice-accent rounded-full"></div>
                      <span className="font-montserrat font-semibold text-xs text-ice-accent">10% VISÍVEIS</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-ice-dark mb-2">
                      O que todo mundo vê
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {visibleItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div 
                          key={index}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-ice-light/30"
                        >
                          <div className="w-6 h-6 rounded bg-ice-light/30 flex items-center justify-center">
                            <IconComponent className="w-3 h-3 text-ice-accent" />
                          </div>
                          <span className="font-montserrat font-medium text-xs text-ice-dark">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Below Water - 90% Hidden */}
            <div className="relative z-5 pt-8">
              {/* Iceberg Bottom Part - Much Larger */}
              <div className="relative mx-auto w-96 h-96">
                {/* Main iceberg shape - bottom (wider and deeper) */}
                <div className="absolute inset-0 bg-gradient-to-b from-ice-mid/70 via-ice-dark/60 to-ice-dark/80 rounded-b-full border border-ice-dark/40 shadow-glow-accent backdrop-blur-md"></div>
                
                {/* Underwater effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-ice-accent/10 to-ice-dark/20 rounded-b-full"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-ice-dark/30 rounded-full px-3 py-1 mb-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="font-montserrat font-semibold text-xs text-white">90% SUBMERSOS</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-white mb-2">
                      Nossa diferença real
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {hiddenItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div 
                          key={index}
                          className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-ice-accent/50 transition-all duration-300 hover:shadow-glow-border-secondary group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-montserrat font-semibold text-white text-sm mb-1">
                                {item.label}
                              </h4>
                              <p className="font-montserrat text-xs text-ice-light/80">
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

          {/* Side decorative elements */}
          <div className="absolute -left-16 top-1/4 w-32 h-32 bg-ice-accent/5 rounded-full blur-2xl"></div>
          <div className="absolute -right-16 bottom-1/4 w-40 h-40 bg-ice-dark/5 rounded-full blur-2xl"></div>
        </div>

        {/* Bottom explanation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground font-montserrat">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-ice-light/30 flex items-center justify-center">
                <span className="text-xs font-bold text-ice-accent">10%</span>
              </div>
              <span>Superfície</span>
            </div>
            <div className="w-20 h-px bg-gradient-to-r from-ice-light via-ice-accent to-ice-dark"></div>
            <div className="flex items-center gap-2">
              <span>Profundidade</span>
              <div className="w-6 h-6 rounded-full bg-ice-dark/30 flex items-center justify-center">
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