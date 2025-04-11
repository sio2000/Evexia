import React, { useState, useEffect } from 'react';
import {
  Droplets,
  Sun,
  ArrowDownUp,
  Wind,
  Sprout,
  Shield,
  CircleDot,
  Thermometer,
  Globe,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  Leaf,
  ScrollText,
  Microscope,
  Zap,
  Mountain,
  TreePine,
  Flower2
} from 'lucide-react';
import leavesImage from '../../assets/images/leaves.jpg';
import plantingImage from '../../assets/images/planting.jpg';

const PlantsPage = () => {
  console.log('PlantsPage component rendering');
  
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('PlantsPage useEffect running');
    setIsVisible(true);
  }, []);

  const mainBenefits = [
    {
      icon: <Droplets className="h-12 w-12 text-green-600" />,
      title: 'Hydration & Homeostasis',
      description: 'Essential component making up 80-95% of plant cells, maintaining fluid balance and cellular function.'
    },
    {
      icon: <Sun className="h-12 w-12 text-green-600" />,
      title: 'Photosynthesis',
      description: 'Crucial for converting sunlight into energy, splitting water molecules to produce oxygen and glucose.'
    },
    {
      icon: <ArrowDownUp className="h-12 w-12 text-green-600" />,
      title: 'Nutrient Transport',
      description: 'Dissolves and transports essential nutrients and minerals throughout the plant system.'
    },
    {
      icon: <Wind className="h-12 w-12 text-green-600" />,
      title: 'Transpiration',
      description: 'Regulates temperature and aids in water movement from roots to leaves through evaporation.'
    },
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: 'Growth & Development',
      description: 'Essential for cell expansion and overall plant growth, from roots to leaves.'
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: 'Disease Prevention',
      description: 'Supports plant immune system and helps flush out harmful pathogens.'
    }
  ];

  const detailedSections = [
    {
      id: 'cellular',
      icon: <CircleDot className="h-8 w-8 text-green-600" />,
      title: 'Cellular Structure',
      content: [
        'Makes up 80-95% of plant cell mass',
        'Maintains turgor pressure',
        'Supports cell wall integrity',
        'Essential for cellular reactions'
      ]
    },
    {
      id: 'photosynthesis',
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: 'Photosynthesis Process',
      content: [
        'Splits water molecules for energy',
        'Produces oxygen as byproduct',
        'Creates glucose for plant energy',
        'Powers plant metabolism'
      ]
    },
    {
      id: 'temperature',
      icon: <Thermometer className="h-8 w-8 text-green-600" />,
      title: 'Temperature Control',
      content: [
        'Regulates internal temperature',
        'Prevents overheating through transpiration',
        'Absorbs heat during day',
        'Releases heat at night'
      ]
    },
    {
      id: 'adaptation',
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: 'Environmental Adaptation',
      content: [
        'Enables drought resistance',
        'Supports specialized storage',
        'Allows for climate adaptation',
        'Maintains survival mechanisms'
      ]
    }
  ];

  const plantExamples = [
    {
      icon: <Mountain className="h-10 w-10 text-green-600" />,
      title: 'Desert Plants',
      description: 'Cacti and succulents store water in stems and leaves, with specialized adaptations for arid conditions.'
    },
    {
      icon: <Flower2 className="h-10 w-10 text-green-600" />,
      title: 'Water Lilies',
      description: 'Aquatic plants with specialized tissues for oxygen transport in waterlogged environments.'
    },
    {
      icon: <TreePine className="h-10 w-10 text-green-600" />,
      title: 'Forest Plants',
      description: 'Deep root systems and efficient water transport mechanisms for survival in varied conditions.'
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: 'Tropical Plants',
      description: 'Adapted to high humidity with specialized leaf structures for efficient water management.'
    }
  ];

  const research = [
    {
      title: 'Cellular Structure',
      finding: 'Water comprises 80-95% of plant cell mass, essential for maintaining cellular integrity.'
    },
    {
      title: 'Photosynthesis',
      finding: 'Water molecules are split during photosynthesis to produce oxygen and energy-rich glucose.'
    },
    {
      title: 'Adaptation',
      finding: 'Plants have evolved diverse mechanisms for water conservation and efficient usage.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={plantingImage}
            alt="Plants growing in nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Water: The Lifeblood of Plants
          </h1>
          <p className={`text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Discover how water (H₂O) orchestrates the intricate dance of life in the plant kingdom through its remarkable properties.
          </p>
          <ArrowDown className={`h-10 w-10 text-white mx-auto animate-bounce transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Vital Role of Water in Plant Life
            </h2>
            <p className="text-gray-600 mb-6">
              Water is the cornerstone of plant life, orchestrating every aspect of growth and survival.
              From the smallest moss to the mightiest redwood, water flows through the veins of all
              plant life, enabling the miracle of photosynthesis and sustaining life on Earth.
            </p>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Did You Know?</h3>
              <p className="text-gray-600">
                A single large tree can transpire up to 100 gallons of water per day, contributing
                to local humidity and creating its own microclimate.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={leavesImage}
              alt="Green leaves with water drops"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <Droplets className="h-8 w-8 text-green-600" />
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
            Water in Plant Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e"
              alt="Plant transpiration"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
              alt="Forest ecosystem"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
              alt="Sunlight through leaves"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 mb-16">
          {detailedSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-green-50 transition-colors duration-300"
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
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-green-600"></span>
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

        {/* Plant Examples Section */}
        <div className="relative bg-white rounded-2xl shadow-md p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f"
              alt="Plant diversity"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Plant Adaptations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plantExamples.map((plant, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {plant.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {plant.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {plant.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Section */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Microscope className="h-12 w-12 text-green-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Research Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  <ScrollText className="h-5 w-5 text-green-600 mr-2" />
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
        <div className="mt-16 bg-yellow-50 rounded-xl p-6 flex items-start">
          <Shield className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Stress Warning</h3>
            <p className="text-gray-600">
              Water stress can severely impact plant health and survival. Signs include wilting,
              yellowing leaves, stunted growth, and reduced flowering. Ensure proper watering
              schedules and drainage to maintain optimal plant health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsPage; 