import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  isPlaceholder?: boolean;
}

const projects: Project[] = [
  {
    title: "Graphics Editor in C",
    description:
      "A graphics editor developed in C demonstrating computer graphics concepts and interactive drawing features.",
    techStack: ["C", "Computer Graphics"],
    github: "https://github.com/Edwin001-6666/c_prog_project",
  },
  {
    title: "Smart Plant Watering System",
    description:
      "An IoT-based smart watering system that automates plant care using sensors and cloud connectivity.",
    techStack: ["IoT", "Sensors", "Cloud"],
    isPlaceholder: true,
  },
  {
    title: "Cloud-Based Student Management System",
    description:
      "A full-stack student management platform deployed on cloud infrastructure with real-time data handling.",
    techStack: ["Cloud", "Database", "Web"],
    isPlaceholder: true,
  },
  {
    title: "AI Study Assistant",
    description:
      "An AI-powered study assistant that helps students organize notes, generate summaries, and track progress.",
    techStack: ["AI", "Machine Learning", "Python"],
    isPlaceholder: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Projects"
            subtitle="A showcase of my work and ongoing explorations"
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimateOnScroll
              key={project.title}
              animation={i % 2 === 0 ? "slide-left" : "slide-right"}
              delay={i * 150}
            >
              <div
                id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-blue/10 ${
                  project.isPlaceholder
                    ? "border-dashed hover:border-accent-cyan/30"
                    : "hover:border-accent-cyan/40"
                }`}
              >
                {/* Header */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10 flex items-center justify-center">
                  {project.isPlaceholder ? (
                    <div className="text-center">
                      <div className="text-4xl mb-2 opacity-40">🚀</div>
                      <span className="text-sm text-foreground/30 font-medium">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                        🎨
                      </div>
                      {/* Animated rings */}
                      <div className="absolute inset-0 -m-8 border border-accent-cyan/10 rounded-full animate-spin-slow" />
                      <div
                        className="absolute inset-0 -m-16 border border-accent-blue/5 rounded-full animate-spin-slow"
                        style={{ animationDirection: "reverse", animationDuration: "30s" }}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground/90 mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-foreground/50 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent-blue/10 text-accent-blue/80 border border-accent-blue/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold gradient-bg text-white hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-foreground/10 text-foreground/30 cursor-default">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
