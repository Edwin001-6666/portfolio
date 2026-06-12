import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding"
    >
      {/* Glow */}
      <div className="hero-glow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateOnScroll animation="fade-in" delay={100}>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-sm font-medium tracking-wider">
            Welcome to my portfolio
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Edwin John</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/60 font-medium mb-4">
            Computer Science Student{" "}
            <span className="text-accent-cyan">|</span> Cloud Computing
            Enthusiast <span className="text-accent-cyan">|</span>{" "}
            Programmer
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={600}>
          <p className="text-base md:text-lg text-foreground/40 max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about cloud computing, software development, and
            building innovative solutions through technology.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="hero-view-projects"
              href="#projects"
              className="group relative px-8 py-3.5 rounded-xl font-semibold text-white gradient-bg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a
              id="hero-contact-me"
              href="#contact"
              className="px-8 py-3.5 rounded-xl font-semibold border border-accent-blue/30 text-foreground/80 hover:border-accent-cyan/50 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </AnimateOnScroll>

        {/* Scroll indicator */}
        <AnimateOnScroll animation="fade-in" delay={1200}>
          <div className="mt-20 flex justify-center">
            <a href="#about" className="animate-float" aria-label="Scroll down">
              <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
                <div className="w-1.5 h-3 rounded-full gradient-bg animate-pulse" />
              </div>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
