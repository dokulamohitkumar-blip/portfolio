import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaIndustry,
  FaCar,
  FaRuler,
  FaCloud,
  FaMicrochip,
  FaWifi,
  FaThermometerHalf,
  FaGithub,
FaEye,
  FaTint,
} from "react-icons/fa";
import ProjectAnimation from "./ProjectAnimation";
import MobileProjectAnimation from "./MobileProjectAnimation";
import GateAnimation from "./GateAnimation";
import DistanceAnimation from "./DistanceAnimation";
import ZephyrAnimation from "./ZephyrAnimation";

const projects = [
  {
    title: "Industry Parameters Monitoring 4.0",
    type: "IoT • Industrial Monitoring",

      github: "https://github.com/dokulamohitkumar-blip/Industry-Parameters-Monitoring-4.0",


    description:
      "IoT-based industrial monitoring system using STM32F446RE to monitor temperature, gas, vibration, pressure and flame parameters in real time.",

    technologies: [
      "STM32CubeIDE",
      "Embedded C",
      "UART",
      "I2C",
      "ADC",
      "MQTT",
      "IoT Cloud",
    ],

    icon: FaIndustry,
    color: "cyan",

    sensors: [
      "Temperature",
      "Gas",
      "Vibration",
      "Pressure",
      "Flame",
    ],
  },

{
  title: "IoT-Based Smart Parking System",
  type: "IoT • Automation",
  github: "https://github.com/dokulamohitkumar-blip/IoT-Based-Smart-Parking-System",
  video:
    "https://res.cloudinary.com/vriw1jo5/video/upload/v1788491569/VID20260705180858_2.mp4",


    description:
      "RFID-based smart parking system with automated gate control, parking fee calculation, real-time parking status and cloud connectivity.",

    technologies: [
      "STM32CubeIDE",
      "Embedded C",
      "UART",
      "SPI",
      "I2C",
      "PWM",
      "HTTPS/REST",
      "Cloud",
    ],

    icon: FaCar,
    color: "violet",

    sensors: [
      "RFID",
      "Gate",
      "Parking Slots",
      "Cloud",
    ],
  },

  {
    title: "Distance Monitoring System",
    type: "IoT • Sensor Monitoring",

      github: "https://github.com/dokulamohitkumar-blip/Distance-Monitoring-System",


    description:
      "Real-time distance monitoring system using STM32F446RE and HC-SR04 ultrasonic sensor with MQTT cloud visualization.",

    technologies: [
      "STM32CubeIDE",
      "Embedded C",
      "UART",
      "Timer Input Capture",
      "MQTT",
      "RightTech IoT Cloud",
    ],

    icon: FaRuler,
    color: "indigo",

    sensors: [
      "HC-SR04",
      "STM32",
      "Wi-Fi",
      "Cloud",
    ],
  },

  {
    title: "Environmental Monitoring System",
    type: "Zephyr RTOS • IoT",
      github: "https://github.com/dokulamohitkumar-blip/Environmental-Monitoring-System-using-Zephyr-RTOS",

    description:
      "Environmental monitoring application built using Zephyr RTOS on STM32 Nucleo-F446RE with BME280 sensor and cloud connectivity.",

    technologies: [
      "Zephyr RTOS",
      "Embedded C",
      "STM32 Nucleo-F446RE",
      "BME280",
      "I2C",
      "UART",
      "WE-10",
      "RightTech IoT Cloud",
    ],

    icon: FaCloud,
    color: "emerald",

    sensors: [
      "Temperature",
      "Humidity",
      "Pressure",
      "Cloud",
    ],
  },
];

function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="flex items-center gap-3 mb-4">

            <div className="w-8 h-[2px] bg-cyan-500" />

            <span className="text-cyan-600 font-bold tracking-[4px] text-sm">
              PROJECTS
            </span>

          </div>

          <h2 className="text-5xl font-black text-slate-900">
            Things I've built.
          </h2>

          <p className="mt-5 text-lg text-slate-500 max-w-2xl">
            Embedded systems, IoT applications and real-time
            monitoring projects built using microcontrollers,
            sensors, communication interfaces and cloud platforms.
          </p>

        </motion.div>

        {/* Project cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
className={`group bg-white
w-full
min-w-0
rounded-2xl
border border-slate-200
p-6
shadow-sm

hover:shadow-2xl
${{
  cyan: "hover:border-cyan-300",
  violet: "hover:border-violet-300",
  indigo: "hover:border-indigo-300",
  emerald: "hover:border-emerald-300",
}[project.color]}
transition-all duration-300`}
              >

{/* Animation + GitHub */}

<div className="relative">


  {/* Project Animation */}
{/* Desktop animation */}

<div className="relative hidden md:block">

  {project.title === "IoT-Based Smart Parking System" ? (
    <GateAnimation />
  ) : project.title === "Distance Monitoring System" ? (
    <DistanceAnimation />
  ) : project.title === "Environmental Monitoring System" ? (
    <ZephyrAnimation />
  ) : (
    <ProjectAnimation project={project} />
  )}

</div>


{/* Mobile animation */}

<div className={`block md:hidden overflow-hidden rounded-xl ${
    project.title === "Industry Parameters Monitoring 4.0"
? "h-[150px]"
: "h-[180px]"
}`}>

<div
className={`origin-top-left w-[540px] ${
  project.title === "Industry Parameters Monitoring 4.0"
    ? "scale-[0.54]"
    : project.title === "IoT-Based Smart Parking System"
    ? "scale-[0.55]"
    : project.title === "Distance Monitoring System"
    ? "scale-[0.54]"
    : "scale-[0.45]"
    
}`}
>

    {project.title === "IoT-Based Smart Parking System" ? (
      <GateAnimation />
    ) : project.title === "Distance Monitoring System" ? (
      <DistanceAnimation />
    ) : project.title === "Environmental Monitoring System" ? (
      <ZephyrAnimation />
    ) : (
      <ProjectAnimation project={project} />
    )}

  </div>

</div>

</div>

                {/* Project header */}

                <div className="flex flex-col gap-3 mt-7 md:flex-row md:items-start md:justify-between md:gap-0">

<div className="min-w-0 flex-1">

<p
  className={`text-sm font-bold uppercase tracking-wider ${
    {
      cyan: "text-cyan-600",
      violet: "text-violet-600",
      indigo: "text-indigo-600",
      emerald: "text-emerald-600",
    }[project.color]
  }`}
>
  {project.type}
</p>

                    <h3 className="mt-2 text-2xl font-black text-slate-900">
                      {project.title}
                    </h3>

                  </div>

<div className="flex items-center gap-3">
  {/* View Video */}

{project.video && (
  <button
    type="button"
    onClick={() => setSelectedVideo(project.video)}
    title="View project demo"
    className="
      w-12
      h-12
      rounded-xl
      bg-slate-50
      border border-slate-200
      flex items-center
      justify-center
      text-slate-700
      text-xl
      hover:bg-violet-500
      hover:text-white
      hover:border-violet-500
      transition-all duration-300
    "
  >
    <FaEye />
  </button>
)}

  {/* Project Icon */}

  <div
    className="
      w-12
      h-12
      rounded-xl
      bg-slate-50
      border border-slate-200
      flex items-center
      justify-center
      text-cyan-500
      text-xl
      group-hover:bg-cyan-500
      group-hover:text-white
      transition-all duration-300
    "
  >
    <Icon />
  </div>

  {/* GitHub */}

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    title="View project on GitHub"
    className="
      w-12
      h-12
      rounded-xl
      bg-slate-50
      border border-slate-200
      flex items-center
      justify-center
      text-slate-700
      text-xl
      hover:bg-slate-900
      hover:text-white
      hover:border-slate-900
      transition-all duration-300
    "
  >
    <FaGithub />
  </a>

</div>

                </div>

                {/* Description */}

                <p className="mt-5 text-slate-500 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5
rounded-full
bg-slate-50
border border-slate-200
text-xs
font-semibold
text-slate-600
transition
${
  {
    cyan: "group-hover:border-cyan-200",
    violet: "group-hover:border-violet-200",
    indigo: "group-hover:border-indigo-200",
    emerald: "group-hover:border-emerald-200",
  }[project.color]
}`}
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

      {/* Video Modal */}

      {selectedVideo && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-5xl
              bg-slate-900
              rounded-2xl
              overflow-hidden
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}

            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="
                absolute
                top-3
                right-3
                z-10
                w-10
                h-10
                rounded-full
                bg-black/60
                text-white
                flex
                items-center
                justify-center
                text-xl
                hover:bg-black/90
                transition
              "
              title="Close video"
            >
              ×
            </button>

            {/* Video */}

            <video
              src={selectedVideo}
              controls
              autoPlay
              playsInline
              className="w-full h-auto"
            />
            
          </div>
        </div>
      )}

    </section>
  );
}

export default Projects;