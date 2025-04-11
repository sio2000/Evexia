import React, { useState, useEffect } from 'react';
import {
  Brain,
  Heart,
  Battery,
  Shield,
  Activity,
  Dna,
  Pill,
  Droplets,
  Wind,
  Bath,
  ScrollText,
  ChevronDown,
  ChevronUp,
  Microscope,
  Zap,
  Scale,
  Baby,
  Sun,
  ArrowDown
} from 'lucide-react';
import cleanWater from '../../assets/images/cleanwater.png';
import peopleImage from '../../assets/images/people.jpg';
import useHydrogenImage from '../../assets/images/UseHydrogen.jpg';
import hydrogenLab from '../../assets/images/hydrogen-lab.jpg';
import hydrogenMolecules from '../../assets/images/hydrogen-molecules.jpg';
import hydrogenTherapy from '../../assets/images/hydrogen-therapy.jpg';

const HumansPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainBenefits = [
    {
      icon: <Shield className="h-12 w-12 text-sky-600" />,
      title: 'Strong Antioxidant Action',
      description: 'Acts as a selective antioxidant, neutralizing toxic free radicals while preserving beneficial ones. Protects cells and DNA from oxidative stress.'
    },
    {
      icon: <Activity className="h-12 w-12 text-sky-600" />,
      title: 'Anti-inflammatory Action',
      description: 'Reduces inflammation throughout the body, beneficial for arthritis, neurodegenerative diseases, and cardiovascular conditions.'
    },
    {
      icon: <Battery className="h-12 w-12 text-sky-600" />,
      title: 'Energy & Performance',
      description: 'Increases energy levels and reduces fatigue through enhanced cellular function and reduced oxidative stress.'
    },
    {
      icon: <Brain className="h-12 w-12 text-sky-600" />,
      title: 'Neuroprotective Action',
      description: 'Protects nerve cells in cases of stroke, injuries, or neurological diseases while reducing brain inflammation.'
    },
    {
      icon: <Heart className="h-12 w-12 text-sky-600" />,
      title: 'Organ Protection',
      description: 'Provides protective action for vital organs like the liver and kidneys, especially in cases of toxicity.'
    },
    {
      icon: <Scale className="h-12 w-12 text-sky-600" />,
      title: 'Metabolic Support',
      description: 'Helps regulate blood sugar levels, cholesterol, and weight management through improved metabolic function.'
    }
  ];

  const detailedSections = [
    {
      id: 'brain',
      icon: <Brain className="h-8 w-8 text-sky-600" />,
      title: 'Brain Health & Psychology',
      content: [
        'Enhancement of cognitive functions including memory and focus',
        'Prevention of neurodegenerative diseases like Alzheimer\'s and Parkinson\'s',
        'Treatment of depression and anxiety through cortisol reduction',
        'Improved cognitive flexibility in stressful environments'
      ]
    },
    {
      id: 'heart',
      icon: <Heart className="h-8 w-8 text-sky-600" />,
      title: 'Cardiovascular Health',
      content: [
        'Improvement of blood circulation through enhanced endothelial cell function',
        'Reduction of heart attack risk through anti-inflammatory action',
        'Blood pressure regulation',
        'Protection against ischemic events'
      ]
    },
    {
      id: 'metabolism',
      icon: <Activity className="h-8 w-8 text-sky-600" />,
      title: 'Metabolism & Energy',
      content: [
        'Improved insulin sensitivity for diabetes management',
        'Support for weight loss and fat metabolism',
        'Enhanced energy levels during exercise',
        'Better metabolic syndrome prevention'
      ]
    },
    {
      id: 'aging',
      icon: <Dna className="h-8 w-8 text-sky-600" />,
      title: 'Cellular Health & Aging',
      content: [
        'Protection of mitochondria and cellular repair',
        'Delay of biological aging processes',
        'Maintenance of cellular vitality',
        'Reduction of oxidative damage'
      ]
    },
    {
      id: 'immunity',
      icon: <Shield className="h-8 w-8 text-sky-600" />,
      title: 'Immunity & Development',
      content: [
        'Enhanced immune system function',
        'Better defense against viruses and bacteria',
        'Regulation of autoimmune responses',
        'Support for overall development'
      ]
    }
  ];

  const applicationMethods = [
    {
      icon: <Droplets className="h-10 w-10 text-sky-600" />,
      title: 'Hydrogen-enriched Water',
      description: 'The most common method using special hydrogen generators. Easy cellular absorption and ideal for daily antioxidant protection.'
    },
    {
      icon: <Wind className="h-10 w-10 text-sky-600" />,
      title: 'Molecular Hydrogen Inhalation',
      description: 'Specialized devices delivering H₂/O₂ mixture. Provides immediate action and higher bloodstream concentration.'
    },
    {
      icon: <Pill className="h-10 w-10 text-sky-600" />,
      title: 'Hydrogen Capsules',
      description: 'Convenient tablets or capsules that release H₂. Perfect for travel or when devices aren\'t available.'
    },
    {
      icon: <Bath className="h-10 w-10 text-sky-600" />,
      title: 'Topical Applications',
      description: 'Baths and face masks for local antioxidant and anti-aging effects through hydrogen-releasing products.'
    }
  ];

  const research = [
    {
      authors: 'Ohsawa et al.',
      year: '2007',
      journal: 'Nature Medicine',
      finding: 'Demonstrated hydrogen\'s role as a selective antioxidant in stroke cases'
    },
    {
      authors: 'Shirahata et al.',
      year: '2010',
      finding: 'Discovered positive effects in cell protection and metabolic regulation'
    },
    {
      authors: 'Nakao et al.',
      year: '2010',
      finding: 'Showed improved liver function in hepatitis B patients using hydrogen water'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={peopleImage}
            alt="Happy people drinking water"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Hydrogen Benefits for Human Health
          </h1>
          <p className={`text-lg md:text-xl text-sky-100 max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Discover how molecular hydrogen (H₂) can revolutionize human health through its unique
            properties and wide-ranging therapeutic potential.
          </p>
          <ArrowDown className={`h-10 w-10 text-white mx-auto animate-bounce transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Power of Molecular Hydrogen
            </h2>
            <p className="text-gray-600 mb-6">
              Molecular hydrogen (H₂) represents a groundbreaking advancement in health science.
              As the smallest and most abundant molecule in the universe, it offers unique
              therapeutic potential through its ability to rapidly diffuse into cells and tissues.
            </p>
            <div className="bg-sky-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Did You Know?</h3>
              <p className="text-gray-600">
                Hydrogen is the only antioxidant that can selectively target harmful free radicals
                without affecting essential cellular signaling molecules.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={cleanWater}
              alt="Pure water drops"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <Droplets className="h-8 w-8 text-sky-600" />
            </div>
          </div>
        </div>

        {/* Main Benefits Grid with Hover Effects */}
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
            Hydrogen in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e"
              alt="Laboratory research with hydrogen"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b"
              alt="Hydrogen molecules visualization"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557"
              alt="Hydrogen therapy application"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover"
            />
          </div>
        </div>

        {/* Detailed Sections with Animation */}
        <div className="space-y-6 mb-16">
          {detailedSections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-sky-50 transition-colors duration-300"
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
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-sky-600"></span>
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

        {/* Application Methods with Background Image */}
        <div className="relative bg-white rounded-2xl shadow-md p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={useHydrogenImage}
              alt="Ways to use hydrogen"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ways to Use Hydrogen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationMethods.map((method, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Section with Gradient Background */}
        <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Microscope className="h-12 w-12 text-sky-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Scientific Research</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-3">
                  <ScrollText className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="font-semibold text-gray-900">
                    {study.authors} ({study.year})
                  </span>
                </div>
                {study.journal && (
                  <p className="text-sky-600 text-sm mb-2">{study.journal}</p>
                )}
                <p className="text-gray-600 text-sm">{study.finding}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Note with Icon Animation */}
        <div className="mt-16 bg-green-50 rounded-xl p-6 flex items-start transform hover:scale-[1.01] transition-transform duration-300">
          <Shield className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1 animate-pulse" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Note</h3>
            <p className="text-gray-600">
              Hydrogen is considered safe for use, even in high concentrations, as it is a natural
              and non-toxic gas. While it can complement treatments and enhance prevention, it should
              not replace prescribed medications. Ongoing research continues to reveal promising
              results for specific conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumansPage; 