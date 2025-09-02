import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Já tenho agência, preciso trocar?",
      answer: "Não necessariamente. Plugamos IA e automação na sua operação atual para reduzir CAC e aumentar qualificação. Podemos trabalhar em conjunto com sua agência."
    },
    {
      question: "E se não funcionar no meu nicho?",
      answer: "Ajustamos CPL/CAC guiados por dados específicos do seu mercado. Nossa metodologia é adaptável e já foi testada em diversos nichos B2B."
    },
    {
      question: "O investimento é muito alto?",
      answer: "Caro é perder leads por falta de estrutura. O T14 tende a se pagar no primeiro mês através da melhoria nas conversões e redução do CAC."
    },
    {
      question: "O que não está incluído no escopo?",
      answer: "Mídia paga, WhatsApp API e tokens/LLM são custos do cliente. Focamos na estrutura, automação e otimização do funil."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-ice-dark mb-6">
              Perguntas{" "}
              <span className="text-transparent bg-gradient-ocean bg-clip-text">
                Frequentes
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-ice-light/30 bg-white/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-ice-accent/50"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-montserrat font-semibold text-lg text-ice-dark pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-ice-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ice-accent flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="font-montserrat text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;