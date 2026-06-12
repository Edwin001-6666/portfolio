import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    title: "Active GitHub Developer",
    description:
      "Maintaining an active GitHub presence with regular contributions, project repositories, and code collaboration.",
    color: "text-accent-blue",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Open Source Enthusiast",
    description:
      "Passionate about open-source development, contributing to community-driven projects and sharing knowledge.",
    color: "text-accent-cyan",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Achievements"
            subtitle="Milestones and interests that define my tech journey"
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, i) => (
            <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 200}>
              <div
                id={`achievement-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group glass-card rounded-2xl p-8 text-center hover:border-accent-cyan/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-cyan/5"
              >
                {/* Icon container */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${item.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    background:
                      item.color === "text-accent-blue"
                        ? "rgba(59,130,246,0.1)"
                        : "rgba(6,182,212,0.1)",
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-foreground/90 mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-foreground/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
