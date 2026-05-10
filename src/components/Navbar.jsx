import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Phone,
  Home,
  Boxes,
  Mail,
  Menu,
  X,
  Factory,
} from "lucide-react";
import { company } from "../data.js";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link className="brand" to="/" onClick={closeMenu}>
          <div className="brand-logo">PAI</div>

          <div>
            <h2>{company.name}</h2>
            <p>{company.tagline}</p>
          </div>
        </Link>

        <div className="nav-links desktop-links">
          <NavLink to="/">
            <Home size={17} />
            Home
          </NavLink>

          <a href="/#products">
            <Boxes size={17} />
            Products
          </a>

          <a href="/#contact">
            <Mail size={17} />
            Contact
          </a>
        </div>

        <a className="nav-call desktop-call" href={`tel:${company.phone}`}>
          <Phone size={18} />
          <span>{company.phone}</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          <Home size={19} />
          <span>Home</span>
        </NavLink>

        <a href="/#products" onClick={closeMenu}>
          <Boxes size={19} />
          <span>Products</span>
        </a>

        <a href="/#contact" onClick={closeMenu}>
          <Mail size={19} />
          <span>Contact</span>
        </a>

        <a className="mobile-menu-call" href={`tel:${company.phone}`}>
          <Phone size={19} />
          <span>Call Now</span>
        </a>

        <div className="mobile-menu-note">
          <Factory size={18} />
          <p>CNC Plasma, Flame & Laser Cutting Solution</p>
        </div>
      </div>
    </header>
  );
}