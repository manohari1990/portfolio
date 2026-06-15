import ScrollReveal from "./ScrollReveal";

const skills = [
  { category: "Frontend", items: ["ReactJS", "JavaScript", "Tailwind CSS"] },
  { category: "Backend", items: ["API Development", "PHP", "MySQL"] },
  { category: "Cloud & DevOps", items: ["AWS Lambda", "AWS CI/CD", "Git", "Vercel"] },
  { category: "Tools", items: ["Figma", "Google Analytics"] },
  { category: "CRM & CMS", items: ["WordPress", "GoHighLevel"] },
  { category: "Deployments & Hosting", items: ["GoDaddy", "Hostinger"] }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-mono text-sm text-primary tracking-wider mb-2">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Skills & Technologies</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:glow">
                <h4 className="font-mono text-xl text-primary tracking-wider uppercase mb-4">
                  {group.category}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-lg text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
