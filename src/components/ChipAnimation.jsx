import { motion } from "framer-motion";

const traces = [
  "M40 280 H200",
  "M360 280 H520",
  "M280 40 V200",
  "M280 360 V520",

  "M110 110 H200",
  "M110 110 V200",

  "M450 110 H360",
  "M450 110 V200",

  "M110 450 H200",
  "M110 450 V360",

  "M450 450 H360",
  "M450 450 V360",
];

const nodes = [
  [40, 280],
  [520, 280],
  [280, 40],
  [280, 520],

  [110, 110],
  [450, 110],
  [110, 450],
  [450, 450],
];

function ChipAnimation() {
  return (
    <div className="hidden md:flex relative w-full h-full items-center justify-center overflow-hidden">

      {/* =====================================================
          SOFT CYAN GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[380px]
          h-[380px]
          rounded-full
          bg-cyan-200
          blur-[100px]
        "
      />

      {/* =====================================================
          OUTER PCB RING
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[440px]
          h-[440px]
          rounded-full
          border
          border-cyan-200/70
        "
      />

      {/* =====================================================
          INNER PCB RING
      ===================================================== */}

      <div
        className="
          absolute
          w-[310px]
          h-[310px]
          rounded-full
          border
          border-cyan-100
        "
      />

      {/* =====================================================
          PCB TRACES
      ===================================================== */}

      <svg
        viewBox="0 0 560 560"
        className="
          absolute
          w-[520px]
          h-[520px]
          max-w-full
        "
      >

        {traces.map((path, index) => (
          <path
            key={`trace-${index}`}
            d={path}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            opacity="0.22"
          />
        ))}

        {/* Extra PCB traces */}

        <path
          d="M110 110 H65"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          opacity="0.22"
        />

        <path
          d="M450 110 H495"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          opacity="0.22"
        />

        <path
          d="M110 450 H65"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          opacity="0.22"
        />

        <path
          d="M450 450 H495"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          opacity="0.22"
        />

        {/* =================================================
            MAIN CURRENT FLOW
        ================================================= */}

        {traces.map((path, index) => (
          <motion.circle
            key={`current-${index}`}
            r="4"
            fill="#06b6d4"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: index * 0.18,
              ease: "linear",
            }}
            style={{
              offsetPath: `path("${path}")`,
            }}
          />
        ))}

        {/* Secondary current */}

        {traces.map((path, index) => (
          <motion.circle
            key={`secondary-${index}`}
            r="2.5"
            fill="#67e8f9"
            animate={{
              offsetDistance: ["0%", "100%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.3 + 1,
              ease: "linear",
            }}
            style={{
              offsetPath: `path("${path}")`,
            }}
          />
        ))}

      </svg>

      {/* =====================================================
          PCB NODES
      ===================================================== */}

      {nodes.map(([x, y], index) => (
        <motion.div
          key={`node-${index}`}
          className="
            absolute
            w-3
            h-3
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_rgba(34,211,238,0.7)]
          "
          style={{
            left: `calc(50% + ${(x - 280) * 0.93}px)`,
            top: `calc(50% + ${(y - 280) * 0.93}px)`,
          }}
          animate={{
            scale: [0.8, 1.25, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}

      {/* =====================================================
          REALISTIC MICROCONTROLLER
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          z-20
          w-[190px]
          h-[190px]
          rounded-[22px]
          bg-slate-900
          border-2
          border-cyan-400
          shadow-[0_20px_70px_rgba(34,211,238,0.32)]
        "
      >

        {/* =================================================
            CHIP OUTER METAL EDGE
        ================================================= */}

        <div
          className="
            absolute
            inset-[6px]
            rounded-[17px]
            border
            border-slate-600
          "
        />

        {/* =================================================
            CHIP TOP HIGHLIGHT
        ================================================= */}

        <div
          className="
            absolute
            top-[8px]
            left-[22px]
            right-[22px]
            h-[2px]
            rounded-full
            bg-cyan-400/50
          "
        />

        {/* =================================================
            SILICON CENTER
        ================================================= */}

        <div
          className="
            absolute
            inset-[22px]
            rounded-[15px]
            bg-slate-800
            border
            border-slate-600
            shadow-inner
          "
        >

          {/* Silicon glow */}

          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute
              inset-5
              rounded-xl
              bg-cyan-400/10
              blur-xl
            "
          />

          {/* =================================================
              CENTER MCU DIE
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[78px]
              h-[78px]
              rounded-lg
              bg-slate-950
              border
              border-cyan-400/50
              shadow-[0_0_25px_rgba(34,211,238,0.18)]
              flex
              flex-col
              items-center
              justify-center
            "
          >

            {/* Die center */}

            <motion.div
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="
                w-3
                h-3
                rounded-full
                bg-cyan-400
                shadow-[0_0_18px_rgba(34,211,238,0.9)]
              "
            />

            <span
              className="
                mt-3
                text-[8px]
                font-black
                tracking-[1px]
                text-white
              "
            >
              STM32
            </span>

            <span
              className="
                text-[6px]
                font-semibold
                text-cyan-300
                tracking-[1px]
              "
            >
              ARM MCU
            </span>

          </div>

          {/* =================================================
              INTERNAL CIRCUIT LINES
          ================================================= */}

          <div className="absolute left-3 top-6 w-8 h-px bg-cyan-400/30" />
          <div className="absolute left-3 top-10 w-5 h-px bg-cyan-400/20" />

          <div className="absolute right-3 top-6 w-8 h-px bg-cyan-400/30" />
          <div className="absolute right-3 top-10 w-5 h-px bg-cyan-400/20" />

          <div className="absolute left-3 bottom-6 w-8 h-px bg-cyan-400/30" />
          <div className="absolute left-3 bottom-10 w-5 h-px bg-cyan-400/20" />

          <div className="absolute right-3 bottom-6 w-8 h-px bg-cyan-400/30" />
          <div className="absolute right-3 bottom-10 w-5 h-px bg-cyan-400/20" />

        </div>

        {/* =================================================
            STATUS LED
        ================================================= */}

        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            absolute
            top-5
            right-5
            w-2
            h-2
            rounded-full
            bg-emerald-400
            shadow-[0_0_12px_rgba(52,211,153,0.8)]
          "
        />

        {/* =================================================
            LEFT PINS
        ================================================= */}

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`left-pin-${index}`}
            className="
              absolute
              -left-[8px]
              w-[8px]
              h-[3px]
              rounded-l-sm
              bg-slate-400
            "
            style={{
              top: `${20 + index * 16}px`,
            }}
          />
        ))}

        {/* =================================================
            RIGHT PINS
        ================================================= */}

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`right-pin-${index}`}
            className="
              absolute
              -right-[8px]
              w-[8px]
              h-[3px]
              rounded-r-sm
              bg-slate-400
            "
            style={{
              top: `${20 + index * 16}px`,
            }}
          />
        ))}

        {/* =================================================
            TOP PINS
        ================================================= */}

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`top-pin-${index}`}
            className="
              absolute
              -top-[8px]
              w-[3px]
              h-[8px]
              rounded-t-sm
              bg-slate-400
            "
            style={{
              left: `${20 + index * 16}px`,
            }}
          />
        ))}

        {/* =================================================
            BOTTOM PINS
        ================================================= */}

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`bottom-pin-${index}`}
            className="
              absolute
              -bottom-[8px]
              w-[3px]
              h-[8px]
              rounded-b-sm
              bg-slate-400
            "
            style={{
              left: `${20 + index * 16}px`,
            }}
          />
        ))}

      </motion.div>

      {/* =====================================================
          FLOATING CURRENT PARTICLES
      ===================================================== */}

      <motion.div
        animate={{
          x: [-180, 180],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-2
          h-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.9)]
        "
      />

      <motion.div
        animate={{
          y: [-180, 180],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        className="
          absolute
          w-2
          h-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.9)]
        "
      />

    </div>
  );
}

export default ChipAnimation;