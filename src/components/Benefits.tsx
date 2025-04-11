import React from 'react';
import { Activity, Brain, Heart, Guitar as Hospital, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Activity className="h-8 w-8 text-sky-600" />,
      title: 'Improve Athletic Performance',
      description: 'Enhanced endurance and faster recovery for athletes.'
    },
    {
      icon: <Brain className="h-8 w-8 text-sky-600" />,
      title: 'Improve Metabolic Health',
      description: 'Support healthy metabolism and energy production.'
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-600" />,
      title: 'Improve Liver Function',
      description: 'Support liver health and natural detoxification.'
    },
    {
      icon: <Hospital className="h-8 w-8 text-sky-600" />,
      title: 'Help on Dialysis',
      description: 'Support for patients undergoing dialysis treatment.'
    },
    {
      icon: <Heart className="h-8 w-8 text-sky-600" />,
      title: 'Prevent Cancer',
      description: 'Potential anti-cancer properties through antioxidant action.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Health Benefits of Hydrogen Water
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-sky-50 rounded-xl hover:shadow-lg transition">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;