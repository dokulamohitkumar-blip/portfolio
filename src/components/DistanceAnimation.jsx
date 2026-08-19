import { motion } from "framer-motion";
import {
  FaRuler,
  FaMicrochip,
  FaWifi,
  FaCloud,
  FaCube,
} from "react-icons/fa";

function DistanceAnimation() {
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

      {/* ================= GRID ================= */}

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

      {/* ================= TITLE ================= */}

      <div
        className="
          absolute
          top-4
          left-1/2
          -translate-x-1/2
          text-[9px]
          tracking-[4px]
          font-bold
          text-indigo-400
          whitespace-nowrap
        "
      >
        DISTANCE MONITORING
      </div>


      {/* =====================================================
          OBJECT
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[28px]
          top-[104px]
          w-[48px]
          h-[52px]
          rounded-xl
          bg-white
          border
          border-slate-300
          shadow-sm
          flex
          items-center
          justify-center
        "
        animate={{
          x: [0, 8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaCube
          size={25}
          className="text-slate-400"
        />
      </motion.div>

      <span
        className="
          absolute
          left-[29px]
          top-[160px]
          text-[8px]
          font-bold
          text-slate-500
        "
      >
        OBJECT
      </span>


      {/* =====================================================
          ULTRASONIC WAVES
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[76px]
          top-[116px]
          w-[32px]
          h-[28px]
          border
          border-indigo-300
          rounded-full
        "
        animate={{
          scaleX: [0.5, 1.3, 0.5],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="
          absolute
          left-[88px]
          top-[120px]
          w-[20px]
          h-[20px]
          border
          border-indigo-400
          rounded-full
        "
        animate={{
          scale: [0.6, 1.2, 0.6],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />


      {/* =====================================================
          HC-SR04
      ===================================================== */}

      <div
        className="
          absolute
          left-[108px]
          top-[98px]
          w-[78px]
          h-[68px]
          rounded-xl
          bg-white
          border
          border-indigo-300
          shadow-sm
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
      >

        <FaRuler
          size={22}
          className="text-indigo-500"
        />

        <span className="text-[10px] font-bold text-slate-700 mt-2">
          HC-SR04
        </span>

        <span className="text-[7px] text-slate-400">
          ULTRASONIC
        </span>

      </div>


      {/* =====================================================
          DISTANCE VALUE
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[92px]
          top-[58px]
          px-3
          py-1
          rounded-full
          bg-white
          border
          border-indigo-200
          text-[9px]
          font-bold
          text-indigo-600
          shadow-sm
        "
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        DISTANCE: 42 cm
      </motion.div>


      {/* =====================================================
          HC-SR04 → STM32 LINE
      ===================================================== */}

      <div
        className="
          absolute
          left-[186px]
          top-[132px]
          w-[62px]
          h-px
          bg-indigo-300
        "
      />

      <motion.div
        className="
          absolute
          left-[188px]
          top-[129px]
          w-2
          h-2
          rounded-full
          bg-indigo-500
          shadow-[0_0_10px_rgba(99,102,241,0.8)]
        "
        animate={{
          x: [0, 54],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: "linear",
        }}
      />


      {/* =====================================================
          STM32
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[248px]
          top-[94px]
          w-[82px]
          h-[76px]
          rounded-2xl
          bg-white
          border-2
          border-indigo-400
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
        animate={{
          boxShadow: [
            "0 0 8px rgba(99,102,241,0.10)",
            "0 0 24px rgba(99,102,241,0.30)",
            "0 0 8px rgba(99,102,241,0.10)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >

        <FaMicrochip
          size={25}
          className="text-indigo-500"
        />

        <span className="text-[10px] font-bold text-slate-700 mt-2">
          STM32
        </span>

        <span className="text-[7px] text-slate-400">
          F446RE
        </span>

      </motion.div>


      {/* =====================================================
          STM32 → WE-10 LINE
      ===================================================== */}

      <div
        className="
          absolute
          left-[330px]
          top-[132px]
          w-[38px]
          h-px
          bg-indigo-300
        "
      />

      <motion.div
        className="
          absolute
          left-[332px]
          top-[129px]
          w-2
          h-2
          rounded-full
          bg-indigo-500
        "
        animate={{
          x: [0, 28],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />


      {/* =====================================================
          WE-10
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[368px]
          top-[102px]
          w-[58px]
          h-[60px]
          rounded-xl
          bg-white
          border
          border-indigo-300
          shadow-sm
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
        animate={{
          y: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        <FaWifi
          size={19}
          className="text-indigo-500"
        />

        <span className="text-[9px] font-bold text-slate-700 mt-1">
          WE-10
        </span>

      </motion.div>


      {/* =====================================================
          WE-10 → CLOUD LINE
      ===================================================== */}

      <div
        className="
          absolute
          left-[426px]
          top-[132px]
          w-[28px]
          h-px
          bg-indigo-300
        "
      />

      <motion.div
        className="
          absolute
          left-[428px]
          top-[129px]
          w-2
          h-2
          rounded-full
          bg-indigo-500
        "
        animate={{
          x: [0, 18],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
          delay: 0.3,
        }}
      />


      {/* =====================================================
          CLOUD
      ===================================================== */}

      <motion.div
        className="
          absolute
          right-[12px]
          top-[101px]
          w-[58px]
          h-[62px]
          rounded-xl
          bg-white
          border
          border-indigo-200
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
        animate={{
          boxShadow: [
            "0 0 7px rgba(99,102,241,0.05)",
            "0 0 20px rgba(99,102,241,0.20)",
            "0 0 7px rgba(99,102,241,0.05)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >

        <FaCloud
          size={21}
          className="text-indigo-500"
        />

        <span className="text-[8px] font-bold text-slate-600 mt-1">
          CLOUD
        </span>

      </motion.div>


      {/* =====================================================
          STATUS
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-5
          bottom-5
          px-3
          py-1
          rounded-full
          bg-white
          border
          border-indigo-200
          text-[8px]
          font-bold
          text-indigo-500
        "
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        MQTT • LIVE
      </motion.div>

    </div>
  );
}

export default DistanceAnimation;