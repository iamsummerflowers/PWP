import React from 'react';
import './About.css';


function About() {
  return (
    <div className="min-h-full gradient-elegant">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
                    About Our Mission
                </h1>
                <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
                    We believe that every parent has the potential to raise children who will make a positive impact on the world. Our mission is to provide the support, knowledge, and community needed to make that vision a reality.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                    <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">Our Story</h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                        <p>
                            Parenting with a Purpose was founded by a group of parents, educators, and child development experts who recognized the need for comprehensive support in raising resilient, compassionate children.
                        </p>
                        <p>
                            We understand that parenting is one of life's greatest challenges and most rewarding experiences. That's why we've created a platform that combines research-based strategies with real-world wisdom from experienced parents.
                        </p>
                        <p>
                            Our approach focuses on building strong family foundations that will benefit not just your immediate family, but generations to come.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="glass-effect p-12 rounded-3xl elegant-shadow">
                        <svg width="350" height="250" viewBox="0 0 350 250" className="w-full">
                            {/* Tree trunk */}
                            <rect x="165" y="150" width="20" height="70" rx="10" fill="#6b3a1e" opacity="0.8"/>
                            
                            {/* Tree foliage - elegant layered circles */}
                            <circle cx="175" cy="130" r="50" fill="#d1493f" opacity="0.7"/>
                            <circle cx="150" cy="110" r="40" fill="#f4c071" opacity="0.6"/>
                            <circle cx="200" cy="110" r="40" fill="#8f764e" opacity="0.6"/>
                            <circle cx="175" cy="90" r="30" fill="#6b3a1e" opacity="0.5"/>
                            
                            {/* Root system - elegant curves */}
                            <path d="M165 220 Q140 235 110 230" stroke="#6b3a1e" strokeWidth="5" fill="none" opacity="0.6"/>
                            <path d="M185 220 Q210 235 240 230" stroke="#6b3a1e" strokeWidth="5" fill="none" opacity="0.6"/>
                            <path d="M175 220 Q175 240 175 250" stroke="#6b3a1e" strokeWidth="5" fill="none" opacity="0.6"/>
                            
                            {/* Decorative elements */}
                            <circle cx="120" cy="80" r="3" fill="#f4c071" opacity="0.8"/>
                            <circle cx="230" cy="70" r="3" fill="#d1493f" opacity="0.8"/>
                            <circle cx="260" cy="120" r="3" fill="#8f764e" opacity="0.8"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-red mb-3">10,000+</div>
                    <p className="text-gray-900 font-semibold">Families Supported</p>
                </div>
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-gold mb-3">500+</div>
                    <p className="text-gray-900 font-semibold">Expert Resources</p>
                </div>
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-olive mb-3">50+</div>
                    <p className="text-gray-900 font-semibold">Certified Mentors</p>
                </div>
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-brown mb-3">15</div>
                    <p className="text-gray-900 font-semibold">Years Experience</p>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">Meet Our Founder</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center">
                        <div className="glass-effect p-8 rounded-3xl elegant-shadow">
                            {/* Founder Photo Placeholder */}
                            <div className="w-80 h-80 bg-gradient-to-br from-custom-gold to-custom-red rounded-3xl flex items-center justify-center elegant-shadow">
                                <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
                                    <circle cx="100" cy="75" r="35" fill="currentColor" opacity="0.9"/>
                                    <path d="M100 120 C85 120, 70 130, 70 145 L70 180 L130 180 L130 145 C130 130, 115 120, 100 120 Z" fill="currentColor" opacity="0.9"/>
                                    <circle cx="88" cy="65" r="3" fill="rgba(0,0,0,0.3)"/>
                                    <circle cx="112" cy="65" r="3" fill="rgba(0,0,0,0.3)"/>
                                    <path d="M85 85 Q100 95 115 85" stroke="rgba(0,0,0,0.3)" strokeWidth="2" fill="none"/>
                                    {/* Heart symbol */}
                                    <path d="M85 45 C85 40, 89 36, 93 39 C97 36, 101 40, 101 45 C101 50, 93 58, 93 58 C93 58, 85 50, 85 45 Z" fill="rgba(0,0,0,0.2)"/>
                                </svg>
                            </div>
                            <div className="text-center mt-6">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                                <p className="text-custom-red font-semibold">Founder & Lead Family Coach</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 rounded-md">
                        <h3 className="text-3xl font-serif font-bold mb-8 text-gray-900">My Story & Why I Started This Mission</h3>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                            <p>
                                My journey into family coaching began during my own struggles as a young mother. When my eldest daughter was going through a particularly challenging phase at age 8, I felt overwhelmed and unprepared despite having a background in education.
                            </p>
                            <p>
                                Traditional parenting advice wasn't working for our family's unique dynamics. I found myself searching for evidence-based strategies that honored both my child's individual needs and our family values. This search led me to pursue advanced training in family systems therapy and positive discipline.
                            </p>
                            <p>
                                After transforming my own family relationships and seeing the profound impact on my three children, I knew I had to share these tools with other parents. I founded Parenting with a Purpose because I believe every family deserves access to the support and strategies that can create lasting positive change.
                            </p>
                            <p className="text-custom-red font-medium italic">
                                "My mission is simple: to ensure no parent feels alone in their journey and every child grows up in a home filled with understanding, connection, and purpose."
                            </p>
                        </div>
                        
                        <div className="mt-10 space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-custom-gold rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-center">👨‍👩‍👧‍👦</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Mother of Three</h4>
                                    <p className="text-gray-600 font-light">Ages 12, 15, and 18</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-custom-olive rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-center">🏆</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Award-Winning Coach</h4>
                                    <p className="text-gray-600 font-light">2023 Family Coach of the Year</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-custom-brown rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-center">📖</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Published Author</h4>
                                    <p className="text-gray-600 font-light">"Raising Purpose-Driven Children"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-effect p-12 rounded-3xl text-center elegant-shadow">
                <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">Our Commitment</h2>
                <p className="text-lg max-w-5xl mx-auto text-gray-600 leading-relaxed font-light">
                    We are committed to strengthening families through education, mentorship, and practical tools that foster positive relationships and lasting impact for generations to come. Every resource we provide is carefully curated to ensure it meets our high standards for effectiveness and family-centered values.
                </p>
            </div>
        </div>
    </div>
  );
}

export default About;