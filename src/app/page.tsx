'use client';
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { ChevronRight, MapPin, Clock, Phone, Star, Menu, X, Calendar, Users, Utensils, CheckCircle, Award, Sparkles, Camera } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAgeVerification, setShowAgeVerification] = useState(true);

  const menuItems = [
    {
      category: 'Wacko Burgers',
      items: [
        { name: 'The Wacko Classic', price: '$12.99', description: 'Double beef patty, cheese, lettuce, tomato, pickles, special sauce' },
        { name: 'Spicy Wacko', price: '$13.99', description: 'Jalapeño-infused patty, pepper jack, spicy mayo, onion rings' },
        { name: 'BBQ Bacon Wacko', price: '$14.99', description: 'Smoky BBQ sauce, crispy bacon, cheddar, onion rings' }
      ]
    },
    {
      category: 'Crazy Wings',
      items: [
        { name: 'Buffalo Madness', price: '$9.99', description: '8 wings tossed in our signature buffalo sauce' },
        { name: 'Honey Sriracha', price: '$10.99', description: 'Sweet and spicy glaze with sesame seeds' },
        { name: 'Garlic Parmesan', price: '$10.99', description: 'Crispy wings with garlic butter and parmesan' }
      ]
    },
    {
      category: 'Wacky Sides',
      items: [
        { name: 'Loaded Wacko Fries', price: '$7.99', description: 'Cheese, bacon bits, green onions, sour cream' },
        { name: 'Onion Ring Tower', price: '$6.99', description: 'Crispy beer-battered onion rings' },
        { name: 'Mac & Cheese Bites', price: '$5.99', description: 'Fried mac and cheese balls with ranch' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Best burgers in town! The atmosphere is so fun and the staff is amazing.'
    },
    {
      name: 'Mike R.',
      rating: 5,
      text: "Wacko's never disappoints. Great food, great vibes, and reasonable prices."
    },
    {
      name: 'Lisa K.',
      rating: 5,
      text: 'Perfect spot for family dinner or hanging out with friends. Love this place!'
    }
  ];

  const handleAgeVerification = (isOver21: boolean) => {
    if (isOver21) {
      setShowAgeVerification(false);
    } else {
      alert('You must be 21 or older to view this content.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (showAgeVerification) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl">
          <div className="mb-6">
            <Sparkles className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Wacko's</h1>
            <p className="text-gray-600">Are you 21 years of age or older?</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => handleAgeVerification(true)}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Yes, I&apos;m 21 or older
            </button>
            <button
              onClick={() => handleAgeVerification(false)}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              No, I&apos;m under 21
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg relative z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Utensils className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Wacko&apos;s Grill &amp; Bar</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['home', 'menu', 'about', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-red-200 transition-colors ${
                  activeSection === section ? 'text-red-200 border-b-2 border-red-200' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-red-700 py-4">
            {['home', 'menu', 'about', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 capitalize hover:bg-red-800 transition-colors"
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Welcome to Wacko&apos;s!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Where crazy good food meets an unforgettable atmosphere. Join us for the best burgers, 
            wings, and craft drinks in town!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              View Menu <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" /> Make Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Award-Winning Food</h3>
              <p className="text-gray-600">Recognized as the best burger joint in the city three years running.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Family Friendly</h3>
              <p className="text-gray-600">Perfect atmosphere for families, friends, and special celebrations.</p>
            </div>
            <div className="text-center">
              <Camera className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instagram Ready</h3>
              <p className="text-gray-600">Every dish is crafted to be as photogenic as it is delicious.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Wacky Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((category, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-800">{item.name}</h4>
                        <span className="text-red-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Wacko's</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-gray-600 mb-6">
                  Since 2010, Wacko's has been serving up the most delicious, over-the-top burgers and wings 
                  in the city. Our passion for great food and fun atmosphere has made us a local favorite.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Fresh, locally-sourced ingredients</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Hand-cut fries and homemade sauces</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Craft beer and signature cocktails</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Live music every weekend</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-100 rounded-lg p-8">
                <Sparkles className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-600 mb-4">Why Choose Wacko's?</h3>
                <p className="text-gray-700">
                  We're not just another restaurant - we're an experience! From our crazy-good food to our 
                  vibrant atmosphere, every visit to Wacko's is guaranteed to be memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-red-600">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Visit Us Today!</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <span>123 Main Street, Downtown City, ST 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <span>(555) 123-WACKO</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p>Monday - Thursday: 11AM - 10PM</p>
                    <p>Friday - Saturday: 11AM - 12AM</p>
                    <p>Sunday: 12PM - 9PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Make a Reservation</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg text-gray-800"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg text-gray-800"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="px-4 py-3 rounded-lg text-gray-800"
                  />
                  <select className="px-4 py-3 rounded-lg text-gray-800">
                    <option>Party Size</option>
                    <option>1-2 people</option>
                    <option>3-4 people</option>
                    <option>5-6 people</option>
                    <option>7+ people</option>
                  </select>
                </div>
                <button className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Reserve Your Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Utensils className="h-6 w-6" />
            <span className="text-xl font-bold">Wacko's Grill & Bar</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 Wacko's Grill & Bar. All rights reserved. | Follow us on social media for daily specials!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

