'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Clock, Phone, Star, Menu, X, Calendar, Users, CheckCircle, Award, Sparkles, Camera, ChevronLeft, Image as ImageIcon } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAgeVerification, setShowAgeVerification] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeGallery, setActiveGallery] = useState('featured');

  // Dynamic photo system - Easy to update by just adding image files
  const photoGalleries = {
    // Featured photos for main carousel (mix of best shots)
    featured: [
      { file: 'hero-interior-1.jpg', title: 'Elegant Main Lounge', description: 'Sophisticated atmosphere with premium furnishings' },
      { file: 'event-party-1.jpg', title: 'Premium Events', description: 'Unforgettable celebrations in style' },
      { file: 'menu-signature-1.jpg', title: 'Gourmet Cuisine', description: 'Chef-crafted dishes with premium ingredients' },
      { file: 'interior-vip-1.jpg', title: 'VIP Experience', description: 'Exclusive areas for discerning guests' },
      { file: 'event-celebration-1.jpg', title: 'Live Entertainment', description: 'World-class performances nightly' }
    ],
    
    // Interior photos - just add files to /images/interior/
    interior: [
      { file: 'main-lounge.jpg', title: 'Main Lounge' },
      { file: 'vip-area.jpg', title: 'VIP Area' },
      { file: 'premium-bar.jpg', title: 'Premium Bar' },
      { file: 'private-dining.jpg', title: 'Private Dining' },
      { file: 'entrance-lobby.jpg', title: 'Grand Entrance' },
      { file: 'stage-area.jpg', title: 'Performance Stage' }
    ],
    
    // Event photos - just add files to /images/events/
    events: [
      { file: 'bachelor-party-1.jpg', title: 'Bachelor Parties' },
      { file: 'corporate-event-1.jpg', title: 'Corporate Events' },
      { file: 'birthday-celebration-1.jpg', title: 'Birthday Celebrations' },
      { file: 'private-party-1.jpg', title: 'Private Parties' },
      { file: 'vip-night-1.jpg', title: 'VIP Nights' },
      { file: 'special-event-1.jpg', title: 'Special Events' }
    ],
    
    // Menu photos - just add files to /images/menu/
    menu: [
      { file: 'wacko-classic-burger.jpg', title: 'The Wacko Classic' },
      { file: 'premium-wings.jpg', title: 'Premium Wings' },
      { file: 'truffle-fries.jpg', title: 'Truffle Loaded Fries' },
      { file: 'craft-cocktails.jpg', title: 'Craft Cocktails' },
      { file: 'fine-dining.jpg', title: 'Fine Dining Experience' },
      { file: 'dessert-selection.jpg', title: 'Gourmet Desserts' }
    ]
  };

  // Get current gallery images with proper paths
  const getCurrentGallery = () => {
    return photoGalleries[activeGallery as keyof typeof photoGalleries].map(photo => ({
      ...photo,
      url: `/images/${activeGallery}/${photo.file}`,
      // Fallback to placeholder if image doesn't exist yet
      fallbackUrl: `https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop&auto=format`
    }));
  };

  const currentGallery = getCurrentGallery();

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentGallery.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentGallery.length, activeGallery]);

  // Reset slide when gallery changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeGallery]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentGallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const menuItems = [
    {
      category: 'Signature Burgers',
      items: [
        { name: 'The Wacko Classic', price: '$18.99', description: 'Premium Angus beef, aged cheddar, truffle aioli, brioche bun' },
        { name: 'Spicy Wacko', price: '$19.99', description: 'Jalapeño-infused patty, pepper jack, chipotle mayo, artisan bun' },
        { name: 'BBQ Bourbon Wacko', price: '$21.99', description: 'Bourbon-glazed patty, smoked bacon, aged cheddar, onion strings' }
      ]
    },
    {
      category: 'Premium Wings',
      items: [
        { name: 'Buffalo Royale', price: '$16.99', description: '8 wings in our signature buffalo sauce, blue cheese crumbles' },
        { name: 'Honey Sriracha', price: '$17.99', description: 'Sweet and spicy glaze with sesame seeds, scallions' },
        { name: 'Garlic Parmesan', price: '$17.99', description: 'Crispy wings with roasted garlic butter and aged parmesan' }
      ]
    },
    {
      category: 'Elevated Sides',
      items: [
        { name: 'Truffle Loaded Fries', price: '$12.99', description: 'Hand-cut fries, truffle oil, gruyere, chives, crème fraîche' },
        { name: 'Beer-Battered Onion Rings', price: '$9.99', description: 'Craft beer batter, house-made ranch, fresh herbs' },
        { name: 'Lobster Mac & Cheese', price: '$14.99', description: 'Three-cheese blend, fresh lobster, herb breadcrumbs' }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Michael R.',
      rating: 5,
      text: 'Exceptional atmosphere and service. The premium dining experience exceeded all expectations.'
    },
    {
      name: 'Alexandra S.',
      rating: 5,
      text: 'The club has transformed into something truly special. The attention to detail is remarkable.'
    },
    {
      name: 'David K.',
      rating: 5,
      text: 'Perfect venue for business entertainment. Sophisticated yet welcoming atmosphere.'
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
      <div className="min-h-screen flex items-center justify-center p-4" style={{backgroundColor: 'var(--background)'}}>
        <div className="rounded-lg p-8 max-w-md w-full text-center shadow-2xl glass-effect">
          <div className="mb-6">
            <div className="flex justify-center mb-6">
              <img
                src="/images/Wackos_logo2.png"
                alt="Logo"
                className="h-15 w-auto object-contain"
                style={{height: '60px'}}
              />
            </div>
            <h1 className="text-3xl font-bold mb-2 heading-primary">Welcome</h1>
            <p style={{color: 'var(--text-secondary)'}}>Are you 21 years of age or older?</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => handleAgeVerification(true)}
              className="w-full btn-primary py-3 px-6 transition-all duration-300"
            >
              Yes, I am 21 or older
            </button>
            <button
              onClick={() => handleAgeVerification(false)}
              className="w-full btn-secondary py-3 px-6 transition-all duration-300"
            >
              No, I am under 21
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: 'var(--background)'}}>
      {/* Header */}
      <header className="border-b shadow-lg relative z-50" style={{backgroundColor: 'var(--section-bg)', borderColor: 'rgba(255, 215, 0, 0.2)', color: 'var(--text-primary)'}}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Only */}
          <div className="flex items-center">
            <img
              src="/images/Wackos_logo2.png"
              alt="Logo"
              className="h-24 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'gallery', 'menu', 'about', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 font-medium nav-item ${
                  activeSection === section ? 'border-b-2' : ''
                }`}
                style={{
                  color: activeSection === section ? 'var(--accent-yellow)' : 'var(--text-primary)',
                  borderColor: activeSection === section ? 'var(--accent-yellow)' : 'transparent',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{color: 'var(--accent-yellow)'}}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{backgroundColor: 'var(--card-surface)', borderColor: 'rgba(255, 215, 0, 0.2)'}}>
            {['home', 'gallery', 'menu', 'about', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize transition-colors nav-item"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 relative overflow-hidden" style={{background: `linear-gradient(to right, var(--background), var(--section-bg), var(--card-surface))`, color: 'var(--text-primary)'}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-6 heading-primary fade-in-up">Welcome to Premium Entertainment</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Experience sophisticated dining and entertainment in Jacksonville premier venue. 
            Where elegance meets excitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="btn-primary px-8 py-4 font-semibold inline-flex items-center justify-center text-lg"
            >
              View Gallery <Camera className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-outline px-8 py-4 font-semibold inline-flex items-center justify-center text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" /> Reserve VIP Experience
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Gallery System */}
      <section id="gallery" className="py-20" style={{backgroundColor: 'var(--background)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold heading-primary mb-4" style={{color: 'var(--text-primary)'}}>Experience Excellence</h2>
            <div className="divider-gold w-24 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Discover the sophistication and luxury that defines our venue
            </p>
          </div>

          {/* Gallery Category Selector */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-black/20 p-2 rounded-lg">
              {[
                { key: 'featured', label: 'Featured', icon: Sparkles },
                { key: 'interior', label: 'Interior', icon: Award },
                { key: 'events', label: 'Events', icon: Users },
                { key: 'menu', label: 'Menu', icon: ImageIcon }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveGallery(key)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 ${
                    activeGallery === key 
                      ? 'btn-primary' 
                      : 'bg-transparent border border-yellow-500/30 text-white hover:border-yellow-500'
                  }`}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="premium-carousel" style={{height: '500px'}}>
              <div className="carousel-container">
                {currentGallery.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                  >
                    <div className="carousel-overlay">
                      <div>
                        <h3 className="carousel-title">{image.title}</h3>
                        <p className="carousel-description">{image.description || ''}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Controls */}
                <button
                  onClick={prevSlide}
                  className="carousel-controls carousel-prev"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="carousel-controls carousel-next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Indicators */}
                <div className="carousel-indicators">
                  {currentGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {currentGallery.slice(0, 6).map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => goToSlide(index)}>
                <img src={image.url} alt={image.title} onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  e.currentTarget.src = image.fallbackUrl || 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop';
                }} />
                <div className="gallery-overlay">
                  <div>
                    <h4 className="carousel-title text-lg">{image.title}</h4>
                    <p className="text-sm" style={{color: 'var(--text-secondary)'}}>{image.description || ''}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{backgroundColor: 'var(--section-bg)'}}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center card-premium p-8">
              <Award className="h-16 w-16 mx-auto mb-6" style={{color: 'var(--accent-yellow)'}} />
              <h3 className="text-2xl font-bold mb-4 heading-secondary">Premium Experience</h3>
              <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>Exceptional service and sophisticated atmosphere that sets the standard for excellence.</p>
            </div>
            <div className="text-center card-premium p-8">
              <Users className="h-16 w-16 mx-auto mb-6" style={{color: 'var(--accent-yellow)'}} />
              <h3 className="text-2xl font-bold mb-4 heading-secondary">VIP Entertainment</h3>
              <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>World-class performers and exclusive entertainment in an upscale setting.</p>
            </div>
            <div className="text-center card-premium p-8">
              <Camera className="h-16 w-16 mx-auto mb-6" style={{color: 'var(--accent-yellow)'}} />
              <h3 className="text-2xl font-bold mb-4 heading-secondary">Luxury Amenities</h3>
              <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>Premium dining, craft cocktails, and first-class facilities throughout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20" style={{backgroundColor: 'var(--background)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold heading-primary mb-4" style={{color: 'var(--text-primary)'}}>Culinary Excellence</h2>
            <div className="divider-gold w-24 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Indulge in our chef-crafted menu featuring premium ingredients and sophisticated flavors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((category, idx) => (
              <div key={idx} className="card-premium p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 heading-secondary">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b pb-4 last:border-b-0" style={{borderColor: 'rgba(255, 215, 0, 0.2)'}}>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg" style={{color: 'var(--text-primary)', fontFamily: 'var(--font-heading)'}}>{item.name}</h4>
                        <span className="font-bold text-lg price-highlight">{item.price}</span>
                      </div>
                      <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" style={{backgroundColor: 'var(--section-bg)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold heading-primary mb-4" style={{color: 'var(--text-primary)'}}>About Our Venue</h2>
              <div className="divider-gold w-24 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="mb-8 text-lg leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Since 2010, our venue has redefined the premium experience in Jacksonville. 
                  We have created a sophisticated sanctuary where discerning guests enjoy world-class entertainment, 
                  premium dining, and unparalleled service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" style={{color: 'var(--accent-yellow)'}} />
                    <span style={{color: 'var(--text-primary)'}}>Premium craft cocktails and fine wines</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" style={{color: 'var(--accent-yellow)'}} />
                    <span style={{color: 'var(--text-primary)'}}>Chef-curated menu with locally-sourced ingredients</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" style={{color: 'var(--accent-yellow)'}} />
                    <span style={{color: 'var(--text-primary)'}}>World-class entertainment seven nights a week</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" style={{color: 'var(--accent-yellow)'}} />
                    <span style={{color: 'var(--text-primary)'}}>VIP experiences and private event hosting</span>
                  </div>
                </div>
              </div>
              <div className="card-premium p-10 text-center">
                <Sparkles className="h-20 w-20 mx-auto mb-6" style={{color: 'var(--accent-yellow)'}} />
                <h3 className="text-3xl font-bold heading-secondary mb-6">The Premium Experience</h3>
                <p className="leading-relaxed text-lg" style={{color: 'var(--text-secondary)'}}>
                  We are not just a venue - we are a destination. Every detail has been carefully curated 
                  to provide an unforgettable experience that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20" style={{backgroundColor: 'var(--background)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold heading-primary mb-4" style={{color: 'var(--text-primary)'}}>Guest Testimonials</h2>
            <div className="divider-gold w-24 mx-auto mb-6"></div>
            <p className="text-lg" style={{color: 'var(--text-secondary)'}}>What our distinguished guests are saying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <div key={idx} className="card-premium p-8">
                <div className="flex items-center mb-6">
                  {[...Array(review.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="h-6 w-6 fill-current" style={{color: 'var(--accent-yellow)'}} />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-lg" style={{color: 'var(--text-secondary)'}}>&quot;{review.text}&quot;</p>
                <p className="font-bold text-lg" style={{color: 'var(--accent-yellow)', fontFamily: 'var(--font-heading)'}}>— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{backgroundColor: 'var(--section-bg)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold heading-primary mb-4" style={{color: 'var(--text-primary)'}}>Visit Us Tonight</h2>
            <div className="divider-gold w-24 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="card-premium p-10">
              <h3 className="text-3xl font-bold mb-8 heading-secondary">Location & Hours</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 flex-shrink-0" style={{color: 'var(--accent-yellow)'}} />
                  <span style={{color: 'var(--text-primary)'}}>123 Premium Boulevard, Jacksonville, FL 32202</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 flex-shrink-0" style={{color: 'var(--accent-yellow)'}} />
                  <span style={{color: 'var(--text-primary)'}}>(904) 555-CLUB</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1 flex-shrink-0" style={{color: 'var(--accent-yellow)'}} />
                  <div style={{color: 'var(--text-primary)'}}>
                    <p>Monday - Thursday: 7PM - 2AM</p>
                    <p>Friday - Saturday: 7PM - 3AM</p>
                    <p>Sunday: 8PM - 1AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-premium p-10">
              <h3 className="text-3xl font-bold mb-8 heading-secondary">Reserve Your Experience</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 rounded-lg border transition-colors"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                    color: 'var(--text-primary)'
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 rounded-lg border transition-colors"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                    color: 'var(--text-primary)'
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-4 rounded-lg border transition-colors"
                  style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                    color: 'var(--text-primary)'
                  }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="px-4 py-4 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'rgba(255, 215, 0, 0.3)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <select className="px-4 py-4 rounded-lg border transition-colors" style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                    color: 'var(--text-primary)'
                  }}>
                    <option>Party Size</option>
                    <option>1-2 people</option>
                    <option>3-4 people</option>
                    <option>5-8 people</option>
                    <option>VIP Group (8+)</option>
                  </select>
                </div>
                <button className="w-full btn-primary px-6 py-4 font-bold text-lg">
                  Reserve Your VIP Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 text-center" style={{backgroundColor: 'var(--background)', borderColor: 'rgba(255, 215, 0, 0.2)', color: 'var(--text-primary)'}}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img
              src="/images/Wackos_logo2.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="mb-6 text-lg" style={{color: 'var(--text-secondary)', fontFamily: 'var(--font-body)'}}>
            © 2024 Premium Entertainment Venue. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="transition-colors text-lg hover:opacity-80" style={{color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)'}}>Facebook</a>
            <a href="#" className="transition-colors text-lg hover:opacity-80" style={{color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)'}}>Instagram</a>
            <a href="#" className="transition-colors text-lg hover:opacity-80" style={{color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)'}}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}