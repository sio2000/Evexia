import React from 'react';
import { Globe2, Wind, Zap, Flag } from 'lucide-react';

const EUStrategy = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-6">
              EU Hydrogen Strategy
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              The European Union's hydrogen strategy is continuously being strengthened with the goal of transitioning to clean energy sources and achieving energy independence.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm">
                <Wind className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clean Energy</h3>
                <p className="text-blue-100">Transition to sustainable energy sources</p>
              </div>
              <div className="bg-blue-800/50 p-6 rounded-xl backdrop-blur-sm">
                <Flag className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Independence</h3>
                <p className="text-blue-100">Energy autonomy from traditional sources</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-xl mt-8">
              <div className="flex items-center space-x-4">
                <Globe2 className="h-10 w-10 text-blue-300" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Greece's Role</h3>
                  <p className="text-blue-100">
                    Strategic position and development initiatives make Greece a key player in EU's hydrogen future
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80"
              alt="European Energy Infrastructure"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900 to-transparent rounded-b-2xl">
              <div className="flex items-center space-x-4">
                <Zap className="h-8 w-8 text-yellow-400" />
                <p className="text-lg font-semibold">Powering Europe's Future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EUStrategy; 