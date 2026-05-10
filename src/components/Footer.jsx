import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { categories, company } from "../data.js";
import "../styles/footer.css";

export default function Footer() {
  const message =
    "Hello, I want details about CNC cutting machines. Please share catalog and price details.";
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">PAI</div>
          <h2>{company.name}</h2>
          <p>{company.tagline}</p>

          <a className="footer-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp Inquiry
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="footer-col">
          <h3>Machine Categories</h3>
          <div className="footer-links">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.id}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3>Contact Details</h3>
          <div className="footer-contact">
            <p>
              <Phone size={18} />
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </p>
            <p>
              <Mail size={18} />
              <a href={`mailto:${company.email1}`}>{company.email1}</a>
            </p>
            <p>
              <Mail size={18} />
              <a href={`mailto:${company.email2}`}>{company.email2}</a>
            </p>
            <p>
              <MapPin size={18} />
              <span>{company.address}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {company.name}. All Rights Reserved.</span>
        <span>Industrial CNC Cutting Machine Catalog</span>
      </div>
    </footer>
  );
}
