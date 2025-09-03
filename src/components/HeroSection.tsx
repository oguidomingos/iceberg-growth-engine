import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-ice pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ice-light/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ice-mid/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-montserrat font-bold text-4xl lg:text-6xl leading-tight text-ice-dark">
                Mais clientes qualificados em{" "}
                <span className="text-transparent bg-gradient-ocean bg-clip-text">
                  apenas 14 dias
                </span>
              </h1>
              
              <p className="font-montserrat text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Nós fazemos os 90% que ninguém vê para que sua receita previsível seja um fato. 
                Com dados, automação e IA, colocamos seu funil para rodar: landing, campanhas, 
                tracking e um SDR digital que responde em segundos — tudo em duas semanas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="font-montserrat font-semibold text-base px-8 py-6 bg-gradient-deep hover:opacity-90 transition-opacity"
              >
                <a href="#cta-final" className="flex items-center gap-2">
                  Quero meu Diagnóstico Iceberg
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="font-montserrat font-semibold text-base px-8 py-6 border-ice-accent text-ice-accent hover:bg-ice-accent hover:text-white"
              >
                <a href="#planos">Ver Planos T14</a>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative mx-auto w-fit">
              {/* Glass card */}
              <div className="backdrop-blur-md bg-white/10 border border-ice-light/30 rounded-3xl p-8 shadow-2xl shadow-glow-border-secondary hover:shadow-glow-border-primary hover:border-ice-accent/50 transition-all duration-300">
                <div className="space-y-6">
                  {/* Chart visualization */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-montserrat font-semibold text-ice-dark">Performance</h3>
                    <div className="flex items-center gap-2 text-ice-accent">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">+347%</span>
                    </div>
                  </div>
                  
                  {/* Progress bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Conversões</span>
                        <span className="text-ice-accent font-semibold">87%</span>
                      </div>
                      <div className="w-full bg-ice-light/30 rounded-full h-2">
                        <div className="bg-gradient-ocean h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Qualificação</span>
                        <span className="text-ice-accent font-semibold">92%</span>
                      </div>
                      <div className="w-full bg-ice-light/30 rounded-full h-2">
                        <div className="bg-gradient-ocean h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">ROI</span>
                        <span className="text-ice-accent font-semibold">156%</span>
                      </div>
                      <div className="w-full bg-ice-light/30 rounded-full h-2">
                        <div className="bg-gradient-ocean h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Metric cards */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-3 bg-white/10 rounded-xl">
                      <BarChart3 className="w-6 h-6 text-ice-accent mx-auto mb-1" />
                      <div className="text-lg font-bold text-ice-dark">R$ 2.3M</div>
                      <div className="text-xs text-muted-foreground">Receita</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-xl">
                      <Zap className="w-6 h-6 text-ice-accent mx-auto mb-1" />
                      <div className="text-lg font-bold text-ice-dark">14 dias</div>
                      <div className="text-xs text-muted-foreground">Setup</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-ice-accent rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ice-mid rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;