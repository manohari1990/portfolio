import logo from "../assets/mg-logo.png"

const FooterSection = () => (
  <footer id="footer" className="border-t border-border py-12">
    <div className="container text-center">
      <img src={logo} width={150} style={{display:"inline"}}/>
      <p className="text-sm text-muted-foreground mt-2">
        © {new Date().getFullYear()} Manohari Gara. Built with React & Tailwind CSS and powered by AWS CI/CD.
      </p>
    </div>
  </footer>
);

export default FooterSection;
