import { Eye, Layers, Database, Bot, Cog, TrendingUp } from "lucide-react";
import icebergIllustration from "@/assets/iceberg-illustration.png";

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
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 lg:w-96 h-48 lg:h-96 bg-ice-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 lg:w-[500px] h-64 lg:h-[500px] bg-ice-mid/3 rounded-full blur-3xl"></div>
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

        {/* Iceberg Content Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Iceberg Illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={icebergIllustration} 
              alt="Iceberg illustration" 
              className="w-full max-w-lg lg:max-w-2xl h-auto opacity-8 object-contain"
            />
          </div>

          {/* Water Line Effect */}
          <div className="absolute left-0 right-0 top-[28%] transform -translate-y-1/2 z-20">
            <div className="relative h-2 lg:h-3 bg-gradient-to-r from-transparent via-ice-accent/30 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              {/* Subtle water ripples */}
              <div className="absolute -top-1 left-1/6 w-4 lg:w-6 h-1 lg:h-2 bg-ice-accent/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute top-1 right-1/5 w-3 lg:w-4 h-1 bg-ice-mid/30 rounded-full blur-sm animate-pulse delay-500"></div>
              <div className="absolute -bottom-1 left-2/3 w-5 lg:w-8 h-2 lg:h-3 bg-ice-accent/15 rounded-full blur-sm animate-pulse delay-1000"></div>
            </div>
            
            {/* Water label */}
            <div className="absolute -right-8 sm:-right-16 lg:-right-20 top-1/2 transform -translate-y-1/2 hidden sm:block">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 border border-ice-accent/20">
                <div className="w-2 h-2 bg-ice-accent rounded-full"></div>
                <span className="font-montserrat font-medium text-xs text-ice-accent">SUPERFÍCIE</span>
              </div>
            </div>
          </div>

          {/* Content Areas */}
          <div className="relative z-30 pt-8 pb-16">
            {/* Above Water - 10% Visible */}
            <div className="mb-8">
              <div className="max-w-md mx-auto text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-ice-accent/30 shadow-glow-border-primary/30">
                  <div className="w-2 h-2 bg-ice-accent rounded-full"></div>
                  <span className="font-montserrat font-bold text-xs text-ice-accent">10% VISÍVEIS</span>
                </div>
                <h3 className="font-montserrat font-bold text-xl lg:text-2xl text-ice-dark mb-4">
                  O que todos veem
                </h3>
              </div>

              <div className="max-w-md mx-auto space-y-3">
                {visibleItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-ice-light/40 shadow-glow-border-primary/30 hover:shadow-glow-border-primary transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-10 h-10 rounded-lg bg-ice-accent/20 flex items-center justify-center border border-ice-accent/30">
                        <IconComponent className="w-5 h-5 text-ice-accent" />
                      </div>
                      <span className="font-montserrat font-semibold text-base text-ice-dark">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Below Water - 90% Hidden */}
            <div className="mt-16 lg:mt-24">
              <div className="max-w-2xl mx-auto text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-ice-dark/90 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-montserrat font-bold text-xs text-white">90% SUBMERSOS</span>
                </div>
                <h3 className="font-montserrat font-bold text-xl lg:text-2xl text-white mb-3">
                  Nossa diferença real
                </h3>
                <p className="font-montserrat text-sm lg:text-base text-ice-light/90">
                  A verdadeira força está na profundidade
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                {hiddenItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="p-4 lg:p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-ice-accent/50 transition-all duration-500 hover:shadow-glow-border-secondary group hover:bg-white/15 hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-ice-accent/30 transition-all duration-300 border border-white/30 group-hover:border-ice-accent/50">
                          <IconComponent className="w-6 h-6 text-white group-hover:text-ice-light transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-montserrat font-bold text-white text-base lg:text-lg mb-2 group-hover:text-ice-light transition-colors">
                            {item.label}
                          </h4>
                          <p className="font-montserrat text-sm lg:text-base text-ice-light/80 group-hover:text-ice-light/90 transition-colors">
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

          {/* Depth indicators */}
          <div className="absolute -left-16 lg:-left-24 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/90 border border-ice-accent/60 flex items-center justify-center backdrop-blur-sm shadow-glow-border-primary/30">
              <span className="text-sm font-bold text-ice-accent">10%</span>
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-ice-accent/60 to-ice-dark/60"></div>
            <div className="w-12 h-12 rounded-full bg-ice-dark/90 border border-white/60 flex items-center justify-center backdrop-blur-sm">
              <span className="text-sm font-bold text-white">90%</span>
            </div>
          </div>
        </div>

        {/* Bottom legend */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm lg:text-base text-muted-foreground font-montserrat bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-full px-6 lg:px-8 py-4 border border-ice-light/30 shadow-glow-border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-ice-light/40 border border-ice-accent/60 flex items-center justify-center">
                <span className="text-xs font-bold text-ice-accent">10%</span>
              </div>
              <span className="font-semibold">Superfície Visível</span>
            </div>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-ice-light via-ice-accent to-ice-dark rounded-full"></div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">Profundidade Oculta</span>
              <div className="w-8 h-8 rounded-full bg-ice-dark/40 border border-white/60 flex items-center justify-center">
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