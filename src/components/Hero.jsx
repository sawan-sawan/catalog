import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "../data.js";
import gantryMachineTwo from "../assets/gantry-machine-2.png";
import "../styles/hero.css";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Hero() {
   useScrollToTop();
  const message =
    "Hello, I want details about CNC Plasma, Flame and Laser Cutting Machines.";
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="eyebrow">Avichal Modi</span>
        <h1>Smart CNC Plasma, Flame  & Laser Cutting Machines</h1>
        <p>
          Explore professional cutting machine categories made for fabrication,
          metal cutting, plate cutting, signage, gates, grills and industrial
          production work.
        </p>

        <div className="hero-actions">
          <a className="primary-btn" href="#products">
            View Products <ArrowRight size={18} />
          </a>

          <a className="secondary-btn" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp Inquiry
          </a>
        </div>
      </div>

      <div className="hero-image-card">
        <img src={gantryMachineTwo} alt="CNC Cutting Machine" />
        <div className="hero-floating">
          <strong>4 Machine Categories</strong>
          <span>Plasma • Laser • Fiber • Air Plasma</span>
        </div>
      </div>
    </section>
  );
}
