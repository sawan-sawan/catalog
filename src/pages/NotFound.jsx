import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="section not-found">
      <h1>Page Not Found</h1>
      <p>This page does not exist.</p>
      <Link className="primary-btn" to="/">Go Home</Link>
    </main>
  );
}
