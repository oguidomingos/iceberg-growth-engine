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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 10% Visible */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-ice-light/20 rounded-full px-4 py-2 mb-4">
                <div className="w-3 h-3 bg-ice-accent rounded-full"></div>
                <span className="font-montserrat font-semibold text-ice-accent">10% Visíveis</span>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-ice-dark mb-4">
                O que todo mundo vê
              </h3>
            </div>

            <div className="space-y-4">
              {visibleItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-ice-light/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-ice-light/30 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-ice-accent" />
                    </div>
                    <span className="font-montserrat font-medium text-ice-dark">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 90% Hidden */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-ice-dark/10 rounded-full px-4 py-2 mb-4">
                <div className="w-3 h-3 bg-ice-dark rounded-full"></div>
                <span className="font-montserrat font-semibold text-ice-dark">90% Submersos</span>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-ice-dark mb-4">
                Nossa diferença real
              </h3>
            </div>

            <div className="space-y-4">
              {hiddenItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-white/70 backdrop-blur-md border border-ice-light/40 hover:border-ice-accent/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-ice-dark/10 flex items-center justify-center group-hover:bg-ice-dark/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-ice-dark" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-montserrat font-semibold text-ice-dark mb-1">
                          {item.label}
                        </h4>
                        <p className="font-montserrat text-sm text-muted-foreground">
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

        {/* Iceberg Visual Metaphor */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-muted-foreground font-montserrat">
            <div className="w-8 h-8 rounded-full bg-ice-light/30 flex items-center justify-center">
              <span className="text-xs font-bold text-ice-accent">10%</span>
            </div>
            <div className="w-16 h-px bg-ice-light"></div>
            <span>Superfície</span>
            <div className="w-16 h-px bg-ice-light"></div>
            <div className="w-8 h-8 rounded-full bg-ice-dark/20 flex items-center justify-center">
              <span className="text-xs font-bold text-ice-dark">90%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;