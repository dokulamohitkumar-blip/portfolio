import { motion } from "framer-motion";
import {
  FaThermometerHalf,
  FaTint,
  FaWaveSquare,
  FaTachometerAlt,
  FaFire,
  FaMicrochip,
  FaWifi,
  FaDesktop,
} from "react-icons/fa";

const parameters = [
  {
    name: "Temperature",
    icon: FaThermometerHalf,
  },
  {
    name: "Gas",
    icon: FaTint,
  },
  {
    name: "Vibration",
    icon: FaWaveSquare,
  },
  {
    name: "Pressure",
    icon: FaTachometerAlt,
  },
  {
    name: "Flame",
    icon: FaFire,
  },
];

function DataPulse({ top, delay = 0 }) {
  return (
    <motion.div
      className="
        absolute
        w-2
        h-2
        rounded-full
        bg-cyan-400
        shadow-[0_0_10px_rgba(6,182,212,0.8)]
        z-20
      "
      style={{
        left: "185px",
        top: `${top}px`,
      }}
      animate={{
        x: [0, 55],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.7,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    />
  );
}

function ProjectAnimation() {
  return (
    <div
      className="
        relative
        w-full
        h-[270px]
        rounded-xl
        overflow-hidden
        border
        border-slate-200
        bg-slate-50
      "
    >

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(#dbe5ee 1px, transparent 1px),
            linear-gradient(90deg, #dbe5ee 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* =====================================================
          TITLE
      ===================================================== */}

      <div
        className="
          absolute
          top-3
          left-1/2
          -translate-x-1/2
          text-[9px]
          tracking-[5px]
          font-bold
          text-cyan-400
          whitespace-nowrap
        "
      >
        INDUSTRIAL DATA FLOW
      </div>

      {/* =====================================================
          LEFT PARAMETERS
      ===================================================== */}

      <div
        className="
          absolute
          left-4
          top-[38px]
          flex
          flex-col
          gap-2
          z-10
        "
      >
        {parameters.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.35,
              }}
              className="
                w-[125px]
                h-[32px]
                px-3
                rounded-lg
                bg-white
                border
                border-cyan-200
                shadow-sm
                flex
                items-center
                gap-2
              "
            >
              <Icon
                size={13}
                className="text-cyan-500 shrink-0"
              />

              <span className="text-[11px] font-semibold text-slate-600">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          PARAMETER CONNECTIONS
          ALL 5 CONNECT TO SAME VERTICAL BUS
      ===================================================== */}

      {/* Horizontal lines from parameters to bus */}

      <div className="absolute left-[141px] top-[54px] w-[90px] h-px bg-cyan-400" />
      <div className="absolute left-[141px] top-[94px] w-[90px] h-px bg-cyan-400" />
      <div className="absolute left-[141px] top-[134px] w-[90px] h-px bg-cyan-400" />
      <div className="absolute left-[141px] top-[174px] w-[90px] h-px bg-cyan-400" />
      <div className="absolute left-[141px] top-[214px] w-[90px] h-px bg-cyan-400" />

      {/* Vertical collection bus */}

      <div
        className="
          absolute
          left-[231px]
          top-[54px]
          w-px
          h-[160px]
          bg-cyan-400
        "
      />

      {/* Bus → STM32 */}

      <div
        className="
          absolute
          left-[231px]
          top-[134px]
          w-[20px]
          h-px
          bg-cyan-400
        "
      />

      {/* =====================================================
          DATA PULSES
      ===================================================== */}

      <DataPulse top={50} delay={0} />
      <DataPulse top={90} delay={0.35} />
      <DataPulse top={130} delay={0.7} />
      <DataPulse top={170} delay={1.05} />
      <DataPulse top={210} delay={1.4} />

      {/* =====================================================
          STM32
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[251px]
          top-[91px]
          w-[86px]
          h-[86px]
          rounded-2xl
          bg-white
          border-2
          border-cyan-400
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
        animate={{
          boxShadow: [
            "0 0 10px rgba(6,182,212,0.10)",
            "0 0 28px rgba(6,182,212,0.30)",
            "0 0 10px rgba(6,182,212,0.10)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >
        <FaMicrochip
          size={28}
          className="text-cyan-500"
        />

        <span className="text-[11px] font-bold text-slate-700 mt-1">
          STM32
        </span>

        <span className="text-[8px] text-slate-400">
          F446RE
        </span>
      </motion.div>

      {/* =====================================================
          STM32 → WE-10
      ===================================================== */}

      <div
        className="
          absolute
          left-[337px]
          top-[134px]
          w-[35px]
          h-px
          bg-cyan-400
        "
      />

      <motion.div
        className="
          absolute
          left-[340px]
          top-[130px]
          w-2
          h-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_10px_rgba(6,182,212,0.8)]
          z-20
        "
        animate={{
          x: [0, 25],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =====================================================
          WE-10
          RIGHT OF STM32
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[372px]
          top-[104px]
          w-[68px]
          h-[60px]
          rounded-xl
          bg-white
          border
          border-cyan-300
          shadow-sm
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
        animate={{
          y: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaWifi
          size={20}
          className="text-cyan-500"
        />

        <span className="text-[10px] font-bold text-slate-700 mt-1">
          WE-10
        </span>
      </motion.div>

{/* =====================================================
    WE-10 → WEB DASHBOARD
    VERTICAL CONNECTION + MOVING DATA DOT
===================================================== */}

{/* Vertical connection line */}
<div
  className="
    absolute
    left-[406px]
    top-[72px]
    w-px
    h-[32px]
    bg-cyan-400
    z-[5]
  "
/>

{/* Animated data dot travelling UP */}
<motion.div
  className="
    absolute
    left-[403px]
    top-[98px]
    w-2
    h-2
    rounded-full
    bg-cyan-400
    shadow-[0_0_10px_rgba(6,182,212,0.9)]
    z-20
  "
  animate={{
    y: [0, -24],
    opacity: [0, 1, 1, 0],
  }}
  transition={{
    duration: 1.4,
    repeat: Infinity,
    ease: "linear",
  }}
/>

      {/* =====================================================
          WEB DASHBOARD
          ABOVE WE-10
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[372px]
          top-[24px]
          w-[68px]
          h-[48px]
          rounded-xl
          bg-white
          border
          border-cyan-300
          shadow-sm
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
        animate={{
          boxShadow: [
            "0 0 8px rgba(6,182,212,0.05)",
            "0 0 18px rgba(6,182,212,0.18)",
            "0 0 8px rgba(6,182,212,0.05)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <FaDesktop
          size={18}
          className="text-cyan-500"
        />

        <span className="text-[8px] font-bold text-slate-600 mt-1 text-center leading-tight">
          WEB
          <br />
          DASHBOARD
        </span>
      </motion.div>

      {/* =====================================================
          DECORATIVE DATA DOTS
      ===================================================== */}

      <motion.div
        className="
          absolute
          top-4
          right-5
          w-2
          h-2
          rounded-full
          bg-cyan-400
        "
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="
          absolute
          bottom-5
          left-1/2
          w-2
          h-2
          rounded-full
          bg-cyan-400
        "
        animate={{
          y: [-4, 4, -4],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

    </div>
  );
}

export default ProjectAnimation;