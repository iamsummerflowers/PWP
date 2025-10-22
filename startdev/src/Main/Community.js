import React, { useState } from 'react';
import './Community.css';
import { galleryImages } from '../Data/gallerydata';
import { serviceData } from '../Data/servicedata';


function Community() {

    const [showDonationForm, setShowDonationForm] = useState(false);
    const [selectedDonationAmount, setSelectedDonationAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');

    const handleDonateClick = () => {
        window.open('https://givebutter.com/parenting-with-a-purpose', '_blank', 'noopener,noreferrer');
    };

    const handleContactFounder = () => {
        // Open Calendly in new tab
        window.open('https://calendly.com/choates-pwp?lid=4d5sslim9f42&utm_medium=email&utm_source=braze&utm_campaign=&utm_content=user_url_text', '_blank', 'noopener,noreferrer');
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        const amount = selectedDonationAmount === 'custom' ? customAmount : selectedDonationAmount;
        alert(`Thank you for your generous donation of $${amount}! You will be redirected to our secure payment processor.`);
        setShowDonationForm(false);
        setSelectedDonationAmount('');
        setCustomAmount('');
    };

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [expandedInitiative, setExpandedInitiative] = useState(null);
    const [expandedService, setExpandedService] = useState(null);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    };

    React.useEffect(() => {
        if (lightboxOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [lightboxOpen]);

  return (
    <div className="min-h-full gradient-elegant">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold custom-brown mb-8">
                    Community Efforts
                </h1>
                <p className="text-xl text-black max-w-5xl mx-auto leading-relaxed font-light">
                    Discover our comprehensive community initiatives designed to strengthen families and support parents at every stage of their journey.
                </p>
            </div>

            {/* Community Efforts Section */}
            <div className="mb-0">
                <h2 className="text-4xl font-serif font-bold text-center mb-16 custom-brown">Our Community Initiatives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
                            {/* <span className="text-2xl text-white text-center">🏠</span> */}
                            <i class="fi fi-br-journey text-center text-2xl custom-gold"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">To & Through</h3>
                        <p className="text-black leading-relaxed font-light text-center mb-6">
                            We believe that small barriers shouldn't stand between you and your goals. Need books for your coursework? Funding to attend a career-conference? Professional attire for that important interview? We're here to help bridge the gap.
                        </p>
                        {/* <div className="text-center">
                            <span className="bg-custom-red/10 text-custom-red px-3 py-1 rounded-full text-sm font-semibold">Active Families: 250+</span>
                        </div> */}
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
                            {/* <span className="text-2xl text-white text-center">📚</span> */}
                            <i class="fi fi-sr-people-roof text-center text-2xl custom-gold"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Village Sundays</h3>
                        <p className="text-black leading-relaxed font-light text-center mb-6">
                            Our purpose is to strengthen the bonds that hold us together as a community. We gather for fellowship, learning, and joyful connection and create spaces where we can celebrate and honor Black history. Through shared experiences and intentional togetherness, we build a village rooted in pride, purpose, and care.
                        </p>
                        {/* <div className="text-center">
                            <span className="bg-custom-gold/10 text-custom-gold px-3 py-1 rounded-full text-sm font-semibold">Monthly Attendees: 150+</span>
                        </div> */}
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
                            {/* <span className="text-2xl text-white text-center">🤝</span> */}
                            <i class="fi fi-sc-hand-holding-heart pt-1 text-center text-2xl custom-gold"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Random Acts of Kindness</h3>
                        <p className="text-black leading-relaxed font-light text-center mb-6">
                            On our Random Acts of Kindness Days, we come together as a community to spread love, generosity, and positivity — one thoughtful act at a time. These days are about giving back, uplifting one another, and reminding our neighbors that kindness still matters.
                        </p>
                        {/* <p className="text-black leading-relaxed font-light text-center mb-6">
                            Each person or family takes part by doing something special for someone else — whether it’s helping a neighbor, supporting a local cause, writing encouraging notes, or surprising another family in our village with a small gift or meal.
                        </p> */}
                        {/* <p className="text-black leading-relaxed font-light text-center mb-6">
                            Our goal is to create a ripple effect of compassion that strengthens our bonds and brightens our community. No act is too small — every gesture adds light to someone’s day and reminds us that it truly takes a village.
                        </p> */}
                        {/* <div className="text-center">
                            <span className="bg-custom-olive/10 text-custom-olive px-3 py-1 rounded-full text-sm font-semibold">Families Helped: 75+</span>
                        </div> */}
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
                            {/* <span className="text-2xl text-white text-center">🎒</span> */}
                            <i class="fi fi-ss-graduation-cap text-center text-2xl custom-gold"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Scholarships</h3>
                        <p className="text-black leading-relaxed font-light text-center mb-6">
                            Through our scholarship programs, we invest in the next generation — supporting students as they pursue education, leadership, and purpose. Each event is a reflection of who we are: a proud, caring community committed to growth, legacy, and love for one another.
                        </p>
                        {/* <div className="text-center">
                            <span className="bg-custom-brown/10 text-custom-brown px-3 py-1 rounded-full text-sm font-semibold">Resources Distributed: 1,200+</span>
                        </div> */}
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
                            {/* <span className="text-2xl text-white text-center">🎒</span> */}
                            <i class="fi fi-sr-party-horn text-center text-2xl custom-gold"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Juneteenth</h3>
                        <p className="text-black leading-relaxed font-light text-center mb-6">
                            During Juneteenth, we come together in celebration and remembrance — honoring freedom, culture, and the ongoing journey toward equality and empowerment.
                        </p>
                        {/* <div className="text-center">
                            <span className="bg-custom-brown/10 text-custom-brown px-3 py-1 rounded-full text-sm font-semibold">Resources Distributed: 1,200+</span>
                        </div> */}
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
                            {/* <span className="text-2xl text-white text-center">🎒</span> */}
                            <i class="fi fi-ss-flag pt-1 text-center text-2xl custom-gold"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Flag Raising</h3>
                        <p className="text-black leading-relaxed font-light text-center mb-6">
                            We host flag-raising ceremonies that symbolize unity, resilience, and the shared values that connect us all.
                        </p>
                        {/* <div className="text-center">
                            <span className="bg-custom-brown/10 text-custom-brown px-3 py-1 rounded-full text-sm font-semibold">Resources Distributed: 1,200+</span>
                        </div> */}
                    </div>
                </div>
            </div>


            {/* Community Gallery Section */}
            <div className="mt-24">
                <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">Our Community in Action</h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                    See the positive impact we're making together through workshops, support groups, and community events that strengthen families.
                </p>
                
                {/* Mosaic Gallery Layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {galleryImages.map((image, index) => {
                        // Define different heights for mosaic effect
                        const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-88', 'h-76', 'h-84'];
                        const randomHeight = heights[index % heights.length];
                        
                        return (
                            <div 
                                key={index} 
                                className="break-inside-avoid mb-6 glass-effect rounded-2xl overflow-hidden elegant-shadow hover-lift elegant-transition cursor-pointer" 
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative group">
                                    <img 
                                        src={image.src}
                                        alt={image.alt}
                                        className={`w-full ${randomHeight} object-cover transition-transform duration-300 group-hover:scale-105`}
                                        onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-16 h-16 mx-auto bg-white/95 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Overlay with title and description */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-lg font-serif font-bold text-white mb-1">{image.title}</h3>
                                        <p className="text-gray-200 font-light text-sm">{image.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Lightbox Modal */}
                {lightboxOpen && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
                        <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white elegant-transition"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Previous Button */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white elegant-transition"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white elegant-transition"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Main Image */}
                            <div className="flex flex-col items-center justify-center max-w-full max-h-full">
                                <img
                                    src={galleryImages[currentImageIndex].src}
                                    alt={galleryImages[currentImageIndex].alt}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg elegant-shadow"
                                    onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';"
                                />
                                
                                {/* Image Info */}
                                <div className="mt-6 text-center max-w-2xl">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                                        {galleryImages[currentImageIndex].title}
                                    </h3>
                                    <p className="text-gray-300 font-light">
                                        {galleryImages[currentImageIndex].description}
                                    </p>
                                    <div className="mt-4 text-gray-400 text-sm">
                                        {currentImageIndex + 1} of {galleryImages.length}
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnail Navigation */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
                                {galleryImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 elegant-transition ${
                                            index === currentImageIndex 
                                                ? 'border-white' 
                                                : 'border-transparent hover:border-white/50'
                                        }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                            onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

                {/* Donation and Contact Founder Section */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 my-20">
                    {/* Support Our Mission */}
                    <div className="glass-effect3 p-12 rounded-3xl elegant-shadow">
                        <h2 className="text-3xl font-serif font-bold text-center mb-6 text-white">Support Our Mission</h2>
                        <p className="text-lg text-white text-center mb-8 leading-relaxed font-light">
                            Your generous donations directly impact families in our community. Every contribution helps us expand our reach and deepen our impact.
                        </p>

                        <div className="text-center">
                            <button 
                                onClick={handleDonateClick}
                                className="w-fit elegant-button text-white px-10 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                            >
                                Make a Donation
                            </button>
                        </div>
                    </div>
                </div>


                {/* Services & Pricing Section */}
                <div className="mb-24">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">Services & Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceData.map((service) => (
                            <div 
                                key={service.id}
                                className={`glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition cursor-pointer ${service.borderColor || ''}`}
                                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            >
                                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <span className="text-2xl text-center pt-1">{service.icon}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">{service.title}</h3>
                                <div className="text-center mb-6">
                                    <div className="text-4xl font-bold custom-red mb-2">{service.price}</div>
                                    <div className="text-gray-600 font-light">{service.period}</div>
                                    {service.badge && (
                                        <div className={`bg-${service.buttonColor} text-white px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block`}>
                                            {service.badge}
                                        </div>
                                    )}
                                </div>
                                {/* <ul className="space-y-3 text-gray-600 font-light mb-8">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <span className="text-custom-gold">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul> */}
                                <div className="text-center">
                                    <div className={`flex items-center justify-center space-x-2 ${service.learnMoreColor}`}>
                                        <span className="font-medium">Learn More</span>
                                        <svg className={`w-5 h-5 transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Expanded Service Details */}
                    {expandedService && (
                        <div className="mt-12 max-w-5xl mx-auto">
                            <div className="glass-effect p-12 rounded-3xl elegant-shadow">
                                {(() => {
                                    const service = serviceData.find(item => item.id === expandedService);
                                    return service ? (
                                        <>
                                            <div className="flex justify-between items-start mb-8">
                                                <h3 className="text-4xl font-serif font-bold text-gray-900">
                                                    {service.title}
                                                </h3>
                                                <button
                                                    onClick={() => setExpandedService(null)}
                                                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center elegant-transition"
                                                >
                                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                            
                                            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                                                {service.fullDescription}
                                            </p>
                                            
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                                <div>
                                                    <h4 className="text-2xl font-serif font-bold text-gray-900 mb-4">What to Expect</h4>
                                                    <ul className="space-y-3">
                                                        {(service.whatToExpect || service.whatToExpected || []).map((item, index) => (
                                                            <li key={index} className="flex items-start space-x-3">
                                                                <span className="w-fit text-custom-gold text-md ">✓</span>
                                                                <span className="text-gray-600 font-light">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="text-2xl font-serif font-bold text-gray-900 mb-4">Ideal For</h4>
                                                    <ul className="space-y-3 mb-6">
                                                        {service.idealFor.map((item, index) => (
                                                            <li key={index} className="flex items-start space-x-3">
                                                                <span className="w-fit text-custom-olive text-md">•</span>
                                                                <span className="text-gray-600 font-light">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    
                                                    <div className="bg-gradient-to-br from-custom-gold/10 to-custom-red/10 p-6 rounded-2xl">
                                                        <h5 className="font-semibold text-gray-900 mb-3">
                                                            {service.id === 'consulting' ? 'Session Structure' : 
                                                                service.id === 'mentorship' ? 'Program Benefits' : 
                                                                'Our Approach'}
                                                        </h5>
                                                        <p className="text-gray-700 font-light">
                                                            {service.sessionStructure || 
                                                                service.programBenefits || 
                                                                service.advocateApproach}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="text-center">
                                                <button 
                                                    onClick={handleContactFounder}
                                                    className="elegant-button text-white px-8 py-3 rounded-xl font-semibold elegant-transition hover-lift"
                                                >
                                                    Book This Service
                                                </button>
                                            </div>
                                        </>
                                    ) : null;
                                })()}
                            </div>
                        </div>
                    )}

                    {/* <div className="text-center mt-8">
                        <button 
                            onClick={handleContactFounder}
                            className="elegant-button text-white px-12 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                        >
                            Book Consultation
                        </button>
                        <p className="text-gray-500 font-light mt-3 text-sm">
                            Schedule your personalized consultation with Colette Choates
                        </p>
                    </div> */}
                </div>


                {/* Donation and Contact Founder Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Support Our Mission */}
                    <div className="glass-effect p-12 rounded-3xl elegant-shadow">
                        <h2 className="text-3xl font-serif font-bold text-center mb-6 text-gray-900">Support Our Mission</h2>
                        <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed font-light">
                            Your generous donations directly impact families in our community. Every contribution helps us expand our reach and deepen our impact.
                        </p>

                        <div className="text-center">
                            <button 
                                onClick={handleDonateClick}
                                className="w-fit elegant-button text-white px-10 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                            >
                                Make a Donation
                            </button>
                        </div>

                        {/* Donation Form Modal */}
                    </div>

                    {/* Connect with Our Founder */}
                    <div className="glass-effect2 p-12 rounded-3xl elegant-shadow">
                        <h2 className="text-3xl font-serif font-bold text-center mb-6 custom-brown">Connect with Our Founder</h2>
                        <p className="text-lg text-white text-center mb-8 leading-relaxed font-light">
                            Have questions about our programs or want to discuss how we can support your family? Schedule a personal conversation with Colette Choates.
                        </p>
                        <div className="text-center">
                            <button 
                                onClick={handleContactFounder}
                                className="w-fit glass-effect3 text-white px-10 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                            >
                                Schedule a Call Now
                            </button>
                            <p className="custom-olive font-light mt-4 text-sm">
                                Schedule your personalized consultation with Colette Choates
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
}

export default Community;