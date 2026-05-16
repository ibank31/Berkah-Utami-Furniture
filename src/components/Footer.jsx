import { Link } from "react-router-dom";
import { SITE_DATA } from "../data/siteData";

const footerLinks = [
  { label: "Beranda", to: "/" },
  { label: "Layanan", to: "/layanan" },
  { label: "Portofolio", to: "/portofolio" },
  { label: "Kontak", to: "/kontak" }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <div className="footerLogoWrap">
            <img src="/assets/logo/logo-transparent-attempt.png" alt="Logo BUF Berkah Utami Furniture" />
          </div>
          <div>
            <h2>{SITE_DATA.brandShort}</h2>
            <p>{SITE_DATA.brandName}</p>
          </div>
        </div>

        <div className="footerCta">
          <h3>Butuh interior custom?</h3>
          <p>Konsultasikan kebutuhan ruang, ukuran, material, dan estimasi pengerjaan.</p>
          <a href={SITE_DATA.whatsappUrl} target="_blank" rel="noreferrer">
            Konsultasi WhatsApp
          </a>
        </div>
      </div>

      <div className="footerGrid">
        <div className="footerAbout">
          <h3>Tentang BUF</h3>
          <p>{SITE_DATA.description}</p>
        </div>

        <div>
          <h3>Navigasi</h3>
          <div className="footerLinks">
            {footerLinks.map((item) => (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Workshop</h3>
          {SITE_DATA.workshops.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div>
          <h3>Kontak</h3>
          <p>WhatsApp: {SITE_DATA.phoneDisplay}</p>
          <p>Jam: {SITE_DATA.operatingHours}</p>
          <p>Area: {SITE_DATA.mainArea} dan sekitarnya</p>
        </div>
      </div>

      <div className="footerBottom">
        <span>© {new Date().getFullYear()} {SITE_DATA.brandName}</span>
        <span>Desain interior, kitchen set, dan custom furniture Banyumas.</span>
      </div>
    </footer>
  );
}
