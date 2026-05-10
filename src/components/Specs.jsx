import "../styles/specs.css";

export default function Specs({ category }) {
  const specs =
    category?.specTable || [
      ["Machine Category", category?.name || "CNC Cutting Machine"],
      ["Cutting Support", "Plasma / Flame / Laser cutting options"],
      ["Cutting Area", "Custom size available as per requirement"],
      ["Material Support", "MS, SS, Aluminium and other industrial metals"],
      ["Application", "Fabrication, plate cutting, signage, gates, grills and production work"],
      ["Support", "Installation, training and service support"],
    ];

  return (
    <section className="section specs-section">
      <div className="specs-head">
        <span>Technical Details</span>
        <h2>Machine Specifications</h2>
        <p>
          Basic specification overview for quick client understanding. Exact
          configuration can be customized as per project requirement.
        </p>
      </div>

      <div className="specs-card">
        {specs.map(([label, value]) => (
          <div className="specs-row" key={label}>
            <div className="specs-label">{label}</div>
            <div className="specs-value">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
