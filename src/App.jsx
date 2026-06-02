import { motion } from "framer-motion";
import profileImage from "./assets/me.png";
import karloDealLogo from "./assets/karlodeal-logo.jpg";
import wikiWoopLogo from "./assets/wikiwoop-logo.png";
import nuviaLogo from "./assets/nuvia-logo.jpg";
import aimsLogo from "./assets/aims-logo.png";

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

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-black">
              TA
            </div>

            <h1 className="text-2xl font-black tracking-tight">
              Talha Ahmed
            </h1>

          </motion.div>

          <div className="hidden md:flex items-center gap-8">

            <a href="#about" className="text-white/70 hover:text-white transition">
              About
            </a>

            <a href="#journey" className="text-white/70 hover:text-white transition">
              Journey
            </a>

            <a href="#ventures" className="text-white/70 hover:text-white transition">
              Ventures
            </a>

            <a href="#contact" className="text-white/70 hover:text-white transition">
              Contact
            </a>

            <div className="w-px h-6 bg-white/10" />

            <a
              href="https://github.com/IamTalhaAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/talha-ahmed-70b39724b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/malik.talha.ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition"
            >
              <FaInstagram size={20} />
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
              className="uppercase tracking-[0.25em] text-blue-400 text-sm mb-6"
            >
              ENTREPRENEUR • FLUTTER DEVELOPER • EDUCATIONIST
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

              <div className="text-4xl md:text-5xl font-black">

                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
                  Building Mobile Apps,
                </div>

                <div className="mb-3">
                  Digital Products
                </div>

                <div>
                  & Educational Ventures
                </div>

              </div>

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

              <div className="absolute -right-5 top-10 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-5 py-4 z-20">

                <p className="text-sm text-white/60">
                  Expertise
                </p>

                <h3 className="font-bold text-lg mt-1">
                  Flutter Developer
                </h3>

              </div>

              <img
                src={profileImage}
                alt="Talha Ahmed"
                className="w-full h-full object-cover"
              />

            </div>

          </motion.div>

        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
        >

          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="mt-2 text-2xl">
            ↓
          </div>

        </motion.div>
      </section>

      {/* VENTURES SECTION */}
      <section
        id="ventures"
        className="relative py-32 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-6">
            Ventures & Leadership
          </p>

          <h2 className="text-5xl font-black mb-6">
            Building Businesses, Products & Institutions
          </h2>

          <p className="text-white/60 text-xl max-w-4xl mb-16 leading-9">
            My work spans technology, commerce, and education —
            combining software engineering, entrepreneurship,
            and leadership to build products, businesses,
            and organizations that create long-term impact.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* KARLODEAL */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">

              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden">

                    <img
                      src={karloDealLogo}
                      alt="KarloDeal"
                      className="w-full h-full object-contain"
                    />

                  </div>

                  <div>
                    <p className="text-blue-400 text-sm uppercase tracking-wider">
                      CEO & Co-Founder
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                      KarloDeal
                    </h3>
                  </div>

                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  E-Commerce
                </span>

              </div>

              <p className="text-white/70 leading-8 flex-grow">
                Building a scalable e-commerce platform focused on connecting
                businesses and consumers through trusted sourcing,
                competitive pricing, and efficient distribution.
                Beginning with mobile accessories and parts from local and
                international markets, with a long-term vision of expanding
                into multiple retail and wholesale categories.
                Focused on creating a trusted commerce ecosystem for growth.
              </p>

              <div className="mt-8 pt-5 border-t border-white/10">

                <a
                  href="https://karlodeal.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition font-medium"
                >
                  Explore KarloDeal →
                </a>

              </div>

            </div>

            {/* WIKIWOOP */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">

              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden">

                    <img
                      src={wikiWoopLogo}
                      alt="WikiWoop"
                      className="w-full h-full object-contain"
                    />

                  </div>


                  <div>
                    <p className="text-purple-400 text-sm uppercase tracking-wider">
                      Senior Software Engineer
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                      WikiWoop
                    </h3>
                  </div>

                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Web3 & Social Media
                </span>

              </div>

              <p className="text-white/70 leading-8">
                <p className="text-white/70 leading-8">
                  Engineering a next-generation Web3 social platform that
                  combines social networking, short-form content,
                  knowledge sharing, and blockchain-powered rewards.
                  Users earn value through participation, engagement,
                  and content creation in a decentralized ecosystem.
                  The platform bridges social interaction, digital ownership,
                  and creator empowerment through blockchain technology.
                </p>
              </p>

              <div className="mt-8 pt-5 border-t border-white/10">

                <a
                  href="https://wikiwoop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition font-medium"
                >
                  Explore WikiWoop →
                </a>

              </div>

            </div>

            {/* NUVIA */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300">

              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden">

                    <img
                      src={nuviaLogo}
                      alt="The Nuvia School"
                      className="w-full h-full object-contain"
                    />

                  </div>

                  <div>
                    <p className="text-pink-400 text-sm uppercase tracking-wider">
                      Co-Founder
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                      The Nuvia School
                    </h3>
                  </div>

                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  Education
                </span>

              </div>

              <p className="text-white/70 leading-8">
                Co-founding an educational institution dedicated to
                delivering modern learning experiences, academic excellence,
                and character development. Focused on preparing students
                for lifelong learning and future success.
              </p>

              <div className="mt-8 pt-5 border-t border-white/10">

                <a
                  href="https://thnuviaschool.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition font-medium"
                >
                  Explore Nuvia →
                </a>

              </div>

            </div>

            {/* AIMS */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">

              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden">

                    <img
                      src={aimsLogo}
                      alt="The AIMS School"
                      className="w-full h-full object-contain"
                    />

                  </div>

                  <div>
                    <p className="text-yellow-400 text-sm uppercase tracking-wider">
                      Branch Partner
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                      The AIMS School
                    </h3>
                  </div>

                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                  Education
                </span>

              </div>

              <p className="text-white/70 leading-8">
                Partnering in the growth and strategic development of
                an established educational institution. Contributing
                to operational excellence, educational quality,
                leadership, and long-term expansion initiatives.
              </p>

              <div className="mt-8 pt-5 border-t border-white/10">

                <a
                  href="https://theaimschool.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition font-medium"
                >
                  Explore AIMS →
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-24 border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-black text-blue-400">
                5+
              </h3>

              <p className="text-white/60 mt-3">
                Years in Development
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-purple-400">
                4
              </h3>

              <p className="text-white/60 mt-3">
                Active Ventures
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-pink-400">
                100+
              </h3>

              <p className="text-white/60 mt-3">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-yellow-400">
                3
              </h3>

              <p className="text-white/60 mt-3">
                Industries
              </p>
            </div>

          </div>

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