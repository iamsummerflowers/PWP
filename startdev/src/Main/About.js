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