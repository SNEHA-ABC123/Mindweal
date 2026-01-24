import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Heart,
  ShieldCheck,
  Users,
  GraduationCap,
  LifeBuoy,
  ArrowRight
} from 'lucide-react';
import { motion } from "framer-motion";

const Footer = () => {

  const quickLinks = [
    { name: 'Psychotherapy', href: '#services' },
    { name: 'Individual Counseling', href: '#services' },
    { name: 'Relationship Counseling', href: '#services' },
    { name: 'Queer Affirmative Therapy', href: '#services' },
    { name: 'Trauma Informed Therapy', href: '#services' },
    { name: 'Psychological First Aid', href: '#services' },
    { name: 'Career Counseling & Guidance', href: '#services' },
    { name: 'Career Guidance for 11th & 12th', href: '#services' }
  ];

  const resources = [
    { name: 'Mental Health Resources', href: '#' },
    { name: 'Crisis Support', href: '#' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Sangath – Mental Health NGO', href: 'https://www.sangath.in/team' },
    { name: 'Sumaitri – Mental Health Support', href: 'https://www.sumaitri.net/about/' },
    { name: 'Sanjivini Society', href: 'https://www.sanjivinisociety.org/' },
    { name: 'Saarthak Mental Health Services', href: 'https://www.brainsway.com/location/saarthak-mental-health-services/' },
    { name: 'Manas Foundation', href: 'https://manas.org.in/' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://in.linkedin.com/company/mindweal-by-pihu-suri', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/mindweal_by_pihusuri/?hl=en', label: 'Instagram' },
    { icon: Mail, href: 'mailto:mindwealbypihusuri@gmail.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/919599618238', label: 'WhatsApp' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const columnAnim = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white text-sm leading-relaxed">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* BRAND INFO */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/Mindweal/images/logo.jpg"
                alt="MindWeal Logo"
                className="h-14 w-14 rounded-xl object-contain bg-white p-2"
              />
              <div>
                <h3 className="text-2xl font-bold">MindWeal</h3>
                <p className="text-mint-300 font-medium">by Pihu Suri</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Your trusted partner in mental health and wellness. Creating safe spaces
              for healing, growth, and transformation.
            </p>
                 <div className="space-y-3 mb-6 text-gray-300"></div>
                 <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-4 w-4 text-mint-400" />
                   <span>EPA Compliant</span>
                </div>

            <div className="space-y-3 mb-6 text-gray-300">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-mint-400" />
                <span>1000+ individuals trained in life-saving mental health skills</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-mint-400" />
                <span>1300+ lives transformed</span>
              </div>
              <div className="flex items-center gap-3">
                <LifeBuoy className="h-4 w-4 text-mint-400" />
                <span>1000+ Psychological First Aid trainees</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-mint-600 transition transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* SERVICES */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
>


            <h4 className="text-lg font-semibold mb-6 text-mint-300">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="relative inline-flex items-center gap-2 text-gray-300 hover:text-mint-300 transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-mint-300 after:transition-all hover:after:w-full"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RESOURCES */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
>


            <h4 className="text-lg font-semibold mb-6 text-mint-300">Resources</h4>
            <ul className="space-y-3">
              {resources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-mint-300 flex items-center gap-2 transition"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
>


            <h4 className="text-lg font-semibold mb-6 text-mint-300">Get In Touch</h4>

            <div className="space-y-3 mb-6 text-gray-300">
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-mint-400" />
                <span>+91 9599618238 (Calls & WhatsApp)</span>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-mint-400" />
                <span>mindwealbypihusuri@gmail.com</span>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-mint-400" />
                <span>Online & In-Person · Delhi NCR, India</span>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-mint-400" />
                <span>Mon–Sat: 9 AM – 8 PM · Sunday by appointment</span>
              </div>
            </div>
{/* CONTACT CTAs */}
<div className="mb-8 space-y-4">

  {/* Primary CTA */}
  <a
    href="https://wa.me/919599618238"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-center bg-mint-600 text-white py-3 rounded-xl
               font-medium hover:bg-mint-500 transition-all duration-300"
  >
    Book a Therapy Session
  </a>

  {/* Secondary CTA */}
  <a
    href="mailto:mindwealbypihusuri@gmail.com"
    className="block text-center border border-mint-500 text-mint-400 py-3 rounded-xl
               hover:bg-mint-500/10 transition-all duration-300"
  >
    Book a Discovery Call
  </a>

  {/* Soft reassurance */}
  <p className="text-s text-gray-400 text-center">
    No pressure. Reach out in the way that feels safest for you.
  </p>

</div>

            <div className="bg-red-900/30 border border-red-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-red-400" />
                <h5 className="font-semibold text-red-300">Crisis Support</h5>
              </div>
              <p className="text-red-200 text-sm">
                If you're in crisis, call <strong>988</strong> or visit your nearest emergency room.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-400">
        © 2024 MindWeal by Pihu Suri. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
