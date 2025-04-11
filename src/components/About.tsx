import React from 'react';
import { Droplets, Award, Users, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('whoWeAre.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('whoWeAre.description')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Droplets className="h-8 w-8 text-sky-600" />
                <span className="text-gray-700 font-medium">{t('whoWeAre.valuesList.0')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-sky-600" />
                <span className="text-gray-700 font-medium">{t('whoWeAre.valuesList.1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-sky-600" />
                <span className="text-gray-700 font-medium">{t('whoWeAre.valuesList.2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-8 w-8 text-sky-600" />
                <span className="text-gray-700 font-medium">{t('whoWeAre.valuesList.3')}</span>
              </div>
            </div>
            <button className="mt-8 bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition">
              {t('readMore')}
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800"
              alt="Modern laboratory"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;