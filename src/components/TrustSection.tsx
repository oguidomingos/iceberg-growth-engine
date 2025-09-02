const TrustSection = () => {
  const companies = [
    { name: "TechCorp", width: "w-24", height: "h-8" },
    { name: "InnovaSoft", width: "w-28", height: "h-10" },
    { name: "DataFlow", width: "w-26", height: "h-8" },
    { name: "CloudWave", width: "w-32", height: "h-9" },
    { name: "DigitalHub", width: "w-30", height: "h-8" },
    { name: "SmartLabs", width: "w-28", height: "h-9" }
  ];

  return (
    <section id="logos" className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-ice-dark mb-4">
            Empresas que já confiaram na{" "}
            <span className="text-transparent bg-gradient-ocean bg-clip-text">
              Iceberg
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {companies.map((company, index) => (
            <div 
              key={index}
              className={`${company.width} ${company.height} bg-ice-light/20 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity`}
            >
              {/* Placeholder logo - simplified SVG */}
              <svg viewBox="0 0 100 40" className="w-full h-full p-2 fill-ice-dark/40">
                <rect x="10" y="15" width="20" height="10" rx="2"/>
                <rect x="35" y="10" width="15" height="20" rx="2"/>
                <rect x="55" y="12" width="25" height="16" rx="2"/>
                <text x="10" y="35" fontSize="8" className="font-montserrat font-medium">
                  {company.name}
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;