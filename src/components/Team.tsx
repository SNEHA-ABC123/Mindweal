import React, { useState } from "react";

// ✅ Define proper interface name
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  contact: string;
}

// ✅ Team member data with correct image paths
const teamMembers: TeamMember[] = [
  {
    name: "Ms. PIHU SURI",
    role: "Founder & Lead Psychologist at MindWeal by Pihu Suri",
    image: "/assets/pihusuri.png",
    bio: "Pihu Suri is a licensed psychologist and founder of MindWeal. She specializes in cognitive-behavioral therapy and holistic wellbeing. With years of experience, she focuses on helping clients achieve emotional resilience and personal growth.",
    contact: "mailto:contact@mindweal.com",
  },
  {
    name: "Ms. SHIVANGI SOBTI",
    role: "Counseling Psychologist Therapist at MindWeal by Pihu Suri",
    image: "/assets/shivangisobti.png",
    bio: "Shivangi Sobti is a counseling psychologist dedicated to supporting individuals through evidence-based therapeutic practices. Her approach is empathetic and client-centered, fostering a safe and healing environment.",
    contact: "mailto:shivangi@mindweal.com",
  },
  {
    name: "Ms. AVNI KOHLI",
    role: "Counseling Psychologist Therapist at MindWeal",
    image: "/assets/avnikohli.png",
    bio: "Avni Kohli is a therapist focused on mental health awareness and self-development. She combines professional expertise with compassion to help clients overcome challenges and find balance in life.",
    contact: "mailto:avni@mindweal.com",
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <section
      id="team"
      className="relative bg-gray-100 py-16"
      style={{
        backgroundImage: "url('/assets/teambg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-green-900 mb-16 tracking-wide drop-shadow-md">
          MEET THE TEAM
        </h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#d8f0e0] rounded-2xl shadow-xl border border-green-800 relative flex flex-col items-center py-6"
            >
              {/* Profile Picture */}
              <div className="w-36 h-36 rounded-full border-4 border-green-800 shadow-md overflow-hidden -mt-20 bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="text-center mt-6 px-4 pb-4">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-sm text-gray-700 italic">{member.role}</p>

                <button
                  onClick={() => openModal(member)}
                  className="mt-5 bg-green-700 hover:bg-green-800 text-white text-sm font-medium py-2 px-6 rounded-full transition-all duration-200"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-lg animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            <div className="flex justify-center mb-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-28 h-28 rounded-full border-4 border-green-700 object-cover shadow-md"
              />
            </div>

            <h3 className="text-xl font-bold text-center text-green-800">
              {selectedMember.name}
            </h3>
            <p className="text-center text-gray-700 italic mt-1 mb-4">
              {selectedMember.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              {selectedMember.bio}
            </p>

            <div className="text-center mt-6">
              <a
                href={selectedMember.contact}
                className="inline-block bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-full text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
