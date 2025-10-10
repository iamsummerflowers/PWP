import React from 'react';
import './Home.css';

function Home({ id, header, bodyItems }) {
  return (
    <div className="min-h-full">
        {/* Hero Section */}
        <section className="hero-gradient py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/20"></div>
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight text-shadow">
                            Parenting with a Purpose
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-800 mb-12 leading-relaxed font-light">
                            Empowering parents with the knowledge, resources, and community support to raise resilient, compassionate, and purpose-driven children.
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
                        <div className="glass-effect p-12 rounded-3xl elegant-shadow">
                            <svg width="400" height="300" viewBox="0 0 400 300" className="w-full max-w-md">
                                {/* Father */}
                                <circle cx="150" cy="120" r="28" fill="#d1493f" opacity="0.9"/>
                                <rect x="132" y="148" width="36" height="55" rx="18" fill="#8f764e" opacity="0.8"/>
                                <circle cx="142" cy="108" r="2.5" fill="white"/>
                                <circle cx="158" cy="108" r="2.5" fill="white"/>
                                <path d="M138 132 Q150 138 162 132" stroke="white" strokeWidth="2.5" fill="none"/>
                                
                                {/* Mother */}
                                <circle cx="250" cy="120" r="28" fill="#f4c071" opacity="0.9"/>
                                <rect x="232" y="148" width="36" height="55" rx="18" fill="#8f764e" opacity="0.8"/>
                                <circle cx="242" cy="108" r="2.5" fill="white"/>
                                <circle cx="258" cy="108" r="2.5" fill="white"/>
                                <path d="M238 132 Q250 138 262 132" stroke="white" strokeWidth="2.5" fill="none"/>
                                
                                {/* Child 1 */}
                                <circle cx="170" cy="200" r="22" fill="#d1493f" opacity="0.8"/>
                                <rect x="154" y="222" width="32" height="45" rx="16" fill="#6b3a1e" opacity="0.7"/>
                                <circle cx="163" cy="190" r="2" fill="white"/>
                                <circle cx="177" cy="190" r="2" fill="white"/>
                                <path d="M159 212 Q170 216 181 212" stroke="white" strokeWidth="2" fill="none"/>
                                
                                {/* Child 2 */}
                                <circle cx="230" cy="200" r="22" fill="#8f764e" opacity="0.8"/>
                                <rect x="214" y="222" width="32" height="45" rx="16" fill="#6b3a1e" opacity="0.7"/>
                                <circle cx="223" cy="190" r="2" fill="white"/>
                                <circle cx="237" cy="190" r="2" fill="white"/>
                                <path d="M219 212 Q230 216 241 212" stroke="white" strokeWidth="2" fill="none"/>
                                
                                {/* Elegant Hearts */}
                                <g opacity="0.7">
                                    <path d="M115 75 C115 70, 119 66, 123 69 C127 66, 131 70, 131 75 C131 80, 123 88, 123 88 C123 88, 115 80, 115 75 Z" fill="#d1493f"/>
                                    <path d="M285 85 C285 81, 288 78, 291 81 C294 78, 297 81, 297 85 C297 89, 291 95, 291 95 C291 95, 285 89, 285 85 Z" fill="#f4c071"/>
                                </g>
                                
                                {/* Connecting Lines */}
                                <path d="M150 148 Q200 130 250 148" stroke="#6b3a1e" strokeWidth="2" fill="none" opacity="0.4"/>
                                <path d="M170 222 Q200 205 230 222" stroke="#6b3a1e" strokeWidth="2" fill="none" opacity="0.4"/>
                            </svg>
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
                        <div className="w-20 h-20 elegant-button rounded-lg flex items-center justify-center mx-auto mb-6 elegant-shadow">
                            <span className="text-3xl">🌱</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Education</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Access evidence-based parenting strategies and resources that help you understand child development and build stronger family bonds.
                        </p>
                    </div>
                    <div className="text-center p-10 glass-effect rounded-xl elegant-card hover-lift elegant-transition">
                        <div className="w-20 h-20 bg-custom-olive rounded-lg flex items-center justify-center mx-auto mb-6 elegant-shadow">
                            <span className="text-3xl">🤝</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Mentorship</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Connect with experienced parents and certified family coaches who provide guidance and support on your parenting journey.
                        </p>
                    </div>
                    <div className="text-center p-10 glass-effect rounded-xl elegant-card hover-lift elegant-transition">
                        <div className="w-20 h-20 bg-custom-brown rounded-lg flex items-center justify-center mx-auto mb-6 elegant-shadow">
                            <span className="text-3xl">🛠️</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Practical Tools</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Discover actionable techniques and tools that you can implement immediately to create positive change in your family dynamics.
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
                    <button className="bg-custom-gold hover:bg-custom-gold text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold elegant-transition hover-lift elegant-shadow">
                        Get Started Today
                    </button>
                    <button className="glass-effect border-2 border-white/30 text-white hover:bg-white hover:text-red-600 px-10 py-4 rounded-lg text-lg font-semibold elegant-transition hover-lift">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Home;