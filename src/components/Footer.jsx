import { SITE_DATA } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerSimple">
        <div>
          <h2>{SITE_DATA.brandShort} — {SITE_DATA.brandName}</h2>
          <p>{SITE_DATA.description}</p>
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
        </div>
      </div>

      <div className="footerBottom">
        <span>© {new Date().getFullYear()} {SITE_DATA.brandName}</span>
        <span>Interior custom, kitchen set, dan furniture Banyumas.</span>
      </div>
    </footer>
  );
}
