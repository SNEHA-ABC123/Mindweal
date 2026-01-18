import React, { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: React.ReactNode;
  contact: string;
  bookingLink: string;
  experience: string;   // NEW
}

const teamMembers: TeamMember[] = [
  {
    name: "Ms. PIHU SURI",
    role: "Founder & Lead Psychologist",
    image: "pihusuri.png",
    bio:( 
    <>Pihu Suri is the Founder and Lead Psychologist of MindWeal, providing <strong> individual therapy, couples therapy, group counseling and therapy, and career guidance and orientation</strong>. She is also actively involved in <strong> psychology training and learning programs, mental health workshops, webinars, and guest lectures,</strong> with a strong focus on holistic and client-centered care.
    </>),
    contact: "mailto:mindweal.ps@gmail.com",
    bookingLink: "https://docs.google.com/forms/d/e/1FAIpQLSdPuuuAuPsEOVM-EnVYkIABhmaqUX17k79wMRrwCK7LjQcHYg/viewform",
    experience: "B.A. Clinical Psychology, M.Sc.Clinical Psychology "
  },
  {
    name: "Ms. SHIVANGI SOBTI",
    role: "Counseling Psychologist",
    image: "shivangisobti.png",
    bio: ( <>Shivangi Sobti is a Counseling Psychologist who provides <strong> individual therapy sessions, group counseling, and career guidance and orientation.</strong> She also works with couples through <strong> couples counselling </strong> and offers additional support services tailored to <strong>clients’ emotional, personal, and professional needs.</strong></>),
    contact: "mailto:shivangisobti.mindwealbyps@gmail.com",
    bookingLink: "https://forms.gle/io54ZEG1tTWcSPjq5",
    experience: "B.A. Clinical Psychology, M.A. Clinical Psychology"
  },
  {
    name: "Ms. AVNI KOHLI",
    role: "JR. Counselling Psychologist",
    image: "avnikohli.png",
    bio: ( <> Avni Kohli is a Counseling Psychologist who provides <strong>individual therapy sessions focused on stress management, self-esteem and confidence building, daily life management, and support through major life transitions.</strong> </>),
    contact: "mailto:avni.nindwealbyps@gmail.com",
    bookingLink: "https://forms.gle/xYrdZvsQjyY7NzLR8",
    experience: "B.A. Applied Psychology, M.A. Psychology "
  },
  {
    name: "Dr. SHOBHA SHARMA",
    role: "Clinical Consultant",
    image: "ShobhaSharma.png",
    bio: ( <> Dr. Shobha Sharma is a Clinical Consultant and Academic Counsellor with extensive experience in <strong> child and adolescent psychology, psychometric assessments, and neurodevelopmental disorder.</strong> </>),
    contact: "mailto:shubhi.sharma869@gmail.com",
    bookingLink: "https://forms.gle/VXT7DSc3o3QiTApq6",
    experience: "B.A. Psychology, M.A. Psychology, M.Phil "
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
        backgroundImage: "url('teambg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-green-900 mb-16">
          MEET THE TEAM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#d8f0e0] rounded-2xl shadow-xl border border-green-800 relative flex flex-col items-center py-6"
            >
              <div className="w-36 h-36 rounded-full border-4 border-green-800 shadow-md overflow-hidden -mt-20 bg-white">
                <img
                    src={`${import.meta.env.BASE_URL}images/${member.image}`}
                    alt={member.name}
                    className={`w-full object-cover ${
                      member.name === "Ms. PIHU SURI"
                        ? "h-half "
                        : "h-full"
                    }`}
                    loading="lazy"
                  />
              </div>

              <div className="text-center mt-6 px-4 pb-4">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-base text-gray-00 font-medium ">{member.role}</p>

                {/* Long horizontal line */}
                <hr className="w-full border-green-800 my-4" />

                {/* Experience / Study */}
                <p className="text-sm text-gray-700 font-small mb-4">
                  {member.experience}
                </p>

                {/* Keep Know More */}
                <button
                  onClick={() => openModal(member)}
                  className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-full text-sm font-medium"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal – unchanged */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              &times;
            </button>

            <div className="flex justify-center mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/${selectedMember.image}`}
                alt={selectedMember.name}
                className="w-28 h-28 rounded-full border-4 border-green-700 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-center text-green-800">
              {selectedMember.name}
            </h3>
            <p className="text-center italic mt-1 mb-4">
              {selectedMember.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              {selectedMember.bio}
            </p>

            <div className="text-center mt-6 flex justify-center gap-4 flex-wrap">
              <a
                href={selectedMember.contact}
                className="bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-full"
              >
                Contact
              </a>

              <a
                href={selectedMember.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-5 rounded-full"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
