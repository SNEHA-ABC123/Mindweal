import React from "react";

const services = [
  {
    title: "Psychotherapy",
    image:
      "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services/psychotherapy",
  },
  {
    title: "Individual Counselling",
    image:
      "https://images.pexels.com/photos/7176030/pexels-photo-7176030.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services/individual",
  },
  {
    title: "Couple Therapy",
    image:"couple.png",
    link: "/services/couples",
  },
  {
    title: "Queer Affirmative Therapy",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services/queer",
  },
  {
    title: "Trauma Informed Therapy",
    image:
      "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services/trauma",
  },
  {
    title: "Psychological First Aid",
    image:
      "https://images.pexels.com/photos/7176034/pexels-photo-7176034.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services/first-aid",
  },
  {
    title: "Career Counselling",
    image:
      "https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services/career",
  },
  {
    title: "Career Guidance for 11th and 12th",
    image:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services/students",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => (window.location.href = service.link)}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-center text-lg font-medium">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
