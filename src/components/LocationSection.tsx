import { MapPin } from "lucide-react";

const LocationSection = () => {
  // San Francisco coordinates
  const lat = 17.4988384;
  const lng = 78.3867533;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.05},${lat - 0.03},${lng + 0.05},${lat + 0.03}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <section id="location" className="py-24">
      <div className="container">
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
    </section>
  );
};

export default LocationSection;
