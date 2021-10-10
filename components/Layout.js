import Link from "next/link";
import SubHeader from "./SubHeader";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Espresso</span>
              <span>Drink Recipe.</span>
            </h1>
          </a>
        </Link>
      </header>
      <SubHeader />

      <div className="page-content">{children}</div>

      <footer>
        <p>Footer text</p>
      </footer>
    </div>
  );
}
