import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { categories } from "../data.js";
import ProductCard from "../components/ProductCard.jsx";
import Specs from "../components/Specs.jsx";
import "../styles/category-page.css";
import { useScrollToTop } from "../hooks/useScrollToTop";


export default function CategoryPage() {
  useScrollToTop();
  const { categoryId } = useParams();
  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return (
      <main className="category-page">
        <div className="section">
          <h1>Category not found</h1>
          <Link className="back-link" to="/">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="category-page">
      <section className="category-hero">
        <div>
          <Link className="back-link" to="/">
            <ArrowLeft size={18} /> Back to Home
          </Link>

          <span>Machine Category</span>
          <h1>{category.name}</h1>
          <p>{category.short}</p>
        </div>

        <div className="category-hero-image">
          <img src={category.image} alt={category.name} />
        </div>
      </section>
      <section className="section machines-section">
        <div className="machine-section-head">
          <span>Available Machines</span>
          <h2>{category.name}</h2>
        </div>

        <div className="machine-grid">
          {category.products.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
      </section>
    </main>
  );
}
