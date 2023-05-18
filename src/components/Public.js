import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Saidmuhammad Tech Company</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Tashkent City, Saidmuhammad B. provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Saidmuhammad Tech
          <br />
          555 Tashkent Drive
          <br />
          Tashkent, Uzbekistan 12345
          <br />
          <a href="tel:+998885506505">+998 (88) 550-65-05</a>
        </address>
        <br />
        <p>Owner: Saidmuhammad Boboyev</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
