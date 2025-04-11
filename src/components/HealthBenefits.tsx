import React from 'react';
import { Activity, Brain, Shield, Heart, Stethoscope } from 'lucide-react';
import h2oSymbol from '../../assets/images/h20symbol.jpg';
import c1xrGnjVvM2OEBMox28tQ from '../../assets/images/img-c1xrGnjVvM2OEBMox28tQ.jpg';
import person775073 from '../../assets/images/person-775073_1280.jpg';
import goldenRetriever from '../../assets/images/golden-retriever-7258225_960_720.jpg';
import yoga from '../../assets/images/yoga-6128116_1280.jpg';
import waterfalls from '../../assets/images/waterfalls-6476336_1280.jpg';
import woman from '../../assets/images/woman-5380651_1280.jpg';
import water from '../../assets/images/water-1761027_1280.jpg';
import { useTranslation } from 'react-i18next';

const HealthBenefits = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <Activity className="w-8 h-8 text-sky-500" />,
      title: t('healthBenefits.benefits.0.title'),
      description: t('healthBenefits.benefits.0.description')
    },
    {
      icon: <Brain className="w-8 h-8 text-sky-500" />,
      title: t('healthBenefits.benefits.1.title'),
      description: t('healthBenefits.benefits.1.description')
    },
    {
      icon: <Shield className="w-8 h-8 text-sky-500" />,
      title: t('healthBenefits.benefits.2.title'),
      description: t('healthBenefits.benefits.2.description')
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-sky-500" />,
      title: t('healthBenefits.benefits.3.title'),
      description: t('healthBenefits.benefits.3.description')
    },
    {
      icon: <Heart className="w-8 h-8 text-sky-500" />,
      title: t('healthBenefits.benefits.4.title'),
      description: t('healthBenefits.benefits.4.description')
    },
    {
      icon: <Brain className="w-8 h-8 text-sky-500" />,
      title: t('healthBenefits.benefits.5.title'),
      description: t('healthBenefits.benefits.5.description')
    }
  ];

  const gallery = [
    { image: h2oSymbol, alt: 'H2O Symbol' },
    { image: c1xrGnjVvM2OEBMox28tQ, alt: 'Healthy Lifestyle' },
    { image: person775073, alt: 'Person Drinking Water' },
    { image: goldenRetriever, alt: 'Happy Golden Retriever' },
    { image: yoga, alt: 'Yoga Practice' },
    { image: waterfalls, alt: 'Natural Waterfalls' },
    { image: woman, alt: 'Woman Wellness' },
    { image: water, alt: 'Pure Water' }
  ];

  return (
    <>
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
            {t('healthBenefits.sectionTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
            {t('healthBenefits.experienceTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 4).map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {gallery.slice(4).map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthBenefits; 