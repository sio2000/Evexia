import React, { useEffect } from 'react';
import { ArrowRight, Heart, ShoppingCart, Droplets } from 'lucide-react';

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: 'HydroPure Elite Bottle',
      description: 'Premium hydrogen-rich water bottle with titanium plates',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['2.0 ppm H2', 'Titanium plates', 'USB-C charging', '500ml capacity'],
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'HydroMax Pro Generator',
      description: 'Professional hydrogen water generator for home use',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['3.0 ppm H2', 'Touch display', 'Large capacity', 'Filter included'],
      tag: 'New'
    },
    {
      id: 3,
      name: 'HydroFit Sports Bottle',
      description: 'Portable hydrogen water bottle for athletes',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['1.8 ppm H2', 'Sports design', 'Quick charge', 'Durable build'],
      tag: 'Popular'
    },
    {
      id: 4,
      name: 'HydroLife Premium System',
      description: 'Complete hydrogen water system for your home',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['4.0 ppm H2', 'Whole house system', 'Smart controls', 'Professional installation'],
      tag: 'Premium'
    },
    {
      id: 5,
      name: 'HydroMini Travel Kit',
      description: 'Compact hydrogen generator for travel',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['1.5 ppm H2', 'Ultra portable', 'Travel case', '300ml capacity'],
      tag: 'Travel Essential'
    },
    {
      id: 6,
      name: 'HydroWell Dispenser',
      description: 'Desktop hydrogen water dispenser for office use',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['2.5 ppm H2', 'Office design', 'Large tank', 'Quick dispense'],
      tag: 'Office Choice'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-sky-800/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Droplets className="h-8 w-8 text-sky-400" />
              <span className="text-sky-400 font-semibold tracking-wider uppercase">Innovative Technology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Health with Hydrogen
            </h1>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl">
              Discover our cutting-edge range of hydrogen water devices, designed to bring the power of molecular hydrogen into your daily wellness routine.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each product is designed with precision and care, offering you the best in hydrogen water technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">€{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;