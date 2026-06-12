import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="Education"
            subtitle="My academic journey in Computer Science"
          />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent" />

            {/* Education card */}
            <div className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full gradient-bg border-4 border-background z-10 animate-pulse-glow" />

              <div className="glass-card rounded-2xl p-8 hover:border-accent-cyan/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-cyan/5">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  Current Student
                </div>

                <h3 className="text-2xl font-bold text-foreground/90 mb-2">
                  Bachelor of Engineering
                </h3>
                <p className="text-lg text-accent-blue font-medium mb-4">
                  Computer Science & Engineering
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-foreground/50">
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-accent-cyan/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Karnataka, India
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-accent-cyan/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    B.E. in Computer Science
                  </span>
                </div>

                {/* Relevant coursework */}
                <div className="mt-6 pt-6 border-t border-card-border">
                  <p className="text-xs text-foreground/30 uppercase tracking-wider mb-3">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Computer Graphics",
                      "Cloud Computing",
                      "Operating Systems",
                      "Database Systems",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs rounded-full bg-foreground/5 text-foreground/40 border border-foreground/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
