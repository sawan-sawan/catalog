import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero.jsx";
import HomeSpecs from "../components/HomeSpecs.jsx";
import ContactSection from "../components/ContactSection.jsx";
import { categories } from "../data.js";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section products-overview" id="products">
        <div className="section-head">
          <span>Product Catalog</span>
          <h2>Machine Categories</h2>
          <p>
            Choose a category to view all machines, product details and direct
            WhatsApp inquiry button.
          </p>
        </div>

        <div className="category-cards">
          {categories.map((category) => (
            <article className="category-card" key={category.id}>
              <div className="category-img">
                <img src={category.image} alt={category.name} />
              </div>

              <div className="category-content">
                <span>{category.products.length} Machines</span>
                <h3>{category.name}</h3>

                <ul>
                  {category.products.slice(0, 4).map((product) => (
                    <li key={product.name}>{product.name}</li>
                  ))}
                </ul>

                <Link className="view-all-btn" to={`/category/${category.id}`}>
                  View All <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HomeSpecs />

      <ContactSection />
    </>
  );
}