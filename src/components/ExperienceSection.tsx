import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2021 — Present",
    description:
      "Lead a team of 6 engineers building microservices architecture. Reduced API latency by 45% and improved system reliability to 99.97% uptime.",
    highlights: ["Microservices", "System Design", "Team Lead"],
  },
  {
    role: "Full-Stack Developer",
    company: "InnovateLab",
    period: "2019 — 2021",
    description:
      "Built and shipped 3 production products from scratch, serving 50K+ monthly active users. Implemented CI/CD pipelines and automated testing.",
    highlights: ["React", "Node.js", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "DataFlow Systems",
    period: "2017 — 2019",
    description:
      "Developed data processing pipelines handling 2M+ daily events. Optimized database queries resulting in 3x performance improvement.",
    highlights: ["Python", "PostgreSQL", "Data Engineering"],
  },
  {
    role: "Junior Developer",
    company: "WebStudio Agency",
    period: "2016 — 2017",
    description:
      "Delivered 20+ client projects including e-commerce platforms and CMS solutions. Collaborated directly with designers and stakeholders.",
    highlights: ["JavaScript", "PHP", "WordPress"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-mono text-sm text-primary tracking-wider mb-2">Career</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Professional Experience</h3>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="left">
                <div className="relative pl-8 md:pl-20">
                  {/* Dot */}
                  <div className="absolute left-0 md:left-8 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                  <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold">{exp.role}</h4>
                        <p className="text-primary font-mono text-sm">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
