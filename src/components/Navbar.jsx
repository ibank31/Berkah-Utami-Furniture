import { Link, NavLink } from "react-router-dom";
import { SITE_DATA } from "../data/siteData";

const navItems = [
  { label: "Beranda", to: "/" },
  { label: "Layanan", to: "/layanan" },
  { label: "Portofolio", to: "/portofolio" },
  { label: "Kontak", to: "/kontak" }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img
          className="brandLogo"
          src="/assets/logo/logo-transparent-attempt.png"
          alt="Logo BAF Berkah Utami Furniture"
        />
        <span className="brandText">
          <strong>{SITE_DATA.brandShort}</strong>
          <small>{SITE_DATA.brandName}</small>
        </span>
      </Link>

      <nav>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a className="navCta" href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer">
        Konsultasi
      </a>
    </header>
  );
}
