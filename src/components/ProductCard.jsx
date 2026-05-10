import { MessageCircle } from "lucide-react";
import { company } from "../data.js";

export default function ProductCard({ product }) {
  const message = `Hello, I am interested in ${product.name}. Please share price and details.`;
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <article className="machine-card">
      <div className="machine-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="machine-content">
        <div>
          <h3>{product.name}</h3>
          <strong className="machine-price">{product.price}</strong>
          <p>{product.desc}</p>

          <div className="machine-specs">
            {product.specs.slice(0, 4).map((spec) => (
              <span key={spec}>{spec}</span>
            ))}
          </div>
        </div>

        <a className="interested-btn" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          I am Interested
        </a>
      </div>
    </article>
  );
}
