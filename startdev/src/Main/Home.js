import React from 'react';
import './Home.css';
import family from '../assets/family.jpg';

function Home({ id, header, bodyItems }) {
  return (
    <div className="min-h-full">
        {/* Hero Section */}
        <section className="hero-gradient py-32 relative overflow-hidden">
            <div className="absolute inset-0  from-transparent via-white/10 to-white/20"></div>
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold custom-gold mb-8 leading-tight text-shadow">
                            Parenting with a Purpose
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed font-light">
                            Parenting with a Purpose equips and empowers parents with the knowledge,resources, and community support they need to raise resilient, compassionate, and purpose-driven children. We are committed to strengthening families through education, mentorship, and practical tools that foster positive relationships and lasting impact for generations to come.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="elegant-button text-white px-10 py-4 rounded-lg text-lg font-semibold elegant-transition hover-lift">
                                Join Our Community
                            </button>
                            <button className="glass-effect border-2 border-white/30 text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold elegant-transition hover-lift">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* Elegant Family SVG Illustration */}
                        <div className="glass-effect p-1 rounded-3xl elegant-shadow">
                          <img src={family} alt="Family" className="rounded-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-24 gradient-elegant">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        Empowering Families Through
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Three core pillars that make our approach to parenting truly transformative
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center p-10 glass-effect rounded-xl elegant-card hover-lift elegant-transition">
                        <div className="w-20 h-20 bg-custom-brown rounded-lg flex items-center justify-center mx-auto mb-6 elegant-shadow">
                            {/* <span className="text-3xl">🌱</span> */}
                            <i class="fi fi-sr-books text-4xl text-white"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Knowledge</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Access evidence-based parenting strategies that help you understand and build stronger family bonds.
                        </p>
                    </div>
                    <div className="text-center p-10 glass-effect rounded-xl elegant-card hover-lift elegant-transition">
                        <div className="w-20 h-20 bg-custom-olive rounded-lg flex items-center justify-center mx-auto mb-6 elegant-shadow">
                            {/* <span className="text-3xl">🤝</span> */}
                            <i class="fi fi-sr-hand-holding-heart text-4xl text-white"></i>
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Resources</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Find practical tools designed to support your parenting goals and make everyday challenges more manageable.
                        </p>
                    </div>
                    <div className="text-center p-10 glass-effect rounded-xl elegant-card hover-lift elegant-transition">
                        <div className="w-20 h-20 bg-custom-gold rounded-lg flex items-center justify-center mx-auto mb-6 elegant-shadow">
                            {/* <span className="text-3xl">🛠️</span> */}
                            <i class="fi fi-bs-people-roof text-4xl custom-brown"></i>

                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Community</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Connect with experienced parents and family coaches who provide guidance and support on your parenting journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-custom-red text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-custom-red via-custom-red to-red-800 opacity-95"></div>
            <div className="relative max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-shadow">
                    Ready to Transform Your Family's Future?
                </h2>
                <p className="text-xl mb-12 leading-relaxed font-light max-w-3xl mx-auto">
                    Join thousands of parents who are already building stronger, more purposeful families. Start your journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="bg-custom-gold hover:bg-custom-gold custom-brown px-10 py-4 rounded-lg text-lg font-semibold elegant-transition hover-lift elegant-shadow">
                        Get Started Today
                    </button>
                    <button className="glass-effect border-2 border-white/30 custom-brown hover:bg-white px-10 py-4 rounded-lg text-lg font-semibold elegant-transition hover-lift">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Home;