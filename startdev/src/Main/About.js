import React from 'react';
import './About.css';
import colette from '../assets/founder2.png';
import pwp from '../assets/PWP.jpg';


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
                    <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">Our Story – Parenting with a Purpose</h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                        <p>
                            Parenting with a Purpose started with a simple belief: raising children shouldn’t feel like a journey you take alone, and it shouldn't be one-size-fits-all. 
                            As parents ourselves, we faced the same questions, challenges, and dreams that so many families do. We wanted more than survival; we wanted purpose.
                        </p>
                        <p>
                            That’s why we created a space where parents could feel seen, supported, and empowered, not just in raising their kids, but in growing alongside them. Through education, we equip families with tools that make a real difference. Through community, we remind each other that we’re not alone. 
                            And through entrepreneurship, we inspire parents and children alike to think creatively, build boldly, and lead with intention.
                        </p>
                        <p>
                            This is more than parenting, it’s legacy-building. Together, we’re raising the next generation with purpose, power, and passion.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-fit flex items-center justify-center glass-effect2 p-4 rounded-3xl elegant-shadow">
                        <img 
                            src={pwp} 
                            alt="PWP logo" 
                            className="w-full rounded-2xl elegant-shadow"
                            onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-brown mb-3">100+</div>
                    <p className="text-gray-900 font-semibold">Families Supported</p>
                </div>
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-olive mb-3">150+</div>
                    <p className="text-gray-900 font-semibold">Expert Resources</p>
                </div>
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-olive mb-3">50+</div>
                    <p className="text-gray-900 font-semibold">Certified Mentors</p>
                </div>
                <div className="text-center p-8 glass-effect rounded-2xl elegant-card hover-lift elegant-transition">
                    <div className="text-4xl font-serif font-bold custom-brown mb-3">25</div>
                    <p className="text-gray-900 font-semibold">Years Experience</p>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-4xl font-serif font-bold text-center mb-16 text-gray-900">Meet Our Founder</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="flex justify-center">
                        <div className="w-fit glass-effect3x p-4 rounded-3xl elegant-shadowx">
                            {/* Founder Photo */}
                            <img 
                                src={colette} 
                                alt="picture of Foudner, Collette Choates" 
                                className="w-80 h-80 rounded-3xl elegant-shadow object-cover"
                                onerror="this.src=''; this.alt='Image failed to load'; this.style.display='none';"
                            />
                            <div className="text-center mt-6">
                                <h3 className="text-black text-2xl font-serif font-bold mb-2">Colette Choates</h3>
                                <p className="text-black font-semibold">Founder, Entrepreneur, & Community Advocate</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 rounded-md">
                        <h3 className="text-2xl font-serif font-bold mb-8 text-black">Meet the Founder: Colette’s Story</h3>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                            <p>
                                Colette’s journey began with a deep belief in the strength of family and community. 
                                As a mother, mentor, and lifelong advocate, she saw that when families are supported—through guidance, education, and opportunity—they don’t just overcome challenges; they thrive.
                            </p>
                            <p>
                                Drawing from her own experiences growing up in a resilient but underserved community, Colette understood the gaps many families face: the lack of mentorship, limited access to resources, and the absence of economic empowerment.
                                But she also saw something powerful—what happens when just one person believes in you, when one door opens, or when one opportunity changes everything.
                            </p>
                            <p>
                                That belief inspired her to launch this organization with a bold vision: to connect families through mentoring, advocacy, education, and entrepreneurship.
                            </p>
                            <ul className="list-disc text-black pl-6 mb-4 space-y-2">
                                <li>
                                <span className="font-bold">Mentoring</span> provides safe, supportive relationships 
                                that guide youth and adults through life's challenges and milestones.
                                </li>
                                <li>
                                <span className="font-bold">Advocacy</span> amplifies the voices of families, pushing 
                                for policies and practices that promote equity and access.
                                </li>
                                <li>
                                <span className="font-bold">Education</span> equips families with essential life skills, 
                                parenting tools, and knowledge to grow and lead.
                                </li>
                                <li>
                                <span className="font-bold ">Entrepreneurship</span> opens doors to economic freedom, 
                                turning passions into income and ideas into legacies.
                                </li>
                            </ul>
                            
                            <p className="mb-4">
                                What started as a small, community-based effort has grown into a thriving network of 
                                families, mentors, and leaders building a better future—together.
                            </p>
                            
                            <p>
                                Colette continues to lead with compassion, determination, and a commitment to lifting 
                                others as she climbs. Her vision is simple yet powerful: <span className="font-bold text-black">when 
                                we invest in families, we transform communities</span>.
                            </p>
                        </div>
                        
                        {/* <div className="mt-10 space-y-4"> */}
                            {/* <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-custom-gold rounded-xl flex items-center justify-center">
                                    <i class="fi fi-sr-family text-center text-xl text-black"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Mother of Six</h4>
                                    <p className="text-gray-600 font-light">4 Girls & 2 Boys</p>
                                </div>
                            </div> */}
                            {/* <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-custom-olive rounded-xl flex items-center justify-center">
                                    <i class="fi fi-ss-award text-center text-xl text-white"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Award-Winning Coach</h4>
                                    <p className="text-gray-600 font-light">2023 Family Coach of the Year</p>
                                </div>
                            </div> */}
                            {/* <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-custom-brown rounded-xl flex items-center justify-center">
                                    <i class="fi fi-sr-user-writer text-center text-xl text-white"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Published Author</h4>
                                    <p className="text-gray-600 font-light">"Raising Purpose-Driven Children"</p>
                                </div>
                            </div> */}
                        {/* </div> */}
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