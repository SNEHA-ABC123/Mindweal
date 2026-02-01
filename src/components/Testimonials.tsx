import React from 'react';
import { Star, Quote, Heart, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Therapy helped me manage my anxiety and feel emotionally safe again. I felt heard, understood, and supported without judgment. The space created during sessions made healing feel possible.",
      service:"Individual Therapy",
      color: "mint"
    },
    {
      rating: 5,
      text: "During one of the darkest phases of my life, therapy gave me compassion, patience, and genuine understanding. It helped me reconnect with myself and believe in healing again.",
      service:"Trauma-Informed Therapy",
      color: "lavender"
    },
    {
      rating: 5,
      text: "These sessions helped me cope with intense emotions and long-standing mental health struggles. I’ve grown stronger, calmer, and more accepting of myself with time and guidance.",
      service:"Psychotherapy",
      color: "sage"
    },
    {
      rating: 5,
      text: "I felt accepted exactly as I am. Therapy helped me process my emotions without fear or judgment, and supported me in becoming more confident and grounded in myself.",
      service:"Queer-Affirmative Therapy",
      color: "mint"
    },
    {
      rating: 5,
      text: "Career counseling helped me gain clarity and confidence during a confusing phase. The guidance was practical, encouraging, and helped me understand my strengths better.",
      service:"Career Counseling & Guidance",
      color: "lavender"
    },
    {
      rating: 5,
      text: "During an overwhelming period, the immediate emotional support made a real difference. I felt calmer, supported, and less alone when I needed help the most.",
      service:"Psychological First Aid",
      color: "sage"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      mint: {
        bg: 'from-mint-50 to-mint-100',
        accent: 'text-mint-600',
        border: 'border-mint-200'
      },
      lavender: {
        bg: 'from-lavender-50 to-lavender-100',
        accent: 'text-lavender-600',
        border: 'border-lavender-200'
      },
      sage: {
        bg: 'from-sage-50 to-sage-100',
        accent: 'text-sage-600',
        border: 'border-sage-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-mint-100 text-mint-700 rounded-full text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have transformed their lives through therapy at MindWeal.
            Your journey to healing and growth starts here.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-mint-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-lavender-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-sage-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-mint-600 mb-2">5+</div>
            <div className="text-gray-600">Years Trusted</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const colors = getColorClasses(testimonial.color);
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border ${colors.border}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className={`h-8 w-8 ${colors.accent} opacity-70`} />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="relative">
                    
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <Heart className="h-2 w-2 text-red-500 fill-current" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Stories Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Success Stories by Numbers</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The impact of quality mental health care speaks for itself through our client outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-mint-50 to-mint-100 rounded-2xl">
              <div className="w-16 h-16 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-mint-600 mb-2">92%</div>
              <div className="font-semibold text-gray-900 mb-2">Improved Well-being</div>
              <div className="text-sm text-gray-600">Clients report significant improvement in overall mental health</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-lavender-50 to-lavender-100 rounded-2xl">
              <div className="w-16 h-16 bg-lavender-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-lavender-600 mb-2">85%</div>
              <div className="font-semibold text-gray-900 mb-2">Relationship Health</div>
              <div className="text-sm text-gray-600">Couples report improved communication and connection</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-sage-50 to-sage-100 rounded-2xl">
              <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sage-600 mb-2">96%</div>
              <div className="font-semibold text-gray-900 mb-2">Would Recommend</div>
              <div className="text-sm text-gray-600">Clients would recommend MindWeal to friends and family</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-mint-500 to-sage-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of clients who have transformed their lives through therapy at MindWeal. 
              Your journey to healing and growth starts with a single step.
            </p>
            <button className="px-8 py-4 bg-white text-mint-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;