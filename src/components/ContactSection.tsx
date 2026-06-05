import { Mail, Github, Linkedin, MapPin, Send, Calendar, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";


const LocationSection = () => {
  // San Francisco coordinates
  const lat = 17.4988384;
  const lng = 78.3867533;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.05},${lat - 0.03},${lng + 0.05},${lat + 0.03}&layer=mapnik&marker=${lat},${lng}`;

  return (
      <div className="">
        <h2 className="font-mono text-sm text-primary tracking-wider mb-2">Based in</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Hyderabad, Telangana, India</h3>
        <p className="text-muted-foreground mb-8 flex items-center gap-2">
          <MapPin size={16} className="text-primary" />
          Open to remote & hybrid opportunities worldwide
        </p>

        <div className="rounded-xl border border-border overflow-hidden glow">
          <iframe
            title="My Location"
            src={mapSrc}
            className="w-full h-72 sm:h-96 border-0"
            loading="lazy"
            style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.6) brightness(0.8)" }}
          />
        </div>
      </div>
  );
};



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
  }
];

const ContactSection = () => {

  const [open, setOpen] = useState(false);
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal>
            <LocationSection/>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-mono text-sm text-primary tracking-wider mb-2">Get in Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
              I'm always interested in new opportunities, challenging projects, and meaningful
              collaborations. Whether you have a question or just want to say hi — my inbox is always open.
            </p>
            <div className="max-w-2xl">
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
            </div>
          </ScrollReveal>
        </div>

        
        {/* Floating calendar trigger - hidden when panel open */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open conversation panel"
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 flex h-14 w-14 items-center justify-center rounded-l-xl bg-primary text-primary-foreground shadow-lg glow transition-all duration-500 hover:w-16 ${
          open ? "translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
        }`}
      >
        <Calendar size={22} />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-border bg-card shadow-2xl transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col p-8">
          <div className="flex items-start justify-between mb-6">
            <h4 className="text-xl font-bold">Have an Idea? Let’s Turn It Into Reality</h4>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close panel"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-secondary-foreground transition-colors hover:bg-muted"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Have a project in mind or looking for a senior engineer? Let's discuss how I can help bring your ideas to life. I typically respond within 24 hours.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Calendar size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-lg font-medium">Schedule a Call</p>
                <p className="text-sm text-muted-foreground">
                  Book a free 15-minute consultation to discuss your project, architecture, or scaling needs. No pressure — just clarity
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Send size={18} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-lg font-medium">Quick Message</p>
                <p className="text-sm text-muted-foreground">
                  Drop me an email with your project details and I'll get back to you ASAP.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href="mailto:manu.manohari90@gmail.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow"
            >
              <Mail size={18} />
              Send an Email
            </a>
            <a
              href="https://calendly.com/manu-manohari90/free-15-min-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 text-sm font-semibold text-secondary-foreground transition-all hover:bg-muted"
            >
              <Calendar size={18} />
              Book Free Consultation
            </a>
          </div>
        </div>
      </aside>
      </div>
    </section>
  );
};






export default ContactSection;
