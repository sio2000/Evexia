import React, { useEffect } from 'react';
import { Heart, Leaf, Brain, Activity, ChevronRight, Zap, Timer } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Transportation = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-6">
            {t('transportation.sectionTitle')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('transportation.mainTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('transportation.mainDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Heart className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t('transportation.features.0.title')}</h3>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                    April 2025
                  </span>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {t('transportation.features.0.description')}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl transform hover:scale-105 transition-transform">
                    <Leaf className="h-6 w-6 text-blue-600 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">{t('transportation.features.1.title')}</h4>
                    <p className="text-sm text-gray-600">{t('transportation.features.1.description')}</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl transform hover:scale-105 transition-transform">
                    <Brain className="h-6 w-6 text-green-500 mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">{t('transportation.features.2.title')}</h4>
                    <p className="text-sm text-gray-600">{t('transportation.features.2.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('transportation.features.3.title')}</h3>
                    <p className="text-gray-600">
                      {t('transportation.features.3.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{t('transportation.features.4.title')}</h3>
                    <p className="text-gray-600">
                      {t('transportation.features.4.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-purple-100 rounded-xl">
                  <Timer className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('transportation.features.5.title')}</h3>
                  <div className="space-y-4">
                    {(t('transportation.features.5.points', { returnObjects: true }) as string[]).map((point, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                        <p className="text-gray-600">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-blue-100 p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-blue-800">
            {t('transportation.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transportation; 