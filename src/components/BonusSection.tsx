import { FileText, Users, GraduationCap } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: FileText,
      title: "Blueprint Iceberg",
      description: "Guia completo dos 90% invisíveis que fazem a diferença real"
    },
    {
      icon: Users,
      title: "Playbook SDR",
      description: "Metodologia SPIN + BANT para qualificação de leads eficiente"
    },
    {
      icon: GraduationCap,
      title: "Treinamento Express",
      description: "1h para dominar CPL, CAC, LTV e métricas fundamentais"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-ice-dark mb-4">
            Bonificações incluídas em{" "}
            <span className="text-transparent bg-gradient-ocean bg-clip-text">
              todos os planos
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => {
            const IconComponent = bonus.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl border border-ice-light/30 bg-white/50 backdrop-blur-sm hover:bg-white/70 hover:border-ice-accent/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-16 h-16 rounded-2xl bg-ice-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-ice-accent/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-ice-accent" />
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-ice-dark mb-3">
                  {bonus.title}
                </h3>
                
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;