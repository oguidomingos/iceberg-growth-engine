import { TrendingDown, Users, BarChart, Volume2, Settings, Target } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Leads caros",
      description: "CAC alto sem previsibilidade de retorno"
    },
    {
      icon: Users,
      title: "Equipe sobrecarregada",
      description: "Time gastando tempo em tarefas manuais"
    },
    {
      icon: BarChart,
      title: "Resultados instáveis",
      description: "Performance varia sem razão aparente"
    },
    {
      icon: Volume2,
      title: "Concorrência barulhenta",
      description: "Difícil se destacar no mercado saturado"
    },
    {
      icon: Settings,
      title: "Sem base técnica",
      description: "Falta de tracking e dados confiáveis"
    },
    {
      icon: Target,
      title: "Pouca previsibilidade",
      description: "Impossível planejar crescimento sustentável"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-ice-dark mb-6">
            Por que o seu marketing não é{" "}
            <span className="text-transparent bg-gradient-ocean bg-clip-text">
              sólido como deveria ser?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-ice-light/30 bg-white/50 backdrop-blur-sm hover:bg-white/70 hover:border-ice-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ice-light/20 flex items-center justify-center group-hover:bg-ice-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-ice-accent" />
                  </div>
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-ice-dark mb-2">
                  {problem.title}
                </h3>
                
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;