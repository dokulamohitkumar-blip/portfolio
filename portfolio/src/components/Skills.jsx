import {
  FaCode,
  FaMicrochip,
  FaWifi,
  FaPython,
  FaCogs,
  FaMicrochip as FaChip,
  FaTools,
  FaLinux,
  FaCloud,
  FaNetworkWired,
  FaClock,
  FaDesktop,
  FaCube,
  FaProjectDiagram,
} from "react-icons/fa";

function SkillCard({ icon, name }) {
  return (
    <div
      className="
        flex items-center gap-4
        h-14
        px-4
        rounded-xl
        bg-white
        border border-slate-200
        shadow-sm
        hover:shadow-md
        hover:-translate-y-0.5
        transition-all duration-300
      "
    >
      <div className="text-slate-700 text-lg">
        {icon}
      </div>

      <span className="text-slate-800 font-medium">
        {name}
      </span>
    </div>
  );
}

function SkillGroup({ title, children }) {
  return (
    <div>
      <h3
        className="
          text-sm
          font-bold
          tracking-wide
          text-slate-800
          uppercase
          mb-5
        "
      >
        {title}
      </h3>

      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-slate-50
        px-6
        py-24
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION LABEL */}

        <div className="flex items-center gap-3 mb-5">

          <div className="w-6 h-[2px] bg-slate-500" />

          <span
            className="
              text-sm
              font-bold
              tracking-[3px]
              text-slate-600
            "
          >
            SKILLS
          </span>

        </div>

        {/* TITLE */}

        <h2
          className="
            text-4xl
            md:text-5xl
            font-black
            text-slate-900
          "
        >
          The toolkit.
        </h2>

        {/* SKILL GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">

          {/* COLUMN 1 */}

          <div className="space-y-12">

            <SkillGroup title="Languages">

              <SkillCard
                icon={<FaCode />}
                name="C"
              />

              <SkillCard
                icon={<FaMicrochip />}
                name="Embedded C"
              />

              <SkillCard
                icon={<FaPython />}
                name="Python"
              />

            </SkillGroup>


            <SkillGroup title="Tools & IDEs">

              <SkillCard
                icon={<FaCube />}
                name="STM32CubeIDE"
              />

              <SkillCard
                icon={<FaTools />}
                name="Arduino IDE"
              />

              <SkillCard
                icon={<FaProjectDiagram />}
                name="KiCad"
              />

            </SkillGroup>

          </div>


          {/* COLUMN 2 */}

          <div className="space-y-12">

            <SkillGroup title="Microcontrollers">

              <SkillCard
                icon={<FaChip />}
                name="STM32"
              />

              <SkillCard
                icon={<FaMicrochip />}
                name="Arduino"
              />

              <SkillCard
                icon={<FaWifi />}
                name="ESP32"
              />

            </SkillGroup>


            <SkillGroup title="Systems">

              <SkillCard
                icon={<FaDesktop />}
                name="Linux (Ubuntu)"
              />

              <SkillCard
                icon={<FaLinux />}
                name="Embedded Linux"
              />

              <SkillCard
                icon={<FaCogs />}
                name="Zephyr RTOS"
              />

            </SkillGroup>

          </div>


          {/* COLUMN 3 */}

          <div className="space-y-12">

            <SkillGroup title="Embedded Concepts">

              <SkillCard
                icon={<FaCogs />}
                name="GPIO,UART"
              />


              <SkillCard
                icon={<FaNetworkWired />}
                name="I2C,SPI"
              />

              <SkillCard
                icon={<FaClock />}
                name="Timers,ADC,PWM"
              />

            </SkillGroup>


            <SkillGroup title="Cloud & Protocols">

              <SkillCard
                icon={<FaCloud />}
                name="RightTech IoT Cloud"
              />

              <SkillCard
                icon={<FaWifi />}
                name="MQTT"
              />

            </SkillGroup>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;