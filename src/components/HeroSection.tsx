import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import portraitImg from "../assets/profile-pic4.png";
import resume from "../assets/manohari-aus-resume.pdf"

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <p className="font-mono text-sm text-primary mb-4 tracking-wider">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Manohari <span className="text-gradient">a Sr. Software Associate</span>
            </h1>
            <p className="text-[16px] text-foreground leading-relaxed max-w-lg mb-8">
             Detail-oriented Senior Web and Frontend Developer with extensive professional experience across the WordPress ecosystem, headless CMS architectures, and modern JavaScript frameworks. Proven expertise in building high-performance Headless WordPress platforms using React.js and Next.js, creating responsive interfaces from Figma designs, and optimizing websites for Core Web Vitals and technical SEO. Skilled in deploying frontend applications using cloud-based CI/CD pipelines and integrating frontend user interfaces with underlying cloud infrastructure, including supporting microservices (AWS Lambda using Python) via API Gateways. Committed to maintaining strict standards for clean code, security, and long-term maintainability while collaborating closely with cross-functional marketing, design, and operations teams to deliver commercially effective digital assets.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={resume}
                target="_blank"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow"
              >
                <FileDown size={18} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/manohari1990"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/manohari-g-a7054262/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manu.manohari90@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 blur-2xl" />
              <img
                src={portraitImg}
                alt="Developer portrait"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-2 border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
