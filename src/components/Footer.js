import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: "bi-instagram",
      url: "https://instagram.com/gharsafareats",
      color: "#E4405F",
    },
    {
      name: "TikTok",
      icon: "bi-tiktok",
      url: "https://tiktok.com/@gharsafareats",
      color: "#000000",
    },
    {
      name: "Facebook",
      icon: "bi-facebook",
      url: "https://fb.com/gharsafareats",
      color: "#1877F2",
    },
    {
      name: "WhatsApp",
      icon: "bi-whatsapp",
      url: "https://wa.me/923377236836",
      color: "#25D366",
    },
  ];

  const quickLinks = [
    { name: "Home", section: "home" },
    { name: "Weekly Plans", section: "weekly-plans" },
    { name: "FAQ", section: "faq" },
    { name: "About Us", section: "about" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-custom text-white">
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4">
            <div className="mb-4">
              <h3 className="fw-bold mb-3">Gharsafareats.pk</h3>
              <p className="mb-4 opacity-90 fs-6">
                "Because home-cooked is always better"
              </p>
              <p className="opacity-75 lh-lg">
                Delivering fresh, wholesome, home-style meals to offices,
                hostels, and universities across Islamabad. Made with love,
                packed with care.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="d-flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = social.color;
                    e.target.style.borderColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "rgba(255,255,255,0.5)";
                  }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <button
                    className="btn btn-link text-white text-decoration-none p-0 opacity-75"
                    onClick={() => scrollToSection(link.section)}
                    style={{
                      background: "none",
                      border: "none",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = "1")}
                    onMouseLeave={(e) => (e.target.style.opacity = "0.75")}
                  >
                    <i className="bi bi-arrow-right me-2 small"></i>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <div className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle bg-primary-custom d-flex align-items-center justify-content-center me-3"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <a
                  href="tel:+923377236836"
                  className="text-white text-decoration-none opacity-90"
                >
                  +92 337 723 6836
                </a>
              </div>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle bg-success d-flex align-items-center justify-content-center me-3"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-whatsapp"></i>
              </div>
              <div>
                <a
                  href="https://wa.me/923377236836"
                  className="text-white text-decoration-none opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div
                className="rounded-circle bg-info d-flex align-items-center justify-content-center me-3"
                style={{ width: "40px", height: "40px", minWidth: "40px" }}
              >
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="opacity-90">
                <small>Serving Islamabad</small>
                <br />
                <small className="opacity-75">H, G, F, E sectors & more</small>
              </div>
            </div>
          </div>

          {/* Business Hours & Stats */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-4">Service Hours</h5>
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2 p-2 bg-white bg-opacity-10 rounded">
                <span className="fw-semibold">🍽️ Lunch</span>
                <span className="small opacity-90">12:00 - 1:30 PM</span>
              </div>
              <div className="d-flex justify-content-between align-items-center p-2 bg-white bg-opacity-10 rounded">
                <span className="fw-semibold">🍽️ Dinner</span>
                <span className="small opacity-90">7:00 - 8:30 PM</span>
              </div>
            </div>

            {/* Mini Stats */}
            <div className="row g-2">
              <div className="col-6">
                <div className="text-center p-3 bg-white bg-opacity-10 rounded-3">
                  <div className="fw-bold fs-5 text-primary-custom">500+</div>
                  <small className="opacity-75">Customers</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-3 bg-white bg-opacity-10 rounded-3">
                  <div className="fw-bold fs-5 text-warning">4.9★</div>
                  <small className="opacity-75">Rating</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Areas */}
      <div className="border-top border-white border-opacity-20">
        <div className="container py-4">
          <div className="text-center">
            <h6 className="fw-bold mb-3">Free Delivery Areas</h6>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {[
                    "H13",
                    "H12",
                    "H11",
                    "H10",
                    "H9",
                    "H8",
                    "G13",
                    "G11",
                    "G10",
                    "G9",
                    "G8",
                    "G7",
                    "G6",
                    "F11",
                    "F10",
                    "F8",
                    "E11",
                  ].map((area, index) => (
                    <span
                      key={index}
                      className="badge bg-primary-custom px-3 py-2 rounded-pill"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-3 mb-0 small opacity-75">
                  Other I or D sectors: PKR 1,050/week delivery charge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top border-white border-opacity-20">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 opacity-75">
                © {currentYear} Gharsafareats.pk – All Rights Reserved
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0 opacity-90 fw-semibold">
                "Because home-cooked is always better"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923377236836"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{
          width: "60px",
          height: "60px",
          zIndex: 1050,
          animation: "pulse 2s infinite",
        }}
      >
        <i className="bi bi-whatsapp fs-4"></i>
      </a>

      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
