import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
          <div className="w-full md:w-auto flex justify-center md:justify-start opacity-0 animate-fade-in">
            <img src="/faceshot.png" alt="Jake Potter" className="faceshot-photo" />
          </div>

          <div className="text-center md:text-left max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Jake
              </span>
              <span className="text-primary text-glow ml-2 opacity-0 animate-fade-in-delay-2">
                Potter
              </span>
            </h1>

            <p className="text-lg md:text-3xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
              A Computer science student specializing in building intelligent applications using AI, data analysis, and modern web technologies.
              I enjoy turning complex ideas into functional products and creating tools that solve real world problems.
            </p>

            <div className="mt-6 pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center md:justify-start">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
