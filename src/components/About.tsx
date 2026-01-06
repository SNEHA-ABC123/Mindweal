// @ts-ignore
import { Heart } from "lucide-react";

const About = () => {
return (
<section id="about" className="relative bg-gradient-to-b from-[#f9f9ff] via-white to-[#f9f9ff] overflow-hidden py-28" >
<div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-28">
{/* MAIN HEADING */}
<div className="text-center space-y-4">
<h1 className="text-5xl md:text-6xl font-bold text-gray-900">
About Us
</h1>
<p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
Learn more about our journey, mission, and the heart behind MindWeal.
</p>
</div>

    {/* OUR STORY SECTION */}
    <div className="relative grid md:grid-cols-2 gap-16 items-center rounded-3xl bg-white shadow-md py-14 px-10 overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Background Logo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.jpg`}
          alt="MindWeal Background Logo"
          className="w-[60%] md:w-[45%] opacity-5 object-contain"
        />
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h4 className="text-xl font-semibold text-lavender-700 uppercase mb-3 tracking-wide">
          Our Story
        </h4>
        <p className="text-gray-700 text-[1.125rem] md:text-[1.2rem] leading-relaxed md:leading-[2rem]">
          <strong>MindWeal by Pihu Suri</strong> was founded with a vision to
          create a world where mental well-being is a priority, not an
          afterthought. In today’s fast-paced world, individuals often
          struggle to navigate their emotions and inner challenges.
          MindWeal was born out of a deep commitment to guiding people
          toward resilience, healing, and self-discovery through empathy and
          psychological growth.
        </p>
      </div>

      {/* Image */}
      <div className="relative z-10 flex justify-center">
        <img
          src="/images/mwaboutus.png"
          alt="MindWeal Therapy"
          className="object-contain w-full h-full max-h-[480px] rounded-3xl transition-transform duration-500 hover:scale-[1.03] brightness-105 contrast-110"
        />
      </div>
    </div>

    {/* FOUNDER SECTION HEADING */}
    <div className="text-center space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Message from the Founder
      </h2>
    </div>

    {/* MESSAGE FROM FOUNDER SECTION */}
    <div className="relative grid md:grid-cols-2 gap-16 items-center rounded-3xl bg-white shadow-md py-14 px-10 overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Background Logo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="/images/logo.jpg"
          alt="MindWeal Background Logo"
          className="w-[60%] md:w-[45%] opacity-5 object-contain"
        />
      </div>

      {/* Founder Image */}
      <div className="relative z-10 flex justify-center order-2 md:order-1">
        <div className="w-full max-w-[480px] h-[420px] rounded-3xl overflow-hidden shadow-xl bg-gray-50">
          <img
            src="/images/pihusuri.png"
            alt="Pihu Suri"
            className="object-cover object-top w-full h-full rounded-3xl transition-transform duration-500 hover:scale-[1.03] brightness-105 contrast-110"
          />
        </div>
      </div>

      {/* Founder Message */}
      <div className="relative z-10 order-1 md:order-2">
        <p className="italic text-gray-700 text-[1.125rem] md:text-[1.2rem] leading-relaxed md:leading-[2rem] mb-6">
          “Mental well-being is not just about overcoming struggles — it’s
          about creating a life where you truly thrive. At{" "}
          <strong>MindWeal</strong>, we provide a safe, inclusive, and
          nurturing space for individuals to explore emotions without
          judgment. Our goal is to help you untangle the mind, heal from
          within, and embrace clarity and confidence.”
        </p>

        <p className="text-lg font-semibold text-lavender-700 mb-4">
          — Pihu Suri, Founder & Lead Psychologist
        </p>

        <div className="mt-6 flex items-center space-x-3 text-gray-600">
          <Heart className="h-6 w-6 text-mint-500" />
          <span className="text-base md:text-lg">
            Dedicated to transforming lives through empathy and healing
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative Gradient Divider */}
  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mint-100/60 to-transparent"></div>
</section>


);
};

export default About;