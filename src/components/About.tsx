import React from 'react';
import { ArrowRight, Leaf, Droplets, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import image1000bc from '/assets/images/1000bc.png';
import image1000bc2 from '/assets/images/1000bc2.png';
import imageBC from '/assets/images/bc.jpeg';
import imageBC2 from '/assets/images/bc2.jpeg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D89084]/5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A7D7C5]/5 rounded-full transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2C3E50] to-[#3498DB] mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              {t('about.subtitle')}
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-[#D89084]/10 rounded-xl inline-block mb-4">
                  <Leaf className="h-8 w-8 text-[#D89084]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.features.biological.title')}</h3>
                <p className="text-gray-600">{t('about.features.biological.description')}</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-[#A7D7C5]/10 rounded-xl inline-block mb-4">
                  <Droplets className="h-8 w-8 text-[#A7D7C5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.features.biodynamic.title')}</h3>
                <p className="text-gray-600">{t('about.features.biodynamic.description')}</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-[#F0B7A4]/10 rounded-xl inline-block mb-4">
                  <Sun className="h-8 w-8 text-[#F0B7A4]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.features.sustainable.title')}</h3>
                <p className="text-gray-600">{t('about.features.sustainable.description')}</p>
              </div>
            </div>

            {/* Images and Button Section */}
            <div className="flex items-center justify-center gap-8">
              <div className="flex gap-6">
                <div className="relative w-64 h-64 transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[#D89084]/10 rounded-2xl backdrop-blur-sm"></div>
                  <img 
                    src={imageBC} 
                    alt="BC Products" 
                    className="rounded-2xl shadow-lg relative z-10 w-full h-full object-cover"
                  />
                </div>
                <div className="relative w-64 h-64 transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[#D89084]/10 rounded-2xl backdrop-blur-sm"></div>
                  <img 
                    src={image1000bc} 
                    alt="1000BC" 
                    className="rounded-2xl shadow-lg relative z-10 w-full h-full object-cover"
                  />
                </div>
              </div>

              <Link 
                to="/1000BC" 
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group mx-12 text-lg"
              >
                {t('about.readMore')}
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex gap-6">
                <div className="relative w-64 h-64 transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[#A7D7C5]/10 rounded-2xl backdrop-blur-sm"></div>
                  <img 
                    src={image1000bc2} 
                    alt="1000BC Products" 
                    className="rounded-2xl shadow-lg relative z-10 w-full h-full object-cover"
                  />
                </div>
                <div className="relative w-64 h-64 transform hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-[#A7D7C5]/10 rounded-2xl backdrop-blur-sm"></div>
                  <img 
                    src={imageBC2} 
                    alt="BC Additional Products" 
                    className="rounded-2xl shadow-lg relative z-10 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;