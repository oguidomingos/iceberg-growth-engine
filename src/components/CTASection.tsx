import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-final" className="py-20 bg-gradient-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ice-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-white leading-tight">
                Chega de instabilidade.{" "}
                <span className="text-ice-light">
                  Comece a rodar em 14 dias.
                </span>
              </h2>
              
              <p className="font-montserrat text-lg text-ice-light/80 leading-relaxed">
                Funil ativo, SDR respondendo em segundos e métricas claras de CPL/CAC.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "Setup completo em apenas 14 dias",
                "SDR digital disponível 24/7",
                "Tracking e métricas desde o dia 1",
                "Suporte durante toda implementação"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-ice-accent rounded-full"></div>
                  <span className="font-montserrat text-ice-light/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-ice-accent" />
                  <span className="font-montserrat font-semibold text-white">
                    Agendar Diagnóstico Iceberg
                  </span>
                </div>
                <p className="font-montserrat text-sm text-ice-light/80">
                  Análise gratuita do seu funil atual
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Seu nome"
                    className="bg-white/20 border-white/30 text-white placeholder:text-ice-light/60 focus:border-ice-accent"
                  />
                  <Input 
                    type="email"
                    placeholder="E-mail"
                    className="bg-white/20 border-white/30 text-white placeholder:text-ice-light/60 focus:border-ice-accent"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="WhatsApp"
                    className="bg-white/20 border-white/30 text-white placeholder:text-ice-light/60 focus:border-ice-accent"
                  />
                  <Input 
                    placeholder="Empresa"
                    className="bg-white/20 border-white/30 text-white placeholder:text-ice-light/60 focus:border-ice-accent"
                  />
                </div>
                
                <Textarea 
                  placeholder="Conte sobre seu contexto atual (faturamento, principais desafios...)"
                  rows={3}
                  className="bg-white/20 border-white/30 text-white placeholder:text-ice-light/60 focus:border-ice-accent resize-none"
                />

                <Button 
                  size="lg" 
                  className="w-full font-montserrat font-semibold bg-ice-accent hover:bg-ice-mid text-white"
                >
                  Agendar Diagnóstico Iceberg
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-ice-light/60 font-montserrat">
                  Ao enviar, você concorda em receber comunicações da Iceberg Marketing. 
                  Seus dados estão protegidos.
                </p>
              </form>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-ice-accent rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-ice-light rounded-full opacity-60 animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;