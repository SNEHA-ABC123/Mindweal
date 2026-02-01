import React, { useState } from "react";

const services = [
  {
    title: "Psychotherapy",
    image: "psychotherapy.png",
    detail:
      "Psychotherapy: The therapist uses multiple sets of counselling skills and techniques aligning with various therapies to work on the problems that the client is facing.",
  },
  {
    title: "Individual Counselling",
    image: "individual.png",
    detail:
      "Individual counseling involves one-to-one sessions where therapist and client work collaboratively in a safe, comfortable, and confidential space.",
  },
  {
    title: "Couple Therapy",
    image: "couple.png",
    detail:
      "Couple Therapy focuses on helping couples explore problems in a safe and empathetic space and build workable solutions together.",
  },
  {
    title: "Queer Affirmative Therapy",
    image: "queer.png",
    detail:
      "Queer Affirmative Therapy provides a safe, respectful, and sensitive space for LGBTQIA+ individuals to explore their concerns.",
  },
  {
    title: "Trauma Informed Therapy",
    image: "trauma.png",
    detail:
      "Trauma Informed Therapy views emotional, psychological, and physical well-being through the lens of trauma, prioritizing safety and growth.",
  },
  {
    title: "Psychological First Aid",
    image: "first_aid.png",
    detail:
      "Psychological First Aid is an evidence-based first response that helps deal with initial distress during crisis situations.",
  },
  {
    title: "Career Counselling & Guidance",
    image: "career.png",
    detail:
      "Career Counselling is a structured process helping individuals explore strengths, interests, and opportunities for informed career choices.",
  },
  {
    title: "Career Guidance for 11th & 12th",
    image: "career11.png",
    detail:
      "Career Guidance helps 10th–12th students explore aptitude, interests, and future career possibilities in a safe environment.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/${service.image}`}
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

      {/* Detail Popup */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white max-w-xl w-full p-6 rounded-xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              &times;
            </button>

            <img
              src={`${import.meta.env.BASE_URL}images/${selectedService.image}`}
              alt={selectedService.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold mb-3">
              {selectedService.title}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {selectedService.detail}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
