import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-500 font-bold tracking-[4px] uppercase text-sm">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
            Building with hardware & code.
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-600 text-lg leading-8"
          >
            <p>
              I am an Electronics and Communication Engineering graduate
              interested in Embedded Systems, IoT, Linux and real-time
              embedded applications.
            </p>

            <p className="mt-6">
              My work focuses on understanding how hardware and software
              communicate with each other — from microcontrollers and
              peripherals to operating systems and connected devices.
            </p>

            <p className="mt-6">
              I enjoy building practical projects using STM32,
              Embedded C, Zephyr RTOS, Linux and IoT technologies.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-3xl font-black text-slate-900">
                STM32
              </h3>
              <p className="mt-2 text-slate-500">
                Microcontrollers
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-3xl font-black text-slate-900">
                Linux
              </h3>
              <p className="mt-2 text-slate-500">
                Embedded Linux
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-3xl font-black text-slate-900">
                RTOS
              </h3>
              <p className="mt-2 text-slate-500">
                Zephyr
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-3xl font-black text-slate-900">
                IoT
              </h3>
              <p className="mt-2 text-slate-500">
                Connected Systems
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;