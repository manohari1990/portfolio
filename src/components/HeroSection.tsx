import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import portraitImg from "../assets/profile-pic4.png";
import resume from "../assets/resume.pdf"

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
            <p className="text-[19px] text-foreground leading-relaxed max-w-lg mb-8">
             Frontend-focused Software Associate with <strong>9+ years</strong> of experience building responsive, high-performance web applications. Skilled in ReactJS (2+ years), JavaScript, HTML, CSS, jQuery, and WordPress, with backend expertise in PHP, Python, and AWS integrations. <br /> <br />Experienced in direct <strong>client communication</strong>, translating requirements into scalable solutions. <br /> Quick to <strong>adapt to new technologies</strong> and leverage AI tools to deliver efficient, industry-standard results. Known for meeting deadlines with quality and precision. <br />A strong <strong>team player</strong> who also excels as an <strong>independent contributor</strong>, taking ownership and ensuring successful project delivery from concept to completion.
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
