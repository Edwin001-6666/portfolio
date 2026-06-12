import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    name: "C Programming",
    icon: "⚙️",
    description: "Systems-level programming and algorithm implementation",
    level: 80,
  },
  {
    name: "Data Structures",
    icon: "🏗️",
    description: "Arrays, linked lists, trees, graphs, and algorithms",
    level: 75,
  },
  {
    name: "Git & GitHub",
    icon: "🔀",
    description: "Version control, collaboration, and open-source workflows",
    level: 70,
  },
  {
    name: "Linux",
    icon: "🐧",
    description: "Command line, shell scripting, and system administration",
    level: 65,
  },
  {
    name: "Cloud Computing",
    icon: "☁️",
    description: "Cloud services, deployment, and infrastructure basics",
    level: 60,
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    description: "Analytical thinking and competitive programming mindset",
    level: 85,
  },
  {
    name: "HTML",
    icon: "🌐",
    description: "Semantic markup, accessibility, and web fundamentals",
    level: 70,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and competencies I've been developing"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <AnimateOnScroll key={skill.name} animation="fade-up" delay={i * 100}>
              <div
                id={`skill-${skill.name.toLowerCase().replace(/[\s&]/g, "-")}`}
                className="group glass-card rounded-2xl p-6 hover:border-accent-cyan/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-cyan/5"
              >
                {/* Icon */}
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-foreground/90 mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/40 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-end mt-1.5">
                  <span className="text-xs text-foreground/30">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
