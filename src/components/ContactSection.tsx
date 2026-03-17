import { Mail, Github, Linkedin, MapPin, Send, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "manu.manohari90@gmail.com",
    href: "mailto:manu.manohari90@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/manohari1990",
    href: "https://github.com/manohari1990",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/manohari",
    href: "https://www.linkedin.com/in/manohari-g-a7054262/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: "#location",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-mono text-sm text-primary tracking-wider mb-2">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
            I'm always interested in new opportunities, challenging projects, and meaningful
            collaborations. Whether you have a question or just want to say hi — my inbox is always open.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:glow group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">{link.value}</p>
                  </div>
                </a>
              ))}

              {/* Availability badge */}
              <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Currently Available</p>
                  <p className="text-xs text-muted-foreground">Open to full-time & contract roles</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA card */}
          <ScrollReveal direction="right">
            <div className="flex flex-col justify-between h-full rounded-xl border border-border bg-card p-8">
              <div>
                <h4 className="text-xl font-bold mb-3">Start a Conversation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Have a project in mind or looking for a senior engineer? Let's discuss how I can
                  help bring your ideas to life. I typically respond within 24 hours.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Schedule a Call</p>
                      <p className="text-xs text-muted-foreground">
                        Book a 30-minute discovery call to discuss your project requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Send size={18} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Quick Message</p>
                      <p className="text-xs text-muted-foreground">
                        Drop me an email with your project details and I'll get back to you ASAP.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow"
                >
                  <Mail size={18} />
                  Send an Email
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 text-sm font-semibold text-secondary-foreground transition-all hover:bg-muted"
                >
                  <Calendar size={18} />
                  Book a Call
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
