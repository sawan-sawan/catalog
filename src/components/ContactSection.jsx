import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { company } from "../data.js";
import "../styles/contact-section.css";

export default function ContactSection() {
  const message =
    "Hello, I want details about CNC cutting machines. Please share catalog and price details.";

  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-left">
          <span>Contact Us</span>
          <h2>Get Machine Price & Details</h2>
          <p>
            For machine price, custom size, installation, training and service
            support details, contact us directly.
          </p>

          <a
            className="contact-whatsapp-btn"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Inquiry
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="contact-list">
          <div className="contact-item">
            <Phone size={22} />
            <div>
              <strong>Phone</strong>
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </div>
          </div>

          <div className="contact-item">
            <Mail size={22} />
            <div>
              <strong>Email</strong>
              <a href={`mailto:${company.email1}`}>{company.email1}</a>
              <a href={`mailto:${company.email2}`}>{company.email2}</a>
            </div>
          </div>

          <div className="contact-item">
            <MapPin size={22} />
            <div>
              <strong>Address</strong>
              <p>{company.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}