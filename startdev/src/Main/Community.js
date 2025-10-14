import React, { useState } from 'react';
import './Community.css';

function Community() {

    const [showDonationForm, setShowDonationForm] = useState(false);
    const [selectedDonationAmount, setSelectedDonationAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');

    const handleDonateClick = () => {
        window.open('https://www.gofundme.com/f/parenting-with-purpose-community-support', '_blank', 'noopener,noreferrer');
    };

    const handleContactFounder = () => {
        // Open Calendly in new tab
        window.open('https://calendly.com/sarahjohnson-parentingwithpurpose', '_blank', 'noopener,noreferrer');
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        const amount = selectedDonationAmount === 'custom' ? customAmount : selectedDonationAmount;
        alert(`Thank you for your generous donation of $${amount}! You will be redirected to our secure payment processor.`);
        setShowDonationForm(false);
        setSelectedDonationAmount('');
        setCustomAmount('');
    };


  return (
    <div className="min-h-full gradient-elegant">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
                    Community Efforts
                </h1>
                <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
                    Discover our comprehensive community initiatives designed to strengthen families and support parents at every stage of their journey.
                </p>
            </div>

            {/* Community Efforts Section */}
            <div className="mb-0">
                <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">Our Community Initiatives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 elegant-button rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">🏠</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">To & Through</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-center mb-6">
                            Weekly support groups and mentorship programs connecting experienced parents with those seeking guidance and community.
                        </p>
                        <div className="text-center">
                            <span className="bg-custom-red/10 text-custom-red px-3 py-1 rounded-full text-sm font-semibold">Active Families: 250+</span>
                        </div>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">📚</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Village Sundays</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-center mb-6">
                            Monthly workshops covering child development, positive discipline, communication skills, and family wellness strategies.
                        </p>
                        <div className="text-center">
                            <span className="bg-custom-gold/10 text-custom-gold px-3 py-1 rounded-full text-sm font-semibold">Monthly Attendees: 150+</span>
                        </div>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-olive rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">🤝</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Workshops</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-center mb-6">
                            24/7 support hotline and emergency assistance for families facing immediate challenges or crisis situations.
                        </p>
                        <div className="text-center">
                            <span className="bg-custom-olive/10 text-custom-olive px-3 py-1 rounded-full text-sm font-semibold">Families Helped: 75+</span>
                        </div>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-brown rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">🎒</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Resource Distribution</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-center mb-6">
                            Free distribution of parenting books, educational materials, and essential family resources to underserved communities.
                        </p>
                        <div className="text-center">
                            <span className="bg-custom-brown/10 text-custom-brown px-3 py-1 rounded-full text-sm font-semibold">Resources Distributed: 1,200+</span>
                        </div>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition md:col-span-2 lg:col-span-1">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">🌟</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Youth Leadership Program</h3>
                        <p className="text-gray-600 leading-relaxed font-light text-center mb-6">
                            Empowering teenagers to become peer mentors and community leaders through structured leadership development and service opportunities.
                        </p>
                        <div className="text-center">
                            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Youth Leaders: 45+</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Donation and Contact Founder Section */}
            <div className="my-10 grid grid-cols-1 lg:grid-cols-1 gap-8">
                {/* Support Our Mission */}
                <div className="p-12">
                    <h2 className="text-3xl font-serif font-bold text-center mb-6 text-gray-900">Support Our Mission</h2>
                    <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed font-light">
                        Your generous donations directly impact families in our community. Every contribution helps us expand our reach and deepen our impact.
                        {/* To send your donation through Zelle, please use the following information: */}
                        {/* Email donations@organization.com OR Phone Number 555-555-5555 */}
                    </p>


                    <div className="text-center">
                        <button 
                            onClick={handleDonateClick}
                            className="mb-10 w-fit elegant-button text-white px-10 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                        >
                            Make a Donation
                        </button>
                    </div>

                    <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed font-light">
                        To send your donation through Zelle, please use the following information:
                        {/* Email donations@organization.com OR Phone Number 555-555-5555 */}
                    <ul>
                        <li><strong>Email</strong> <a href="mailto:donations@organization.com">donations@organization.com</a></li>
                        <li><strong>Phone Number:</strong> <a href="mailto:donations@organization.com">555-555-5555</a></li>
                        <li><strong>Recipient Name:</strong> [Organization Name]</li>
                    </ul>
                    </p>

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

            {/* Services & Pricing Section */}
            <div className="my-10">
                <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">Services & Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 elegant-button rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">💬</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Personal Consulting</h3>
                        <div className="text-center mb-6">
                            <div className="text-4xl font-bold custom-red mb-2">$150</div>
                            <div className="text-gray-600 font-light">per 60-minute session</div>
                        </div>
                        <ul className="space-y-3 text-gray-600 font-light mb-8">
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>One-on-one guidance</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Customized action plans</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Follow-up resources</span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition border-2 border-custom-gold">
                        <div className="w-16 h-16 bg-custom-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">👥</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">PWP Membership</h3>
                        <div className="text-center mb-6">
                            <div className="text-4xl font-bold custom-red mb-2">$49</div>
                            <div className="text-gray-600 font-light">per month</div>
                            {/* <div className="bg-custom-gold text-white px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block">Most Popular</div> */}
                        </div>
                        <ul className="space-y-3 text-gray-600 font-light mb-8">
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>All workshops included</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Support group access</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Resource library</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Monthly group calls</span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl elegant-card hover-lift elegant-transition">
                        <div className="w-16 h-16 bg-custom-olive rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl text-white text-center">🗣️</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-center mb-4 text-gray-900">Community Advocacy</h3>
                        <div className="text-center mb-6">
                            <div className="text-4xl font-bold custom-red mb-2">$200</div>
                            <div className="text-gray-600 font-light">per case/month</div>
                        </div>
                        <ul className="space-y-3 text-gray-600 font-light mb-8">
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>School system advocacy</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Legal support coordination</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Resource navigation</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-custom-gold w-fit">✓</span>
                                <span>Crisis intervention</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button 
                        onClick={handleContactFounder}
                        className="w-fit elegant-button text-white px-12 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift elegant-shadow"
                    >
                        Book Consultation
                    </button>
                    {/* <p className="text-gray-500 font-light mt-3 text-sm">
                        Schedule your personalized consultation with Colette Choates
                    </p> */}
                </div>
            </div>



                {/* Connect with Our Founder */}
                <div className="glass-effect p-12 rounded-3xl elegant-shadow">
                    <h2 className="text-3xl font-serif font-bold text-center mb-6 text-gray-900">Reach Out to Learn More</h2>
                    <p className="text-lg text-gray-600 text-center mb-8 leading-relaxed font-light">
                        Have questions about our programs or want to discuss how we can support your family? Schedule a personal conversation with Colette Choates.
                    </p>
                    <div className="text-center">
                        <button 
                            onClick={handleContactFounder}
                            className="w-fit elegant-button text-white px-10 py-4 rounded-xl text-lg font-semibold elegant-transition hover-lift hover:bg-custom-gold elegant-shadow"
                        >
                            Schedule a Call!
                        </button>
                        <p className="text-gray-500 font-light mt-4 text-sm">
                            Free 15-minute consultation • Available weekdays 9 AM - 5 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Community;