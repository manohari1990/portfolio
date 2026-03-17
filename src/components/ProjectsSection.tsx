import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "CHPTR.COM - Embed 2.0",
    description:
      "Developed responsive ReactJS interface with REST API integration and built FastAPI-based backend APIs for core CRUD operations. Collaborated closely with the on-site team to address business requirements and provide regular project updates.",
    tags: ["React", "Python", "FastAPI", "Vercel", "PostgreSQL"],
    live: "https://embed2.chptr.com/a7a72837-3d5b-4a48-bbf7-8ef0a96d2981?lang=en",
  },
  {
    title: "Quick Fix Golf (Mobile & Web)",
    description:
      "Developed scalable web and mobile applications including Quick Fix Golf, where I built interactive dashboards, chat systems, subscription workflows, and onboarding features using ReactJS, AWS Lambda, Python and Cognito authentication for secure and scalable architecture",
    tags: ["React", "Python", "AWS CodePipeline", "AWS CodeBuild", "AWS Lambda", "AWS API Gateway", "SQLAlchemy", "iOS App Store Connect"],
    live: "https://apps.apple.com/us/app/quickfixgolf/id1628697652",
  },
  {
    title: "InsureAPP - Quote Management System",
    description:
      "Developing reusable modules and contributing during the initial stages of project setup and package structuring, while optimizing performance through efficient state management",
    tags: ["ReactJS", "API Integration", "NPM Package Creation"],
  },
  {
    title: "Boca West Country Club",
    description:
      "Conducting impact analysis, providing accurate estimations, managing version control with SVN, and owning complete frontend development for web and mobile compatibility.",
    tags: ["CodeIgniter 3", "jQuery", "JavaScript", "API Integration", "Mobile Responsive"],
    live: "https://www.bocawestcc.org/",
  },
  {
    title: "WordPress Websites",
    description:"",
    tags: [],
    live: ""
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-mono text-sm text-primary tracking-wider mb-2">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Featured Projects</h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:glow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} live`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-mono text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
