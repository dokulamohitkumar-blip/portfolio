import { motion } from "framer-motion";
import {
  FaBroadcastTower,
  FaMicrochip,
  FaCertificate,
} from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* HEADER */}

        <div className="mb-14">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-8 h-[2px] bg-cyan-500"></div>

            <span className="text-sm font-bold tracking-[4px] text-slate-500 uppercase">
              Experience
            </span>

          </div>

          <h2 className="text-5xl font-black text-slate-900">
            Experience.
          </h2>

          <p className="mt-4 text-slate-500 text-lg">
            Practical exposure through internships and embedded systems training.
          </p>

        </div>


        {/* CARDS */}

        <div className="grid md:grid-cols-2 gap-8">


          {/* ================= BSNL ================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="
              group
              md:col-span-2
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-5 md:p-6
              shadow-sm
              hover:shadow-xl
              hover:border-cyan-300
              transition-all
              duration-300
            "
          >

            <div className="flex items-start justify-between">

              <div className="
                w-14
                h-14
                rounded-xl
                bg-cyan-50
                border
                border-cyan-100
                flex
                items-center
                justify-center
                text-cyan-500
                text-xl
                group-hover:bg-cyan-500
                group-hover:text-white
                transition-all
                duration-300
              ">
                <FaBroadcastTower />
              </div>

              <span className="
                px-3
                py-1.5
                rounded-full
                bg-slate-50
                border
                border-slate-200
                text-xs
                font-semibold
                text-slate-500
              ">
                2 Weeks
              </span>

            </div>


            <p className="mt-5 text-sm font-semibold text-cyan-500 uppercase tracking-wider">
              Internship
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              BSNL
            </h3>

            <h4 className="text-base font-semibold text-slate-600 mt-1">
              Telecom Internship
            </h4>

            <p className="mt-4 text-slate-500 leading-7">
              Completed a two-week internship in the telecommunications
              domain, gaining practical exposure to telecom engineering
              and understanding the working environment of a
              telecommunication organization.
            </p>


<div className="
  mt-4
  pt-4
              border-t
              border-slate-100
            ">

              <span className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-slate-50
                border
                border-slate-200
                text-sm
                text-slate-600
              ">
                Telecommunications
              </span>

            </div>

          </motion.div>


        </div>
                {/* ================= CERTIFICATES ================= */}

        <div className="mt-20">

          {/* Certificate Heading */}

          <div className="mb-10">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-8 h-[2px] bg-cyan-500"></div>

              <span className="text-sm font-bold tracking-[4px] text-slate-500 uppercase">
                Certificates
              </span>

            </div>

            <h2 className="text-4xl font-black text-slate-900">
              Certifications.
            </h2>

            <p className="mt-4 text-slate-500 text-lg">
              Certifications that strengthen my technical foundation.
            </p>

          </div>


          {/* Certificate Cards */}

          <div className="grid md:grid-cols-2 gap-8">

            {/* NPTEL - Verilog */}
            <a
  href="https://nptel.ac.in/noc/E_Certificate/NPTEL25CS25S66030127704301111"
  target="_blank"
  rel="noreferrer"
  className="block"
>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="
                group
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-7
                shadow-sm
                hover:shadow-xl
                hover:border-cyan-300
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-cyan-50
                    border
                    border-cyan-100
                    flex
                    items-center
                    justify-center
                    text-cyan-500
                    text-xl
                    group-hover:bg-cyan-500
                    group-hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <FaCertificate />
                </div>

                <div>

                  <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">
                    NPTEL
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Design with Verilog
                  </h3>

                </div>

              </div>

              <p className="mt-5 text-slate-500 leading-7">
                NPTEL certification demonstrating knowledge of
                digital design and Verilog-based hardware description.
              </p>

            </motion.div>
            </a>


            {/* NPTEL - Microsensors */}
                        <a
  href="https://nptel.ac.in/noc/E_Certificate/NPTEL25CS25S66030127704301111"
  target="_blank"
  rel="noreferrer"
  className="block"
>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="
                group
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-7
                shadow-sm
                hover:shadow-xl
                hover:border-cyan-300
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-cyan-50
                    border
                    border-cyan-100
                    flex
                    items-center
                    justify-center
                    text-cyan-500
                    text-xl
                    group-hover:bg-cyan-500
                    group-hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <FaCertificate />
                </div>

                <div>

                  <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">
                    NPTEL
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Microsensors and Nanosensors
                  </h3>

                </div>

              </div>

              <p className="mt-5 text-slate-500 leading-7">
                NPTEL certification covering microsensors,
                nanosensors and their applications in electronics.
              </p>

            </motion.div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;