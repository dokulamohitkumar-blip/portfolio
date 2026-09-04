import { motion } from "framer-motion";
import {
  FaIndustry,
  FaCar,
  FaRuler,
  FaCloud,
  FaThermometerHalf,
  FaTint,
  FaWifi,
} from "react-icons/fa";

function MobileProjectAnimation({ project }) {
  const getIcon = () => {
    if (project.title === "Industry Parameters Monitoring 4.0") {
      return <FaIndustry />;
    }

    if (project.title === "IoT-Based Smart Parking System") {
      return <FaCar />;
    }

    if (project.title === "Distance Monitoring System") {
      return <FaRuler />;
    }

    return <FaCloud />;
  };

  const getData = () => {
    if (project.title === "Industry Parameters Monitoring 4.0") {
      return [
        { icon: <FaThermometerHalf />, label: "TEMP", value: "32°C" },
        { icon: <FaWifi />, label: "GAS", value: "SAFE" },
        { icon: <FaRuler />, label: "VIBRATION", value: "LOW" },
      ];
    }

    if (project.title === "IoT-Based Smart Parking System") {
      return [
        { icon: <FaCar />, label: "SLOT 01", value: "FREE" },
        { icon: <FaCar />, label: "SLOT 02", value: "BUSY" },
        { icon: <FaWifi />, label: "CLOUD", value: "ONLINE" },
      ];
    }

    if (project.title === "Distance Monitoring System") {
      return [
        { icon: <FaRuler />, label: "DISTANCE", value: "42 cm" },
        { icon: <FaWifi />, label: "MQTT", value: "ONLINE" },
        { icon: <FaRuler />, label: "SENSOR", value: "ACTIVE" },
      ];
    }

    return [
      { icon: <FaThermometerHalf />, label: "TEMP", value: "28°C" },
      { icon: <FaTint />, label: "HUMIDITY", value: "64%" },
      { icon: <FaCloud />, label: "PRESSURE", value: "1012" },
    ];
  };

  const data = getData();

  return (
    <div className="w-full h-[190px] rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden relative p-4">

      {/* Background glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -top-10 -left-10"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -bottom-10 -right-10"
      />

      {/* Header */}

      <div className="relative z-10 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-400"
          >
            {getIcon()}
          </motion.div>

          <div>
            <p className="text-white text-sm font-bold">
              {project.title}
            </p>

            <div className="flex items-center gap-2 mt-1">

              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />

              <span className="text-[10px] text-slate-400">
                SYSTEM ACTIVE
              </span>

            </div>
          </div>

        </div>

        <FaWifi className="text-slate-500 text-sm" />

      </div>


      {/* Sensor cards */}

      <div className="relative z-10 grid grid-cols-3 gap-2 mt-5">

        {data.map((item, index) => (

          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            className="bg-white/5 border border-white/10 rounded-xl p-3"
          >

            <div className="text-cyan-400 text-sm mb-2">
              {item.icon}
            </div>

            <p className="text-[8px] text-slate-500 font-bold">
              {item.label}
            </p>

            <p className="text-xs text-white font-bold mt-1">
              {item.value}
            </p>

          </motion.div>

        ))}

      </div>


      {/* Animated data line */}

      <div className="relative z-10 mt-4 h-[2px] bg-slate-700 rounded-full overflow-hidden">

        <motion.div
          animate={{
            x: ["-100%", "300%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-1/3 h-full bg-cyan-400"
        />

      </div>

    </div>
  );
}

export default MobileProjectAnimation;