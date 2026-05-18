import { motion } from "framer-motion";
import profileImage from "./assets/me.png";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
        />

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-black tracking-tight"
          >
            Talha Ahmed
          </motion.h1>

          <div className="hidden md:flex items-center gap-8 text-white/70">

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#journey" className="hover:text-white transition">
              Journey
            </a>

            <a href="#ventures" className="hover:text-white transition">
              Ventures
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT SIDE */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-6"
            >
              Entrepreneur • Builder • Educationist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >

              <span className="block text-6xl md:text-7xl font-black leading-none mb-6">
                Talha Ahmed
              </span>

              <span className="block text-5xl md:text-6xl font-black leading-[1.05]">

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Building Businesses,
                </span>

                <br />

                Digital Products

                <br />

                & Meaningful Ventures

              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/70 text-lg leading-9 max-w-2xl mb-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 mb-10"
              >

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-3" />

                  <p className="text-white/80 text-lg">
                    CEO & Co-Founder at KarloDeal
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-3" />

                  <p className="text-white/80 text-lg">
                    Senior Software Engineer at WikiWoop
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-3" />

                  <p className="text-white/80 text-lg">
                    Co-Founder at The Nuvia School
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-3" />

                  <p className="text-white/80 text-lg">
                    Branch Partner at The AIMS School
                  </p>
                </div>

              </motion.div>
              {/* <br /> */}
              Focused on technology, entrepreneurship,
              education, and building impactful experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >

              <button className="group px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 flex items-center gap-3">

                Explore My Journey

                <FaArrowRight className="group-hover:translate-x-1 transition" />

              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300">
                View Ventures
              </button>

            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-5 mt-12 text-2xl text-white/60"
            >

              <a href="#">
                <FaGithub className="hover:text-white transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-white transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-white transition" />
              </a>

            </motion.div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative flex justify-center"
          >

            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl" />

            {/* Main Image Card */}
            <div className="relative w-full max-w-[520px] h-[700px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">

              <img
                src={profileImage}
                alt="Talha Ahmed"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" /> */}

              {/* Bottom Info */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-8">

                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">

                  <h2 className="text-3xl font-bold mb-3">
                    Founder • Builder • Developer
                  </h2>

                  <p className="text-white/70 leading-8">
                    Building digital products, educational ventures,
                    and modern experiences through technology,
                    entrepreneurship, and creative thinking.
                  </p>

                </div>

              </div>

              Floating Cards
              <div className="absolute top-8 left-8 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-5 py-4">

                <p className="text-sm text-white/60">
                  CEO & Co-Founder
                </p>

                <h3 className="font-bold text-lg mt-1">
                  KarloDeal
                </h3>

              </div>

              <div className="absolute top-40 -right-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-5 py-4">

                <p className="text-sm text-white/60">
                  Co-Founder
                </p>

                <h3 className="font-bold text-lg mt-1">
                  The Nuvia School
                </h3>

              </div>

              <div className="absolute bottom-36 -left-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-5 py-4">

                <p className="text-sm text-white/60">
                  Branch Partner
                </p>

                <h3 className="font-bold text-lg mt-1">
                  The AIMS School
                </h3>

              </div> */}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative py-32 border-t border-white/10"
      >

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-6">
            About Me
          </p>

          <h2 className="text-5xl font-black mb-10">
            More Than Just Development
          </h2>

          <p className="text-white/70 text-xl leading-10">
            I am passionate about building businesses,
            creating digital experiences, and contributing
            to educational initiatives that create real impact.
            My journey combines technology, entrepreneurship,
            creativity, and leadership — all driven by
            continuous learning and meaningful growth.
          </p>

        </div>

      </section>

      {/* JOURNEY SECTION */}
      <section
        id="journey"
        className="relative py-32 border-t border-white/10"
      >

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-6">
            My Journey
          </p>

          <h2 className="text-5xl font-black mb-12">
            The Story Behind The Journey
          </h2>

          <p className="text-white/70 text-xl leading-10">
            I come from a middle-class family where education,
            discipline, respect, and character were always valued.
            My mother, a teacher, and my father, an experienced
            businessman, played the biggest role in shaping who I am today.
            Their trust, guidance, sacrifices, and upbringing gave me the
            confidence to pursue ideas, build ventures, and continuously grow.
            Whatever I have achieved today is deeply rooted in the values,
            support, and tarbiat they provided throughout my life.
          </p>

        </div>

      </section>

    </div>
  );
}