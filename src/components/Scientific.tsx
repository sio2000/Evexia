import React from 'react';
import { Microscope, TestTube, Dna, Brain, ChevronRight, Beaker, ScrollText, Atom } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Insight {
  title: string;
  description: string;
  stats: string;
}

interface Publication {
  journal: string;
  title: string;
  year: string;
  impact: string;
}

const Scientific = () => {
  const { t } = useTranslation();
  
  const insights = t('scientific.insights', { returnObjects: true }) as Insight[];
  const publications = t('scientific.publications.items', { returnObjects: true }) as Publication[];

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <TestTube className="h-8 w-8 text-blue-500" />;
      case 1:
        return <Dna className="h-8 w-8 text-purple-500" />;
      case 2:
        return <Brain className="h-8 w-8 text-green-500" />;
      case 3:
        return <Beaker className="h-8 w-8 text-rose-500" />;
      default:
        return <TestTube className="h-8 w-8 text-blue-500" />;
    }
  };

  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return "blue";
      case 1:
        return "purple";
      case 2:
        return "green";
      case 3:
        return "rose";
      default:
        return "blue";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-6">
            <Microscope className="h-8 w-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('scientific.researchBased')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('scientific.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('scientific.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {insights.map((insight: any, index: number) => (
            <div 
              key={index}
              className="relative group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-${getColor(index)}-100 rounded-full opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              <div className="relative z-10">
                <div className={`p-3 bg-${getColor(index)}-100 rounded-xl inline-block mb-6`}>
                  {getIcon(index)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {insight.description}
                </p>
                <div className={`text-${getColor(index)}-600 font-semibold`}>
                  {insight.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <div className="flex items-center space-x-3 mb-6">
                  <ScrollText className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{t('scientific.publications.title')}</h3>
                </div>
                <p className="text-gray-600 mb-8">
                  {t('scientific.publications.subtitle')}
                </p>
                <div className="flex items-center space-x-4">
                  <Atom className="h-12 w-12 text-blue-600 animate-pulse" />
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-gray-600">{t('scientific.publications.researchCount')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                {publications.map((pub: any, index: number) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-blue-600 font-semibold mb-2">
                          {pub.journal} • {pub.year}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {pub.title}
                        </h4>
                        <div className="flex items-center text-gray-600">
                          <ChevronRight className="h-4 w-4 mr-1" />
                          <span className="text-sm">{pub.impact}</span>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-blue-100 rounded-full transition-colors">
                        <ScrollText className="h-5 w-5 text-blue-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scientific;