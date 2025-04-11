import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import contactImage from '../../assets/images/contactus.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    // Create mailto URL with encoded parameters
    const mailtoUrl = `mailto:info@hydrogenlife.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${contactImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Connect with our team of hydrogen experts and discover how we can help you
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-blue-100">
                We'd love to hear from you. Use the contact information below or fill out the form to reach us.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <p className="text-blue-100">Monday: 8:00 to 16:00</p>
                    <p className="text-blue-100">Tuesday to Friday: 8:00 to 16:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <a 
                      href="tel:+306982590711" 
                      className="text-blue-100 hover:text-white transition-colors underline-offset-4 hover:underline flex items-center"
                    >
                      +30 6982590711
                      <span className="ml-2 text-xs bg-blue-500/30 px-2 py-1 rounded-full">Click to call</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a 
                      href="mailto:info@hydrogenlife.com" 
                      className="text-blue-100 hover:text-white transition-colors underline-offset-4 hover:underline flex items-center"
                    >
                      info@hydrogenlife.com
                      <span className="ml-2 text-xs bg-blue-500/30 px-2 py-1 rounded-full">Click to send</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-blue-100">Ιακώβου Πολυλά 2, Kordelio Evosmos 562 24</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                      <div className="bg-[#1DA1F2] p-2 rounded-full">
                        <Twitter className="h-5 w-5 text-white" />
                      </div>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                      <div className="bg-[#1877F2] p-2 rounded-full">
                        <Facebook className="h-5 w-5 text-white" />
                      </div>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                      <div className="bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] p-2 rounded-full">
                        <Instagram className="h-5 w-5 text-white" />
                      </div>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                      <div className="bg-[#FF0000] p-2 rounded-full">
                        <Youtube className="h-5 w-5 text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h2>
          <p className="text-gray-600 mb-6">Ιακώβου Πολυλά 2, Kordelio Evosmos 562 24</p>
          <div className="bg-white p-4 rounded-lg shadow-lg h-96">
            <iframe 
              title="Our Location"
              className="w-full h-full rounded-lg"
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://www.openstreetmap.org/export/embed.html?bbox=22.90046,40.67046,22.90446,40.67446&amp;layer=mapnik&amp;marker=40.67246,22.90246" 
              style={{ border: 0 }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;