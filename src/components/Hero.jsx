import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaMicrochip,
  FaLinux,
  FaCloud,
  FaEye,
  FaPython,
} from "react-icons/fa";

function Hero() {
  const technologies = [
    { name: "C", icon: null },
    { name: "Embedded C", icon: null },
    { name: "STM32", icon: <FaMicrochip /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Zephyr RTOS", icon: null },
    { name: "IoT", icon: <FaCloud /> },
    { name: "MQTT", icon: null },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(#e8eef5 1px, transparent 1px),
            linear-gradient(90deg, #e8eef5 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Soft blue glow */}
      <div className="absolute right-[-120px] top-[-100px] h-[600px] w-[600px] rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="absolute left-[-180px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-blue-50 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20"
          >
            {/* Small heading */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-9 bg-cyan-500" />

              <span className="text-sm font-bold tracking-[0.28em] text-cyan-600">
                EMBEDDED SYSTEMS &amp; IoT
              </span>
            </div>

            {/* Name */}
<h1 className="text-5xl md:text-7xl font-black text-slate-900">
  <span className="whitespace-nowrap">
    Mohit <span className="text-cyan-500">Kumar</span>
  </span>
</h1>

            {/* Profession */}
            <h2 className="mt-8 max-w-xl text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Electronics &amp; Communication Engineer
            </h2>

            {/* Focus */}
            <p className="mt-3 text-lg font-semibold text-cyan-600">
              Embedded Systems · Linux · IoT
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-500">
              Electronics and Communication Engineering graduate interested in
              embedded systems, Linux, IoT and real-time applications.
              Experienced with microcontrollers, communication interfaces,
              RTOS concepts and connected embedded systems.
            </p>

            {/* Technologies */}
            <div className="mt-7 flex max-w-xl flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md"
                >
                  {tech.icon && (
                    <span className="text-cyan-500">
                      {tech.icon}
                    </span>
                  )}

                  {tech.name}
                </div>
              ))}
            </div>

{/* Buttons */}
<div className="mt-4">

  {/* Resume Buttons */}
  <div className="flex gap-2 sm:gap-3 md:flex-wrap">
    
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 md:flex-none md:gap-3 md:px-6 md:text-base"
    >
      <FaEye className="text-sm" />
      View Resume
    </a>

    {/* Download Resume */}
    <a
      href="/resume.pdf"
      download="Mohit_Kumar_Resume.pdf"
className="group flex flex-1 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600 md:flex-none md:gap-3 md:px-6 md:text-base"    >
      <FaDownload className="text-sm" />
      Download Resume
    </a>

  </div>

  {/* View Projects */}
  <a
    href="#projects"
    className="group mt-2 flex w-fit items-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-600 md:mt-3 md:px-7"
  >
    View Projects
    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
  </a>

</div>
            {/* Social links */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:your@email.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-md"
              >
                <FaEnvelope />
              </a>

              <div className="ml-3 h-7 w-px bg-slate-200" />

              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

                Open to opportunities
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE — MICROCONTROLLER
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative hidden min-h-[560px] items-center justify-center md:flex"
          >
            {/* Large soft glow */}
            <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-100/60 blur-3xl" />

            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[500px] w-[500px] rounded-full border border-dashed border-cyan-200/80"
            />

            {/* Middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-cyan-100"
            />

            {/* Circuit SVG */}
            <svg
              viewBox="0 0 600 600"
              className="absolute h-[560px] w-[560px]"
            >
              {/* Left traces */}
              <path
                d="M20 300 H165"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />

              <path
                d="M65 210 H150 V245 H205"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              <path
                d="M65 390 H150 V355 H205"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              {/* Right traces */}
              <path
                d="M435 300 H580"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />

              <path
                d="M395 245 H450 V210 H535"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              <path
                d="M395 355 H450 V390 H535"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              {/* Top traces */}
              <path
                d="M300 165 V20"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />

              <path
                d="M245 205 V130 H205 V65"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              <path
                d="M355 205 V130 H395 V65"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              {/* Bottom traces */}
              <path
                d="M300 435 V580"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />

              <path
                d="M245 395 V470 H205 V535"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              <path
                d="M355 395 V470 H395 V535"
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                opacity="0.55"
              />

              {/* Connection dots */}
              {[
                [20, 300],
                [65, 210],
                [65, 390],
                [580, 300],
                [535, 210],
                [535, 390],
                [300, 20],
                [205, 65],
                [395, 65],
                [300, 580],
                [205, 535],
                [395, 535],
              ].map(([cx, cy], index) => (
                <circle
                  key={index}
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill="#06b6d4"
                />
              ))}
            </svg>

            {/* =================================================
                WHITE MICROCONTROLLER
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[250px] w-[250px]"
            >
              {/* Pins */}
              <div className="absolute -left-5 top-8 flex h-[185px] flex-col justify-between">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-[7px] w-6 rounded-l-sm bg-slate-400 shadow-sm"
                  />
                ))}
              </div>

              <div className="absolute -right-5 top-8 flex h-[185px] flex-col justify-between">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-[7px] w-6 rounded-r-sm bg-slate-400 shadow-sm"
                  />
                ))}
              </div>

              <div className="absolute -top-5 left-8 flex w-[185px] justify-between">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-6 w-[7px] rounded-t-sm bg-slate-400 shadow-sm"
                  />
                ))}
              </div>

              <div className="absolute -bottom-5 left-8 flex w-[185px] justify-between">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-6 w-[7px] rounded-b-sm bg-slate-400 shadow-sm"
                  />
                ))}
              </div>

              {/* Main white package */}
              <div className="absolute inset-0 rounded-[28px] border-2 border-cyan-400 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.18),0_0_35px_rgba(34,211,238,0.18)]">
                
                {/* Outer inset */}
                <div className="absolute inset-4 rounded-[21px] border border-slate-200 bg-slate-50 shadow-inner" />

                {/* Inner raised area */}
                <div className="absolute inset-8 rounded-[15px] border border-slate-200 bg-white shadow-[inset_0_1px_8px_rgba(15,23,42,0.05)]" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-cyan-100 bg-white shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                  
                  <motion.div
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                  />
                </div>

                {/* Status LED */}
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                />
              </div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400"
                style={{
                  left: `${20 + ((i * 31) % 60)}%`,
                  top: `${15 + ((i * 37) % 70)}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;