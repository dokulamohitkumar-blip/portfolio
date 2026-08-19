import { motion } from "framer-motion";
import {
  FaCarSide,
  FaMicrochip,
  FaIdCard,
  FaParking,
} from "react-icons/fa";

function ParkingAnimation() {
  return (
    <div
      className="
        relative
        w-full
        h-[300px]
        rounded-xl
        overflow-hidden
        border
        border-slate-200
        bg-slate-50
      "
    >

      {/* ================= GRID ================= */}

      <div
        className="absolute inset-0 opacity-70"
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
          tracking-[6px]
          font-bold
          text-violet-400
          whitespace-nowrap
        "
      >
        SMART PARKING SYSTEM
      </div>

      {/* ================= ROAD ================= */}

      <div
        className="
          absolute
          left-0
          right-0
          top-[150px]
          h-[82px]
          bg-slate-200
          border-y
          border-slate-300
        "
      />

      {/* Road center line */}

      <div
        className="
          absolute
          left-0
          right-0
          top-[190px]
          border-t-2
          border-dashed
          border-slate-400
        "
      />

      {/* ================= PARKING ================= */}

      <div
        className="
          absolute
          right-3
          top-[45px]
          w-[105px]
          h-[58px]
          rounded-xl
          border
          border-dashed
          border-violet-300
          bg-white/80
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <FaParking
          size={20}
          className="text-violet-400"
        />

        <span className="text-[8px] font-bold text-slate-500 mt-1">
          PARKING
        </span>
      </div>

      {/* ======================================================
          GATE
      ====================================================== */}

      <div
        className="
          absolute
          right-[95px]
          top-[118px]
          w-[70px]
          h-[55px]
          z-30
        "
      >

        {/* Gate label */}

        <motion.div
          className="
            absolute
            -top-7
            left-1/2
            -translate-x-1/2
            text-[8px]
            font-bold
            tracking-wider
            whitespace-nowrap
          "
          animate={{
            color: [
              "#ef4444",
              "#ef4444",
              "#22c55e",
              "#22c55e",
              "#ef4444",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            times: [0, 0.55, 0.65, 0.82, 1],
          }}
        >
          GATE
        </motion.div>

        {/* Gate pivot */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-3
            h-3
            rounded-full
            bg-slate-600
            z-30
          "
        />

        {/* ==================================================
            CLOSED GATE = RED DOT
        ================================================== */}

        <motion.div
          className="
            absolute
            bottom-[4px]
            left-1/2
            -translate-x-1/2
            w-3
            h-3
            rounded-full
            bg-red-500
            shadow-[0_0_12px_rgba(239,68,68,0.9)]
            z-20
          "
          animate={{
            opacity: [1, 1, 1, 0, 0],
            scale: [1, 1, 1, 0.5, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            times: [0, 0.35, 0.55, 0.65, 1],
          }}
        />

        {/* ==================================================
            OPEN GATE = STRAIGHT GREEN LINE
        ================================================== */}

        <motion.div
          className="
            absolute
            bottom-[8px]
            left-1/2
            w-[4px]
            h-[58px]
            -translate-x-1/2
            rounded-full
            bg-green-400
            shadow-[0_0_12px_rgba(34,197,94,0.8)]
            origin-bottom
          "
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scaleY: [0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            times: [0, 0.55, 0.65, 0.82, 1],
          }}
        />

      </div>

      {/* ======================================================
          RFID + STM32
          UNDER / BESIDE THE GATE
      ====================================================== */}

      <div
        className="
          absolute
          right-[75px]
          top-[225px]
          flex
          items-center
          gap-3
          z-20
        "
      >

        {/* RFID */}

        <motion.div
          className="
            w-[58px]
            h-[45px]
            rounded-xl
            bg-white
            border
            border-violet-300
            shadow-sm
            flex
            flex-col
            items-center
            justify-center
          "
          animate={{
            boxShadow: [
              "0 0 5px rgba(139,92,246,0.05)",
              "0 0 18px rgba(139,92,246,0.30)",
              "0 0 5px rgba(139,92,246,0.05)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <FaIdCard
            size={16}
            className="text-violet-500"
          />

          <span className="text-[8px] font-bold text-slate-600 mt-1">
            RFID
          </span>
        </motion.div>

        {/* STM32 */}

        <div
          className="
            w-[70px]
            h-[45px]
            rounded-xl
            bg-white
            border
            border-violet-300
            shadow-sm
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <FaMicrochip
            size={17}
            className="text-violet-500"
          />

          <span className="text-[8px] font-bold text-slate-700 mt-1">
            STM32
          </span>

          <span className="text-[7px] text-slate-400">
            F446RE
          </span>
        </div>

      </div>

      {/* ================= RFID SIGNAL ================= */}

      <motion.div
        className="
          absolute
          right-[177px]
          top-[207px]
          w-2
          h-2
          rounded-full
          bg-violet-400
          shadow-[0_0_10px_rgba(139,92,246,0.9)]
          z-30
        "
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
        }}
      />

      {/* ======================================================
          CAR
          APPROACH → STOP → SCAN → MOVE
      ====================================================== */}

      <motion.div
        className="
          absolute
          left-[55px]
          top-[166px]
          z-40
        "
        animate={{
          x: [
            0,
            285,
            285,
            285,
            400,
            460,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [
            0,
            0.35,
            0.55,
            0.65,
            0.82,
            1,
          ],
          ease: "linear",
        }}
      >

        {/* Car body */}

        <div
          className="
            relative
            w-[58px]
            h-[28px]
            rounded-lg
            bg-violet-400
            shadow-[0_4px_12px_rgba(139,92,246,0.25)]
          "
        >

          {/* Roof */}

          <div
            className="
              absolute
              left-[13px]
              -top-[10px]
              w-[32px]
              h-[13px]
              rounded-t-lg
              bg-violet-400
            "
          />

          {/* Windows */}

          <div
            className="
              absolute
              left-[17px]
              -top-[7px]
              w-[11px]
              h-[7px]
              rounded-sm
              bg-slate-100
            "
          />

          <div
            className="
              absolute
              left-[31px]
              -top-[7px]
              w-[10px]
              h-[7px]
              rounded-sm
              bg-slate-100
            "
          />

          {/* Wheels */}

          <div
            className="
              absolute
              left-[8px]
              -bottom-[5px]
              w-[11px]
              h-[11px]
              rounded-full
              bg-slate-700
              border-2
              border-white
            "
          />

          <div
            className="
              absolute
              right-[8px]
              -bottom-[5px]
              w-[11px]
              h-[11px]
              rounded-full
              bg-slate-700
              border-2
              border-white
            "
          />

        </div>

      </motion.div>

      {/* ================= RFID SCANNING ================= */}

      <motion.div
        className="
          absolute
          right-[185px]
          top-[238px]
          text-[8px]
          font-bold
          text-violet-500
          whitespace-nowrap
        "
        animate={{
          opacity: [0, 0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [
            0,
            0.35,
            0.40,
            0.55,
            0.65,
            1,
          ],
        }}
      >
        RFID SCANNING...
      </motion.div>

      {/* ================= STATUS ================= */}

      <motion.div
        className="
          absolute
right-[105px]
top-3
          text-[8px]
          font-bold
          px-2
          py-1
          rounded-full
          bg-white
          border
        "
        animate={{
          color: [
            "#ef4444",
            "#ef4444",
            "#22c55e",
            "#22c55e",
            "#ef4444",
          ],
          borderColor: [
            "#fecaca",
            "#fecaca",
            "#bbf7d0",
            "#bbf7d0",
            "#fecaca",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          times: [0, 0.55, 0.65, 0.82, 1],
        }}
      >
        GATE STATUS
      </motion.div>

    </div>
  );
}

export default ParkingAnimation;