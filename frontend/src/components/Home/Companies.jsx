import React, { useState, useRef, useEffect } from "react";

const Companies = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  const companies = [
    { logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", name: "Microsoft" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", name: "Amazon" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", name: "Google" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", name: "Apple" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", name: "Facebook" },
    // { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/IBM_logo.svg", name: "IBM" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg", name: "Intel" },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", name: "Samsung" },
  ];

  // Duplicate for seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const animate = () => {
      setScrollX(prev => {
        const newScrollX = prev + 0.75;
        if (containerRef.current?.firstElementChild && 
            newScrollX >= containerRef.current.firstElementChild.offsetWidth * companies.length / 2) {
          return 0;
        }
        return newScrollX;
      });
    };

    const animationId = setInterval(animate, 30);
    return () => clearInterval(animationId);
  }, [companies.length]);

  return (
    <section className="container mx-auto py-12 md:py-16 overflow-hidden">
      <div className="relative">
        <div><h1>Trusted by over 16,000 companies and millions of learners around the world</h1></div>
        <div
          ref={containerRef}
          className="flex items-center space-x-12"
          style={{
            transform: `translateX(-${scrollX}px)`,
            width: "fit-content",
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <img
              key={`${company.name}-${index}`}
              src={company.logo}
              alt={company.name}
              className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
        
        {/* Gradient fade effects on sides */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export default Companies;