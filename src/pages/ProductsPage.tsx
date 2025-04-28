import React, { useEffect, useState } from 'react';
import { ArrowRight, Heart, ShoppingCart, Droplets } from 'lucide-react';
import backgroundHeroHalf from '../../assets/images/backgroundherohalf.png';
import freepikImage from '../../assets/images/freepik.jpeg';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'hydrogen' | 'organic' | 'wine'>('all');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: t('productsPage.products.0.name'),
      description: t('productsPage.products.0.description'),
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: Array.isArray(t('productsPage.products.0.features', { returnObjects: true })) ? t('productsPage.products.0.features', { returnObjects: true }) as string[] : [],
      tag: t('productsPage.filterHydrogen'),
      category: 'hydrogen'
    },
    {
      id: 2,
      name: t('productsPage.products.1.name'),
      description: t('productsPage.products.1.description'),
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: Array.isArray(t('productsPage.products.1.features', { returnObjects: true })) ? t('productsPage.products.1.features', { returnObjects: true }) as string[] : [],
      tag: t('productsPage.filterHydrogen'),
      category: 'hydrogen'
    },
    {
      id: 3,
      name: t('productsPage.products.2.name'),
      description: t('productsPage.products.2.description'),
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: Array.isArray(t('productsPage.products.2.features', { returnObjects: true })) ? t('productsPage.products.2.features', { returnObjects: true }) as string[] : [],
      tag: t('productsPage.filterHydrogen'),
      category: 'hydrogen'
    },
    {
      id: 4,
      name: t('productsPage.products.3.name'),
      description: t('productsPage.products.3.description'),
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: Array.isArray(t('productsPage.products.3.features', { returnObjects: true })) ? t('productsPage.products.3.features', { returnObjects: true }) as string[] : [],
      tag: t('productsPage.filterOrganic'),
      category: 'organic'
    },
    {
      id: 5,
      name: t('productsPage.products.4.name'),
      description: t('productsPage.products.4.description'),
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: Array.isArray(t('productsPage.products.4.features', { returnObjects: true })) ? t('productsPage.products.4.features', { returnObjects: true }) as string[] : [],
      tag: t('productsPage.filterOrganic'),
      category: 'organic'
    },
    {
      id: 6,
      name: t('productsPage.products.5.name'),
      description: t('productsPage.products.5.description'),
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: Array.isArray(t('productsPage.products.5.features', { returnObjects: true })) ? t('productsPage.products.5.features', { returnObjects: true }) as string[] : [],
      tag: t('productsPage.filterWine'),
      category: 'wine'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = filter === 'all' ? true : product.category === filter;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${freepikImage})`,
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
              <span className="text-sky-400 font-semibold tracking-wider uppercase">{t('productsPage.heroTag')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('productsPage.heroTitle')}
            </h1>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl">
              {t('productsPage.heroSubtitle')}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t('productsPage.searchPlaceholder') || 'Αναζήτηση προϊόντων...'}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EAB8B1] focus:border-transparent"
          />
          <div className="flex gap-2 mt-2 md:mt-0">
            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full border ${filter==='all' ? 'bg-[#EAB8B1] text-white' : 'bg-white text-[#EAB8B1] border-[#EAB8B1]'}`}>{t('productsPage.filterAll') || 'Όλα'}</button>
            <button onClick={() => setFilter('hydrogen')} className={`px-4 py-2 rounded-full border ${filter==='hydrogen' ? 'bg-[#EAB8B1] text-white' : 'bg-white text-[#EAB8B1] border-[#EAB8B1]'}`}>{t('productsPage.filterHydrogen') || 'Υδρογόνο'}</button>
            <button onClick={() => setFilter('organic')} className={`px-4 py-2 rounded-full border ${filter==='organic' ? 'bg-[#EAB8B1] text-white' : 'bg-white text-[#EAB8B1] border-[#EAB8B1]'}`}>{t('productsPage.filterOrganic') || 'Βιολογικά'}</button>
            <button onClick={() => setFilter('wine')} className={`px-4 py-2 rounded-full border ${filter==='wine' ? 'bg-[#EAB8B1] text-white' : 'bg-white text-[#EAB8B1] border-[#EAB8B1]'}`}>{t('productsPage.filterWine') || 'Κρασί'}</button>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('productsPage.productsTitle')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('productsPage.productsSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-white" style={{backgroundColor: '#EAB8B1', borderRadius: '9999px'}}>
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
                  <span className="text-2xl font-bold" style={{color: '#EAB8B1'}}>
                    €{product.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {Array.isArray(product.features) && product.features.map((feature: any, index: any) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 mr-2" style={{color: '#EAB8B1'}} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full flex items-center justify-center text-white px-6 py-3 rounded-full transition-colors" style={{backgroundColor: '#EAB8B1', color: 'white'}}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t('productsPage.addToCart')}
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