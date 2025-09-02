import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      name: "T14 — Essentials",
      price: "R$ 4.900",
      maintenance: "R$ 2.500/mês",
      description: "Fundação sólida para começar",
      popular: false,
      features: [
        "1 LP + Obrigado",
        "8 criativos (6 estáticos + 2 vídeos)",
        "2 campanhas (Meta + Search) + 1 retargeting",
        "GA4, GTM, Pixels configurados",
        "Agente SDR (6 roteiros / 3 sequências)",
        "Até 300 conversas de IA/mês",
        "1 fluxo (boas-vindas + no-show)",
        "Dashboard CPL/CAC + treino 1h"
      ],
      cta: "Começar com Essentials"
    },
    {
      name: "T14 — Pro",
      price: "R$ 7.900",
      maintenance: "R$ 3.900/mês",
      description: "Solução completa e otimizada",
      popular: true,
      features: [
        "1 LP + Obrigado + 1 micro-LP",
        "12 criativos (8 estáticos + 4 vídeos)",
        "3 campanhas (Meta + Search + YouTube) + 1 retargeting",
        "Tracking avançado + conversões aprimoradas",
        "Agente SDR (até 600 conversas/mês)",
        "2 fluxos (boas-vindas + educação)",
        "Relatório inicial + plano de otimização"
      ],
      cta: "Começar com Pro"
    },
    {
      name: "T14 — Scale",
      price: "R$ 9.900",
      maintenance: "R$ 6.500/mês",
      description: "Para quem quer escalar rapidamente",
      popular: false,
      features: [
        "2 LPs (A/B) + Obrigado",
        "18 criativos (12 estáticos + 6 vídeos)",
        "4 campanhas (Meta + PMax + Search + YouTube) + 2 retargetings",
        "Tracking completo + UTMs padronizadas",
        "Agente SDR (até 1.200 conversas/mês)",
        "3 fluxos (boas-vindas + educação + reativação)",
        "Treinamento de time + playbook T14"
      ],
      cta: "Começar com Scale"
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-ice relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-ice-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-ice-mid/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-ice-dark mb-6">
            O primeiro passo:{" "}
            <span className="text-transparent bg-gradient-deep bg-clip-text">
              Setup T14
            </span>
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto">
            Estrutura completa em 14 dias.
          </p>
          <p className="font-montserrat text-sm text-muted-foreground mt-2 italic">
            *Mídia paga, WhatsApp API e tokens/LLM são custos do cliente
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular 
                  ? 'border-ice-accent bg-white/80 shadow-xl ring-2 ring-ice-accent/20' 
                  : 'border-ice-light/30 bg-white/60 hover:border-ice-accent/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-deep text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-montserrat font-bold text-xl text-ice-dark mb-2">
                  {plan.name}
                </h3>
                <p className="font-montserrat text-muted-foreground mb-4">
                  {plan.description}
                </p>
                
                <div className="space-y-1">
                  <div className="font-montserrat font-bold text-3xl text-ice-dark">
                    {plan.price}
                  </div>
                  <div className="font-montserrat text-sm text-muted-foreground">
                    Manutenção opcional: {plan.maintenance}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-ice-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-ice-accent" />
                    </div>
                    <span className="font-montserrat text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full font-montserrat font-semibold ${
                  plan.popular 
                    ? 'bg-gradient-deep hover:opacity-90' 
                    : 'bg-ice-accent hover:bg-ice-mid'
                }`}
                size="lg"
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;