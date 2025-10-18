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
                                            <span className="text-2xl text-white">{service.icon}</span>
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
                                        <ul className="space-y-3 text-gray-600 font-light mb-8">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="flex items-center space-x-3">
                                                    <span className="text-custom-gold">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
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
                                                                        <span className="text-custom-gold text-lg mt-1">✓</span>
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
                                                                        <span className="text-custom-olive text-lg mt-1">•</span>
                                                                        <span className="text-gray-600 font-light">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            
                                                            <div className="bg-gradient-to-br from-custom-gold/10 to-custom-red/10 p-6 rounded-2xl">
                                                                <h5 className="font-semibold text-gray-900 mb-3">
                                                                    {service.id === 'consulting' ? 'Session Structure' : 
                                                                     service.id === 'membership' ? 'Member Benefits' : 
                                                                     'Our Approach'}
                                                                </h5>
                                                                <p className="text-gray-700 font-light">
                                                                    {service.sessionStructure || 
                                                                     service.memberBenefits || 
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

                            <div className="text-center mt-8">
                                <button 
                                    onClick={handleContactFounder}
                                    className="elegant-button text-white px-12 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                                >
                                    Book Consultation
                                </button>
                                <p className="text-gray-500 font-light mt-3 text-sm">
                                    Schedule your personalized consultation with Sarah Johnson
                                </p>
                            </div>
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
                                        className="elegant-button text-white px-10 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                                    >
                                        Make a Donation
                                    </button>
                                </div>

                                {/* Donation Form Modal */}
                                {showDonationForm && (
                                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                                        <div className="bg-white rounded-3xl p-8 max-w-md w-full elegant-shadow">
                                            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900 text-center">Choose Your Donation</h3>
                                            <form onSubmit={handleDonationSubmit}>
                                                <div className="space-y-4 mb-6">
                                                    {['25', '50', '100', '250'].map((amount) => (
                                                        <label key={amount} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer elegant-transition">
                                                            <input
                                                                type="radio"
                                                                name="donation"
                                                                value={amount}
                                                                checked={selectedDonationAmount === amount}
                                                                onChange={(e) => setSelectedDonationAmount(e.target.value)}
                                                                className="text-custom-red focus:ring-custom-red"
                                                            />
                                                            <span className="font-semibold text-gray-900">${amount}</span>
                                                        </label>
                                                    ))}
                                                    <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer elegant-transition">
                                                        <input
                                                            type="radio"
                                                            name="donation"
                                                            value="custom"
                                                            checked={selectedDonationAmount === 'custom'}
                                                            onChange={(e) => setSelectedDonationAmount(e.target.value)}
                                                            className="text-custom-red focus:ring-custom-red"
                                                        />
                                                        <span className="font-semibold text-gray-900">Custom Amount</span>
                                                    </label>
                                                    {selectedDonationAmount === 'custom' && (
                                                        <input
                                                            type="number"
                                                            placeholder="Enter amount"
                                                            value={customAmount}
                                                            onChange={(e) => setCustomAmount(e.target.value)}
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
                                                            min="1"
                                                            required
                                                        />
                                                    )}
                                                </div>
                                                <div className="flex space-x-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowDonationForm(false)}
                                                        className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 elegant-transition"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        disabled={!selectedDonationAmount || (selectedDonationAmount === 'custom' && !customAmount)}
                                                        className="flex-1 elegant-button text-white px-6 py-3 rounded-xl font-semibold elegant-transition disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        Donate Now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Connect with Our Founder */}
                            <div className="glass-effect p-12 rounded-3xl elegant-shadow">
                                <h2 className="text-3xl font-serif font-bold text-center mb-6 text-gray-900">Connect with Our Founder</h2>
                                <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed font-light">
                                    Have questions about our programs or want to discuss how we can support your family? Schedule a personal conversation with Sarah Johnson.
                                </p>
                                <div className="text-center">
                                    <button 
                                        onClick={handleContactFounder}
                                        className="elegant-button text-white px-10 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                                    >
                                        Schedule a Call with Sarah
                                    </button>
                                    <p className="text-gray-500 font-light mt-4 text-sm">
                                        Free 15-minute consultation • Available weekdays 9 AM - 5 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    // </div>
                // </div>