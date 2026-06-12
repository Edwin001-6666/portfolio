import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <SectionHeading
            title="About Me"
            subtitle="Get to know me and what drives my passion for technology"
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual card */}
          <AnimateOnScroll animation="slide-left" delay={200}>
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 animate-pulse-glow">
                <div className="flex items-center justify-center w-full h-64 relative">
                  {/* Decorative orbs */}
                  <div className="absolute w-32 h-32 rounded-full bg-accent-blue/10 blur-2xl top-4 left-4 animate-float" />
                  <div
                    className="absolute w-24 h-24 rounded-full bg-accent-cyan/10 blur-2xl bottom-4 right-4"
                    style={{ animation: "float 6s ease-in-out 2s infinite" }}
                  />
                  {/* Code block decoration */}
                  <div className="font-mono text-sm space-y-2 text-left">
                    <p className="text-foreground/30">
                      <span className="text-accent-blue">const</span>{" "}
                      <span className="text-accent-cyan">developer</span> ={" "}
                      {"{"}
                    </p>
                    <p className="pl-6 text-foreground/40">
                      name:{" "}
                      <span className="text-green-400">
                        &quot;Edwin John&quot;
                      </span>
                      ,
                    </p>
                    <p className="pl-6 text-foreground/40">
                      role:{" "}
                      <span className="text-green-400">
                        &quot;CS Student&quot;
                      </span>
                      ,
                    </p>
                    <p className="pl-6 text-foreground/40">
                      passion:{" "}
                      <span className="text-green-400">
                        &quot;Cloud & AI&quot;
                      </span>
                      ,
                    </p>
                    <p className="pl-6 text-foreground/40">
                      learning:{" "}
                      <span className="text-accent-cyan">true</span>,
                    </p>
                    <p className="text-foreground/30">{"}"}</p>
                  </div>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-accent-cyan/30 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-accent-blue/30 rounded-bl-2xl" />
            </div>
          </AnimateOnScroll>

          {/* Text content */}
          <AnimateOnScroll animation="slide-right" delay={400}>
            <div className="space-y-6">
              <p className="text-foreground/70 text-lg leading-relaxed">
                I&apos;m a{" "}
                <span className="text-accent-cyan font-semibold">
                  Computer Science student
                </span>{" "}
                with a deep interest in building modern software solutions.
                My journey in tech is driven by curiosity and a desire to
                create impactful applications.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                I&apos;m particularly interested in{" "}
                <span className="text-accent-blue font-medium">
                  Cloud Computing
                </span>
                ,{" "}
                <span className="text-accent-blue font-medium">
                  Programming
                </span>
                ,{" "}
                <span className="text-accent-blue font-medium">
                  Artificial Intelligence
                </span>
                , and{" "}
                <span className="text-accent-blue font-medium">
                  Software Development
                </span>
                . I continuously learn new technologies and build practical
                projects to strengthen my skills.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "7+", label: "Skills" },
                  { value: "4+", label: "Projects" },
                  { value: "∞", label: "Curiosity" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center hover:border-accent-cyan/30 transition-colors duration-300"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/40 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
