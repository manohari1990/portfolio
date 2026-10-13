import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Sr. Software Associate - L3",
    company: "Yotta TechPorts Inc. | Hyderabad",
    period: "Oct 2021 — Dec 2025",
    description:
      "Implemented core backend auth and API for GitHub/Google OAuth and native authentication, implemented JWT sessions to achieve secure the authorised API call, and locked down the database using custom security groups and SSH-only tunneling. Led technical walkthroughs for clients, translating business needs into straightforward frontend specs and recommending pragmatic tech choices. Automated deployments for both frontend & backend.",
    highlights: ["React JS", "Node.JS", "Git", "CI/CD", "Vercel", "AWS Lambda", "API Gateway", "CloudFront"],
  },
  {
    role: "Software Engineer (PHP)",
    company: "CSS India Center Pvt. Ltd | Hyderabad",
    period: "Sep 2019 — Sep 2021",
    description:
      "Developed end-to-end frontend development using PHP, jQuery, JSON and AJAX, ensuring seamless functionality for web applications. Managed everyday hosting and launch operations—migrated sites via cPanel, updated DNS zone files (A, CNAME, MX), installed SSL certs, and monitored live deployments.",
    highlights: ["PHP", "WordPress Development", "API Integration", "Cross-Browser Compatibility"],
  },
  {
    role: "PHP Developer",
    company: "Ayatas Technologies | Hyderabad",
    period: "Mar 2015 — Apr 2018",
    description:
      "As a Jr Developer, developed pixel-perfect website themes from scratch using WordPress, MySQL and jQuery. Implemented custom hooks for calculations, data filtering etc.",
    highlights: ["PHP", "WordPress", "jQuery", "Theme Development"],
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
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
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
