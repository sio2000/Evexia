import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import image1000bc from '/assets/images/1000bc.png';
import image1000bc2 from '/assets/images/1000bc2.jpeg';

const BC1000Page = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2C3E50] to-[#3498DB] mb-8">
            10000BC - ESHOPU
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] mx-auto rounded-full mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Our Heritage</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover the ancient wisdom and modern innovation behind our products. 
                At 10000BC, we combine traditional knowledge with cutting-edge technology 
                to create products that honor our roots while meeting contemporary needs.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={image1000bc} 
                alt="1000BC Heritage" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src={image1000bc2} 
                alt="1000BC Products" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-semibold text-gray-900">Our Philosophy</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in the power of nature and its ability to provide everything 
                we need for wellness. Our commitment to biological and biodynamic practices 
                ensures that every product we create maintains the highest standards of 
                quality and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BC1000Page; 