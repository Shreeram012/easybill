import React, { useRef, useEffect, useState } from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    title: "Create Invoices",
    description: "Effortlessly create professional invoices and send them to your customers in a few clicks.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
        <path d="M8 12h8M8 16h5" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    title: "Track Expenses",
    description: "Easily upload and categorize your expenses and receipts.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
        <path d="M8 12h8M8 16h8" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    title: "Manage Inventory",
    description: "Keep track of your stock levels and get notified when it's time to reorder.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
        <path d="M8 12h8" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    title: "Estimates",
    description: "Create estimates for your customers and turn them into invoices when they accept.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" />
        <path d="M16 8l-8 8M16 16l-8-8" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    title: "Credit Notes",
    description: "Create credit notes for your customers and add them to their invoices.",
  },
];

const Features: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(Array(features.length).fill(false));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-full mx-32 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Features that make your life easier
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Our platform is designed to simplify the process of managing your finances. Whether you're a business owner, freelancer, or self-employed professional, our tools can help you save time and reduce stress.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              ref={el => { cardsRef.current[idx] = el; }}
              data-idx={idx}
              className={`h-72 rounded-xl shadow-sm p-6 flex flex-col items-start border border-mainDark feature-fade-up${visible[idx] ? " feature-fade-up--visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.08 + 0.1}s` }}
            >
              {feature.icon}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;