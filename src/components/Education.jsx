import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa";

const education = [
  {
    icon: FaGraduationCap,
    level: "Bachelor of Technology",
    branch: "(B.Tech – ECE)",
    institution: "Dr. Lankapalli Bullaya College of Engineering",
    score: "CGPA: 8.06",
    year: "2022 – 2026",
    location: "Visakhapatnam",
  },
  {
    icon: FaBookOpen,
    level: "Intermediate",
    branch: "(MPC)",
    institution: "Sri Chaitanya Junior College",
    score: "Percentage: 94%",
    year: "2020 – 2022",
    location: "Visakhapatnam",
  },
  {
    icon: FaSchool,
    level: "Secondary School Certificate",
    branch: "(SSC)",
    institution: "Marvel School",
    score: "Percentage: 98%",
    year: "2020",
    location: "Visakhapatnam",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-8 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-cyan-500"></div>

            <span className="text-cyan-600 font-bold tracking-[4px] text-sm">
              EDUCATION
            </span>
          </div>

          <h2 className="text-5xl font-black text-slate-900">
            My academic journey.
          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl text-lg">
            A strong foundation in Electronics and Communication
            Engineering with a focus on embedded systems and
            electronics.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid md:grid-cols-3 gap-7">

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.level}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative bg-white rounded-2xl
                border border-slate-200
                p-5 md:p-7
                shadow-sm
                hover:shadow-xl
                hover:border-cyan-300
                transition-all duration-300"
              >

                {/* Top icon */}

                <div
                  className="w-14 h-14 rounded-xl
                  bg-cyan-50
                  border border-cyan-100
                  flex items-center justify-center
                  text-cyan-500
                  text-2xl
                  group-hover:bg-cyan-500
                  group-hover:text-white
                  transition-all duration-300"
                >
                  <Icon />
                </div>

                {/* Year */}

                <div className="mt-6">
                  <span
                    className="inline-block
                    px-3 py-1
                    rounded-full
                    bg-slate-100
                    text-slate-600
                    text-sm
                    font-semibold"
                  >
                    {item.year}
                  </span>
                </div>

                {/* Degree */}

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.level}
                </h3>

                <p className="text-cyan-600 font-semibold mt-1">
                  {item.branch}
                </p>

                {/* Institution */}

                <p className="mt-5 text-slate-600 leading-6">
                  {item.institution}
                </p>

                {/* Score */}

                <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between items-center">

                  <span className="text-sm text-slate-400">
                    Result
                  </span>

                  <span className="font-bold text-slate-900">
                    {item.score}
                  </span>

                </div>

                {/* Location */}

                <p className="mt-4 text-sm text-slate-400">
                  {item.location}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Education;