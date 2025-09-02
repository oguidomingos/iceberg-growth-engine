import { Shield, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gradient-ice">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 rounded-3xl border border-ice-accent/30 bg-white/70 backdrop-blur-md shadow-2xl">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-ice-accent/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-ice-accent" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-6">
              <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-ice-dark">
                Garantia de{" "}
                <span className="text-transparent bg-gradient-deep bg-clip-text">
                  Implementação
                </span>
              </h2>

              <p className="font-montserrat text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Se em 14 dias o Setup não estiver ativo (LP no ar, campanhas rodando e SDR respondendo leads), 
                trabalhamos de graça até entregar.
              </p>

              {/* Guarantee points */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ice-accent flex-shrink-0" />
                  <span className="font-montserrat text-sm text-muted-foreground">LP funcionando</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ice-accent flex-shrink-0" />
                  <span className="font-montserrat text-sm text-muted-foreground">Campanhas ativas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ice-accent flex-shrink-0" />
                  <span className="font-montserrat text-sm text-muted-foreground">SDR respondendo</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-ice-accent rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-ice-mid rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;