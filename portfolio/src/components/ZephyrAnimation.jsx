import { motion } from "framer-motion";
import {
  FaThermometerHalf,
  FaTint,
  FaMicrochip,
  FaWifi,
  FaCloud,
  FaCode,
} from "react-icons/fa";

function ZephyrAnimation() {
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
          text-emerald-500
          whitespace-nowrap
        "
      >
        ZEPHYR ENVIRONMENTAL MONITORING
      </div>

      {/* ================= BME280 ================= */}

      <motion.div
        className="
          absolute
          left-5
          top-[92px]
          w-[92px]
          h-[82px]
          rounded-2xl
          bg-white
          border
          border-emerald-300
          shadow-sm
          flex
          flex-col
          items-center
          justify-center
        "
        animate={{
          boxShadow: [
            "0 0 7px rgba(16,185,129,0.05)",
            "0 0 20px rgba(16,185,129,0.22)",
            "0 0 7px rgba(16,185,129,0.05)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >
        <div className="flex gap-2">

          <FaThermometerHalf
            size={17}
            className="text-emerald-500"
          />

          <FaTint
            size={17}
            className="text-emerald-500"
          />

        </div>

        <span className="text-[10px] font-bold text-slate-700 mt-2">
          BME280
        </span>

        <span className="text-[7px] text-slate-400">
          TEMP • HUM • PRESS
        </span>

      </motion.div>

      {/* ================= I2C LINE ================= */}

      <div
        className="
          absolute
          left-[97px]
          top-[133px]
          w-[48px]
          h-px
          bg-emerald-300
        "
      />

      <motion.div
        className="
          absolute
          left-[100px]
          top-[130px]
          w-2
          h-2
          rounded-full
          bg-emerald-500
          shadow-[0_0_10px_rgba(16,185,129,0.8)]
        "
        animate={{
          x: [0, 35],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <span
        className="
          absolute
          left-[108px]
          top-[143px]
          text-[7px]
          font-bold
          text-emerald-500
        "
      >
        I²C
      </span>

      {/* ================= STM32 NUCLEO ================= */}

      <motion.div
        className="
          absolute
          left-[145px]
          top-[82px]
          w-[105px]
          h-[100px]
          rounded-2xl
          bg-white
          border-2
          border-emerald-400
          flex
          flex-col
          items-center
          justify-center
          z-10
        "
        animate={{
          boxShadow: [
            "0 0 8px rgba(16,185,129,0.10)",
            "0 0 26px rgba(16,185,129,0.30)",
            "0 0 8px rgba(16,185,129,0.10)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >

        <FaMicrochip
          size={25}
          className="text-emerald-500"
        />

        <span className="text-[10px] font-bold text-slate-700 mt-2">
          STM32 NUCLEO
        </span>

        <span className="text-[8px] text-slate-400">
          F446RE
        </span>

        {/* Zephyr badge */}

        <div
          className="
            mt-2
            flex
            items-center
            gap-1
            px-2
            py-0.5
            rounded-full
            bg-emerald-50
            border
            border-emerald-200
          "
        >
          <FaCode
            size={7}
            className="text-emerald-500"
          />

          <span className="text-[7px] font-bold text-emerald-600">
            ZEPHYR RTOS
          </span>
        </div>

      </motion.div>

      {/* ================= DEVICE DRIVER FLOW ================= */}

      <motion.div
        className="
          absolute
          left-[170px]
          top-[62px]
          text-[7px]
          font-bold
          text-emerald-500
        "
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        DEVICE DRIVER
      </motion.div>

      {/* ================= STM32 → WE10 ================= */}

      <div
        className="
          absolute
          left-[250px]
          top-[132px]
          w-[65px]
          h-px
          bg-emerald-300
        "
      />

      <motion.div
        className="
          absolute
          left-[253px]
          top-[129px]
          w-2
          h-2
          rounded-full
          bg-emerald-500
          shadow-[0_0_10px_rgba(16,185,129,0.8)]
        "
        animate={{
          x: [0, 55],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <span
        className="
          absolute
          left-[272px]
          top-[142px]
          text-[7px]
          font-bold
          text-emerald-500
        "
      >
        UART
      </span>

      {/* ================= WE10 ================= */}

      <motion.div
        className="
          absolute
          left-[315px]
          top-[100px]
          w-[65px]
          h-[62px]
          rounded-xl
          bg-white
          border
          border-emerald-300
          shadow-sm
          flex
          flex-col
          items-center
          justify-center
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
          size={20}
          className="text-emerald-500"
        />

        <span className="text-[9px] font-bold text-slate-700 mt-1">
          WE-10
        </span>

      </motion.div>

      {/* ================= WE10 → CLOUD ================= */}

      <div
        className="
          absolute
          left-[380px]
          top-[132px]
          w-[55px]
          h-px
          bg-emerald-300
        "
      />

      <motion.div
        className="
          absolute
          left-[382px]
          top-[129px]
          w-2
          h-2
          rounded-full
          bg-emerald-500
        "
        animate={{
          x: [0, 45],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          delay: 0.3,
        }}
      />

      {/* ================= CLOUD ================= */}

      <motion.div
        className="
          absolute
          right-4
          top-[98px]
          w-[70px]
          h-[66px]
          rounded-xl
          bg-white
          border
          border-emerald-200
          flex
          flex-col
          items-center
          justify-center
        "
        animate={{
          boxShadow: [
            "0 0 7px rgba(16,185,129,0.05)",
            "0 0 20px rgba(16,185,129,0.20)",
            "0 0 7px rgba(16,185,129,0.05)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >

        <FaCloud
          size={22}
          className="text-emerald-500"
        />

        <span className="text-[8px] font-bold text-slate-600 mt-1">
          RIGHTTECH
        </span>

        <span className="text-[7px] text-slate-400">
          CLOUD
        </span>

      </motion.div>

      {/* ================= LIVE VALUES ================= */}

      <motion.div
        className="
          absolute
          left-5
          bottom-5
          flex
          gap-2
        "
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >

        <span
          className="
            px-2
            py-1
            rounded-full
            bg-white
            border
            border-emerald-200
            text-[7px]
            font-bold
            text-emerald-600
          "
        >
          26°C
        </span>

        <span
          className="
            px-2
            py-1
            rounded-full
            bg-white
            border
            border-emerald-200
            text-[7px]
            font-bold
            text-emerald-600
          "
        >
          62% RH
        </span>

        <span
          className="
            px-2
            py-1
            rounded-full
            bg-white
            border
            border-emerald-200
            text-[7px]
            font-bold
            text-emerald-600
          "
        >
          1012 hPa
        </span>

      </motion.div>

    </div>
  );
}

export default ZephyrAnimation;