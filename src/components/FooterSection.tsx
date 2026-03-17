const FooterSection = () => (
  <footer id="contact" className="border-t border-border py-12">
    <div className="container text-center">
      <p className="font-mono text-sm text-primary mb-2">{"<dev />"}</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Manohari Gara. Built with React & Tailwind.
      </p>
    </div>
  </footer>
);

export default FooterSection;
