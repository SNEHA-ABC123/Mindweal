// @ts-ignore
import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#f5f6ff] via-white to-[#f5f6ff] py-32"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-300/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-purple-300/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 space-y-32">

        {/* ================= PAGE INTRO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            About MindWeal
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Where clinical psychology meets compassion, clarity, and care —
            without judgment.
          </p>
        </motion.div>

        {/* ================= OUR STORY ================= */}
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center rounded-[32px] bg-white/80 backdrop-blur-xl border border-gray-200 px-14 py-24 shadow-sm">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative pl-12"
          >
            {/* Accent bar */}
            <span className="absolute left-0 top-4 h-28 w-[5px] rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />

            {/* Our Story — BIG & BOLD */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            >
              Our Story
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-indigo-700 mb-10"
            >
              Healing begins when you feel truly heard.
            </motion.h3>

            <div className="space-y-7 text-[1.15rem] leading-[2.15rem] text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">
                  MindWeal by Pihu Suri
                </span>{" "}
                was founded with a core belief — mental well-being deserves the
                same seriousness, dignity, and care as physical health.
              </p>

              <p>
                In an increasingly fast-paced world, many people feel unseen,
                emotionally overwhelmed, and misunderstood. MindWeal exists as
                a deliberate pause — a safe space for reflection, resilience,
                and meaningful inner change.
              </p>

              <p>
                Our approach blends clinical expertise with deep empathy,
                honoring the truth that healing is not linear — it is personal,
                layered, and human.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-14 bg-indigo-400" />
              <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                Untangle · Heal · Thrive
              </span>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="rounded-[28px] p-[2px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
              <div className="rounded-[26px] bg-[#0e1220] p-6">
                <img
                  src={`${import.meta.env.BASE_URL}images/ourstory.jpg`}
                  alt="MindWeal Therapy"
                  className="rounded-2xl max-w-md w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= FOUNDER MESSAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative grid md:grid-cols-2 gap-20 items-center rounded-[36px] bg-white border border-gray-200 px-14 py-20 shadow-lg"
        >
          {/* Background watermark */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt="MindWeal watermark"
              className="w-[55%] opacity-[0.035]"
            />
          </div>

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex justify-center"
          >
            <div className="w-full max-w-[460px] h-[440px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/pihusuri.png`}
                alt="Pihu Suri"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Founder Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative z-10"
          >
            <Quote className="w-10 h-10 text-indigo-400 mb-6" />

            <p className="text-[1.2rem] leading-[2.2rem] text-gray-700 italic mb-8">
              “Mental well-being is not just about overcoming struggles — it is
              about building a life where you feel grounded, confident, and
              emotionally safe. At <strong>MindWeal</strong>, we walk alongside
              you with compassion, clinical clarity, and respect.”
            </p>

            <p className="text-lg font-semibold text-indigo-700 mb-6">
              — Pihu Suri <br />
              <span className="text-sm text-gray-500 font-normal">
                Founder & Lead Clinical Psychologist
              </span>
            </p>

            <div className="flex items-center gap-3 text-gray-600">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-base">
                Evidence-based, ethical & deeply human care
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-100/60 to-transparent" />
    </section>
  );
};

export default About;
