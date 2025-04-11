import React, { useState, useEffect } from 'react';
import {
  Droplets,
  Thermometer,
  Beaker,
  ArrowDownUp,
  Trash2,
  Apple,
  Brain,
  Dna,
  Dog,
  Heart,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  Scale,
  Microscope,
  ScrollText,
  Shield,
  Wind,
  Bone,
  Baby,
  Activity
} from 'lucide-react';
import beeImage from '../../assets/images/bee.jpg';

const AnimalsPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainBenefits = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: 'Hydration & Homeostasis',
      description: 'Essential component making up 60-80% of animal bodies, maintaining fluid balance and cellular function.'
    },
    {
      icon: <Thermometer className="h-12 w-12 text-blue-600" />,
      title: 'Temperature Regulation',
      description: 'Crucial for body temperature control through sweating and breathing mechanisms.'
    },
    {
      icon: <Beaker className="h-12 w-12 text-blue-600" />,
      title: 'Universal Solvent',
      description: 'Dissolves vital nutrients, vitamins, and minerals for transport throughout the body.'
    },
    {
      icon: <ArrowDownUp className="h-12 w-12 text-blue-600" />,
      title: 'Substance Transport',
      description: 'Facilitates blood circulation and transport of oxygen, nutrients, and waste products.'
    },
    {
      icon: <Trash2 className="h-12 w-12 text-blue-600" />,
      title: 'Toxin Elimination',
      description: 'Supports kidney and liver function in removing waste and toxic substances.'
    },
    {
      icon: <Apple className="h-12 w-12 text-blue-600" />,
      title: 'Digestive Health',
      description: 'Essential for digestion, nutrient absorption, and proper bowel function.'
    }
  ];

  const detailedSections = [
    {
      id: 'cellular',
      icon: <Dna className="h-8 w-8 text-blue-600" />,
      title: 'Water as a Building Block',
      content: [
        '75% of intracellular fluid is water',
        '25% exists in interstitial and extracellular fluid',
        'Provides structural stability to tissues',
        'Essential for cytoplasm composition'
      ]
    },
    {
      id: 'nervous',
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Brain & Nervous System',
      content: [
        'Ensures proper nerve signal conduction',
        'Supports cerebrospinal fluid function',
        'Prevents cognitive dysfunction',
        'Maintains optimal reflexes'
      ]
    },
    {
      id: 'circulatory',
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Circulatory System',
      content: [
        'Blood plasma is 90% water',
        'Maintains proper blood viscosity',
        'Regulates blood pressure',
        'Supports heart function'
      ]
    },
    {
      id: 'respiratory',
      icon: <Wind className="h-8 w-8 text-blue-600" />,
      title: 'Respiratory System',
      content: [
        'Keeps lung surfaces moist',
        'Enables oxygen/CO2 exchange',
        'Supports breathing function',
        'Aids in temperature regulation'
      ]
    },
    {
      id: 'skeletal',
      icon: <Bone className="h-8 w-8 text-blue-600" />,
      title: 'Skeletal & Muscular System',
      content: [
        'Provides joint lubrication',
        'Prevents bone friction',
        'Supports muscle function',
        'Prevents muscle cramps'
      ]
    }
  ];

  const speciesExamples = [
    {
      icon: <Dog className="h-10 w-10 text-blue-600" />,
      title: 'Dogs & Cats',
      description: 'Need clean water daily to prevent urinary problems and maintain optimal health.'
    },
    {
      icon: <Scale className="h-10 w-10 text-blue-600" />,
      title: 'Livestock',
      description: 'Water intake directly affects milk production and overall performance.'
    },
    {
      icon: <Baby className="h-10 w-10 text-blue-600" />,
      title: 'Birds',
      description: 'Extremely sensitive to dehydration due to their small body size and fast metabolism.'
    },
    {
      icon: <Activity className="h-10 w-10 text-blue-600" />,
      title: 'Desert Animals',
      description: 'Special adaptations for water conservation and efficient water use.'
    }
  ];

  const research = [
    {
      title: 'Cellular Hydration',
      finding: 'Water comprises 60-80% of animal body weight, essential for cellular function.'
    },
    {
      title: 'Thermoregulation',
      finding: 'Critical role in maintaining body temperature through evaporative cooling.'
    },
    {
      title: 'Metabolic Function',
      finding: 'Vital for all biochemical reactions and energy production in animals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f"
            alt="Animals drinking water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Water: The Essence of Animal Life
          </h1>
          <p className={`text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Discover how water (H₂O) plays a crucial role in sustaining and nurturing animal life through its remarkable properties.
          </p>
          <ArrowDown className={`h-10 w-10 text-white mx-auto animate-bounce transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Power of Water in Animal Life
            </h2>
            <p className="text-gray-600 mb-6">
              Water is the foundation of all animal life, making up the majority of their body composition
              and playing a vital role in every biological process. From the smallest insects to the
              largest mammals, water is essential for survival and optimal function.
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Did You Know?</h3>
              <p className="text-gray-600">
                Some desert animals have evolved remarkable adaptations to conserve water, allowing
                them to survive in extreme conditions with minimal water intake.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={beeImage}
              alt="Bee drinking water"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Water in Nature
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1547721064-da6cfb341d50"
              alt="Wildlife at water source"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1484406566174-9da000fda645"
              alt="Animal hydration"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1579168765467-3b235f938439"
              alt="Water ecosystem"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 mb-16">
          {detailedSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <div className="flex items-center space-x-3">
                  {section.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                {activeSection === section.id ? (
                  <ChevronUp className="h-6 w-6 text-gray-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </button>
              {activeSection === section.id && (
                <div className="px-6 pb-4 animate-fadeIn">
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        </span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Species Examples Section */}
        <div className="relative bg-white rounded-2xl shadow-md p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500479694472-551d1fb6258d"
              alt="Natural habitat"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Species-Specific Water Needs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {speciesExamples.map((species, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {species.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {species.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {species.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Microscope className="h-12 w-12 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Research Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  <ScrollText className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    {study.title}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{study.finding}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Section */}
        <div className="mt-16 bg-red-50 rounded-xl p-6 flex items-start">
          <Shield className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dehydration Warning</h3>
            <p className="text-gray-600">
              Dehydration can be life-threatening for animals. Signs include reduced activity,
              dry mouth, sunken eyes, and decreased skin elasticity. Always ensure animals have
              access to clean, fresh water, especially during hot weather or illness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalsPage; 