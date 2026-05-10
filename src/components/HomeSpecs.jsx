import "../styles/home-specs.css";

export default function HomeSpecs() {
  const specs = [
    ["Machine Type", "CNC Plasma / Flame / Laser Cutting Machines"],
    ["Cutting Area", "Custom size available as per client requirement"],
    ["Cutting Support", "Plasma, Flame, Laser and Air Plasma Cutting"],
    ["Material Support", "MS, SS, Aluminium and other industrial metals"],
    [
      "Application",
      "Fabrication, signage, gates, grills, plate cutting and industrial production work",
    ],
    ["Support", "Installation, training and service support"],
  ];

  return (
    <section className="section home-specs-section">
      <div className="section-head">
        <span>Technical Details</span>
        <h2>Machine Specifications</h2>
        <p>
          Basic specification overview for quick client understanding. Machine
          size, cutting area and power options can be customized as per project
          requirement.
        </p>
      </div>

      <div className="home-specs-card">
        {specs.map(([label, value]) => (
          <div className="home-specs-row" key={label}>
            <div className="home-specs-label">{label}</div>
            <div className="home-specs-value">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}