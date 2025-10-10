import React from 'react';
import './Village.css';

function Village() {
  return (
    <div className="min-h-full gradient-elegant">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
                    Village Sunday
                </h1>
                <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
                    Join our weekly community gathering where families come together to learn, share, and grow. Because it takes a village to raise a child, and every Sunday, we celebrate that village.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                    <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">What is Village Sunday?</h2>
                    <div className="space-y-6 text-lg text-gray-600 mb-10 leading-relaxed font-light">
                        <p>
                            Village Sunday is our signature weekly event that brings together parents, children, and families from our community for meaningful connection, learning, and fun.
                        </p>
                        <p>
                            Every Sunday, we host activities designed to strengthen family bonds, share parenting wisdom, and create lasting friendships within our supportive community.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4 p-6 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                            <div className="w-12 h-12 elegant-button rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">🕐</div>
                            <div>
                                <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">When</h4>
                                <p className="text-gray-600 font-light">Every Sunday, 2:00 PM - 5:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                            <div className="w-12 h-12 bg-custom-gold rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">📍</div>
                            <div>
                                <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">Where</h4>
                                <p className="text-gray-600 font-light">Community Center & Online</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                            <div className="w-12 h-12 bg-custom-olive rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">👨‍👩‍👧‍👦</div>
                            <div>
                                <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">Who</h4>
                                <p className="text-gray-600 font-light">All families welcome - all ages</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="glass-effect p-12 rounded-3xl elegant-shadow">
                        <svg width="400" height="320" viewBox="0 0 400 320" className="w-full">
                            {/* Elegant Sun */}
                            <circle cx="320" cy="70" r="35" fill="#f4c071" opacity="0.9"/>
                            
                            {/* Sun rays - more elegant */}
                            <g stroke="#f4c071" strokeWidth="3" opacity="0.6">
                                <path d="M320 25 L320 35 M365 70 L355 70 M355 35 L349 41 M349 105 L355 99 M285 35 L291 41 M285 105 L291 99 M275 70 L285 70 M320 115 L320 105"/>
                            </g>
                            
                            {/* Ground - elegant curve */}
                            <ellipse cx="200" cy="280" rx="180" ry="30" fill="#6b3a1e" opacity="0.15"/>
                            
                            {/* Family Groups - more refined */}
                            {/* Family 1 */}
                            <g transform="translate(130,200)" opacity="0.9">
                                <circle cx="0" cy="0" r="22" fill="#d1493f"/>
                                <rect x="-15" y="22" width="30" height="40" rx="15" fill="#8f764e"/>
                                <circle cx="-7" cy="-10" r="2.5" fill="white"/>
                                <circle cx="7" cy="-10" r="2.5" fill="white"/>
                                <path d="M-10 10 Q0 15 10 10" stroke="white" strokeWidth="2.5" fill="none"/>
                            </g>
                            
                            {/* Family 2 */}
                            <g transform="translate(200,180)" opacity="0.9">
                                <circle cx="0" cy="0" r="22" fill="#f4c071"/>
                                <rect x="-15" y="22" width="30" height="40" rx="15" fill="#6b3a1e"/>
                                <circle cx="-7" cy="-10" r="2.5" fill="white"/>
                                <circle cx="7" cy="-10" r="2.5" fill="white"/>
                                <path d="M-10 10 Q0 15 10 10" stroke="white" strokeWidth="2.5" fill="none"/>
                            </g>
                            
                            {/* Family 3 */}
                            <g transform="translate(270,200)" opacity="0.9">
                                <circle cx="0" cy="0" r="22" fill="#8f764e"/>
                                <rect x="-15" y="22" width="30" height="40" rx="15" fill="#6b3a1e"/>
                                <circle cx="-7" cy="-10" r="2.5" fill="white"/>
                                <circle cx="7" cy="-10" r="2.5" fill="white"/>
                                <path d="M-10 10 Q0 15 10 10" stroke="white" strokeWidth="2.5" fill="none"/>
                            </g>
                            
                            {/* Children playing */}
                            <g transform="translate(165,240)" opacity="0.8">
                                <circle cx="0" cy="0" r="15" fill="#d1493f"/>
                                <rect x="-12" y="15" width="24" height="30" rx="12" fill="#f4c071"/>
                            </g>
                            
                            <g transform="translate(235,240)" opacity="0.8">
                                <circle cx="0" cy="0" r="15" fill="#8f764e"/>
                                <rect x="-12" y="15" width="24" height="30" rx="12" fill="#6b3a1e"/>
                            </g>
                            
                            {/* Elegant connection lines */}
                            <path d="M130 222 Q200 190 270 222" stroke="#6b3a1e" strokeWidth="3" fill="none" opacity="0.4"/>
                            <path d="M165 255 Q200 235 235 255" stroke="#6b3a1e" strokeWidth="2" fill="none" opacity="0.4"/>
                            
                            {/* Floating hearts */}
                            <g opacity="0.6">
                                <path d="M170 140 C170 136, 173 133, 177 136 C181 133, 184 136, 184 140 C184 144, 177 152, 177 152 C177 152, 170 144, 170 140 Z" fill="#d1493f"/>
                                <path d="M210 150 C210 147, 212 145, 215 147 C218 145, 220 147, 220 150 C220 153, 215 158, 215 158 C215 158, 210 153, 210 150 Z" fill="#f4c071"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                <div className="text-center p-10 glass-effect rounded-3xl elegant-card hover-lift elegant-transition">
                    <div className="w-20 h-20 elegant-button rounded-2xl flex items-center justify-center mx-auto mb-6 elegant-shadow">
                        <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Purposeful Activities</h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                        Engaging workshops and activities designed to strengthen family bonds and teach valuable life skills to both parents and children.
                    </p>
                </div>
                <div className="text-center p-10 glass-effect rounded-3xl elegant-card hover-lift elegant-transition">
                    <div className="w-20 h-20 bg-custom-gold rounded-2xl flex items-center justify-center mx-auto mb-6 elegant-shadow">
                        <span className="text-3xl">💬</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Parent Discussions</h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                        Open forums where parents can share experiences, ask questions, and learn from each other in a supportive environment.
                    </p>
                </div>
                <div className="text-center p-10 glass-effect rounded-3xl elegant-card hover-lift elegant-transition">
                    <div className="w-20 h-20 bg-custom-olive rounded-2xl flex items-center justify-center mx-auto mb-6 elegant-shadow">
                        <span className="text-3xl">🎨</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Family Fun</h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                        Creative activities, games, and projects that families can enjoy together while building memories and connections.
                    </p>
                </div>
            </div>

            <div className="bg-custom-red text-white p-12 rounded-3xl text-center mb-16 relative overflow-hidden elegant-shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-custom-red via-custom-red to-red-800 opacity-95"></div>
                <div className="relative">
                    <h2 className="text-4xl font-serif font-bold mb-6 text-shadow">Join Us This Sunday!</h2>
                    <p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                        Experience the power of community support in your parenting journey. Whether you're a new parent or have years of experience, Village Sunday offers something valuable for every family.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="bg-custom-gold hover:bg-custom-gold text-gray-900 px-10 py-4 rounded-full text-lg font-semibold elegant-transition hover-lift elegant-shadow">
                            Register for This Sunday
                        </button>
                        <button className="glass-effect border-2 border-white/30 text-white hover:bg-white hover:text-red-600 px-10 py-4 rounded-full text-lg font-semibold elegant-transition hover-lift">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-3xl font-serif font-bold mb-12 text-gray-900">Upcoming Village Sunday Topics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="p-8 glass-effect rounded-2xl elegant-card border-l-4 border-custom-red hover-lift elegant-transition">
                        <h4 className="font-serif font-bold text-gray-900 text-xl mb-3">This Sunday: Building Emotional Intelligence</h4>
                        <p className="text-gray-600 font-light leading-relaxed">Help your children understand and manage their emotions effectively</p>
                    </div>
                    <div className="p-8 glass-effect rounded-2xl elegant-card border-l-4 border-custom-gold hover-lift elegant-transition">
                        <h4 className="font-serif font-bold text-gray-900 text-xl mb-3">Next Week: Positive Discipline Strategies</h4>
                        <p className="text-gray-600 font-light leading-relaxed">Learn discipline techniques that build character and respect</p>
                    </div>
                    <div className="p-8 glass-effect rounded-2xl elegant-card border-l-4 border-custom-olive hover-lift elegant-transition">
                        <h4 className="font-serif font-bold text-gray-900 text-xl mb-3">Coming Soon: Digital Wellness for Families</h4>
                        <p className="text-gray-600 font-light leading-relaxed">Navigate technology use in healthy, balanced ways</p>
                    </div>
                    <div className="p-8 glass-effect rounded-2xl elegant-card border-l-4 border-custom-brown hover-lift elegant-transition">
                        <h4 className="font-serif font-bold text-gray-900 text-xl mb-3">Future Topic: Building Resilience</h4>
                        <p className="text-gray-600 font-light leading-relaxed">Equip your children with tools to overcome challenges</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Village;